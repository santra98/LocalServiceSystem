interface FormTextareaProps {
  id: string;
  label: string;
  value: string;
  rows?: number;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
}

const FormTextarea = ({
  id,
  label,
  value,
  rows = 4,
  placeholder,
  error,
  onChange,
}: FormTextareaProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-text-primary"
      >
        {label}
      </label>

      <textarea
        id={id}
        rows={rows}
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

export default FormTextarea;
