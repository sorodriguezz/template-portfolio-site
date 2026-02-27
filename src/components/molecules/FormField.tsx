"use client";

interface FormFieldProps {
  label: string;
  type?: "text" | "email" | "textarea" | "select";
  placeholder?: string;
  name: string;
  options?: { value: string; label: string }[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

export function FormField({
  label,
  type = "text",
  placeholder,
  name,
  options,
  value,
  onChange,
}: FormFieldProps) {
  const baseStyles =
    "w-full bg-bg-dark border border-border rounded-lg px-4 py-3 text-text-primary font-mono text-sm focus:outline-none focus:border-primary focus:shadow-[0_0_10px_rgba(0,229,255,0.15)] transition-all duration-300 placeholder:text-text-secondary/50";

  return (
    <div className="mb-4">
      <label className="block text-xs font-mono text-text-secondary uppercase tracking-widest mb-2">
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={4}
          className={`${baseStyles} resize-none`}
        />
      ) : type === "select" ? (
        <select name={name} value={value} onChange={onChange} className={baseStyles}>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseStyles}
        />
      )}
    </div>
  );
}
