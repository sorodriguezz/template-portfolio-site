---
title: "Clean Architecture in TypeScript: Principles and Practice"
date: "2026-02-15"
excerpt: "Learn how to implement Clean Architecture in TypeScript projects to create maintainable, testable, and scalable code."
tags: ["Clean Architecture", "TypeScript", "SOLID", "Design Patterns"]
readTime: 10
---

# Clean Architecture in TypeScript

Clean Architecture, proposed by Robert C. Martin, organizes code in concentric layers where dependencies point inward, towards the business rules.

## The Layers

### Entities (Domain)

Entities encapsulate the most general and high-level business rules:

```typescript
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

### Use Cases

Use cases contain application-specific business logic:

```typescript
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

### Interface Adapters

Adapters convert data between the format most convenient for use cases and the format most convenient for external entities:

```typescript
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

## Benefits

- **Framework independence**: Business logic doesn't depend on any framework
- **Testable**: Business rules can be tested without UI, database, or server
- **UI independence**: The interface can change without changing the rest of the system
- **Database independence**: You can switch PostgreSQL for MongoDB without touching business logic

## Conclusion

Clean Architecture requires more initial effort but pays enormous dividends in long-term maintainability and scalability.
