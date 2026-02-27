---
title: "Clean Architecture en TypeScript: Principios y Práctica"
date: "2026-02-15"
excerpt: "Aprende a implementar Clean Architecture en proyectos TypeScript para crear código mantenible, testeable y escalable."
tags: ["Clean Architecture", "TypeScript", "SOLID", "Design Patterns"]
readTime: 10
---

# Clean Architecture en TypeScript

Clean Architecture, propuesta por Robert C. Martin, organiza el código en capas concéntricas donde las dependencias apuntan hacia adentro, hacia las reglas de negocio.

## Las Capas

### Entidades (Dominio)

Las entidades encapsulan las reglas de negocio más generales y de alto nivel:

```typescript
// domain/entities/User.ts
export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    private _name: string,
    private _role: UserRole,
  ) {
    this.validateEmail(email);
  }

  get name(): string {
    return this._name;
  }

  canAccessResource(resource: Resource): boolean {
    return this._role.hasPermission(resource.requiredPermission);
  }

  private validateEmail(email: string): void {
    if (!email.includes('@')) {
      throw new InvalidEmailError(email);
    }
  }
}
```

### Casos de Uso

Los casos de uso contienen la lógica de aplicación específica:

```typescript
// application/use-cases/CreateUserUseCase.ts
export class CreateUserUseCase {
  constructor(
    private userRepository: UserRepository,
    private emailService: EmailService,
    private eventBus: EventBus,
  ) {}

  async execute(input: CreateUserInput): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(input.email);
    if (existingUser) {
      throw new UserAlreadyExistsError(input.email);
    }

    const user = User.create(input);
    await this.userRepository.save(user);
    await this.emailService.sendWelcome(user.email);
    await this.eventBus.publish(new UserCreatedEvent(user));

    return user;
  }
}
```

### Adaptadores de Interfaz

Los adaptadores convierten datos entre el formato más conveniente para los casos de uso y el formato más conveniente para las entidades externas:

```typescript
// infrastructure/repositories/PostgresUserRepository.ts
export class PostgresUserRepository implements UserRepository {
  constructor(private db: DatabaseConnection) {}

  async findByEmail(email: string): Promise<User | null> {
    const row = await this.db.query(
      'SELECT * FROM users WHERE email = $1',
      [email]
    );
    return row ? UserMapper.toDomain(row) : null;
  }
}
```

## Beneficios

- **Independencia de frameworks**: El negocio no depende de ningún framework
- **Testeable**: Las reglas de negocio se pueden probar sin UI, base de datos ni servidor
- **Independencia de la UI**: La interfaz puede cambiar sin cambiar el resto del sistema
- **Independencia de la base de datos**: Puedes cambiar PostgreSQL por MongoDB sin tocar la lógica de negocio

## Conclusión

Clean Architecture requiere más esfuerzo inicial pero paga dividendos enormes en mantenibilidad y escalabilidad a largo plazo.
