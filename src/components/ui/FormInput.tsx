interface FormInputProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
}

const FormInput = ({
  id,
  label,
  type = "text",
  value,
  placeholder,
  error,
  onChange,
}: FormInputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-text-primary"
      >
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border bg-surface px-4 py-3 text-sm text-text-primary outline-none placeholder:text-text-secondary ${
          error ? "border-red-500" : "border-border-soft focus:border-primary"
        }`}
      />

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormInput;
