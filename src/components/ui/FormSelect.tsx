interface FormSelectOption {
  label: string;
  value: string;
}

interface FormSelectProps {
  id: string;
  label: string;
  value: string;
  options: FormSelectOption[];
  error?: string;
  onChange: (value: string) => void;
}

const FormSelect = ({
  id,
  label,
  value,
  options,
  error,
  onChange,
}: FormSelectProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-text-primary"
      >
        {label}
      </label>

      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border bg-surface px-4 py-3 text-sm text-text-primary outline-none ${
          error ? "border-red-500" : "border-border-soft focus:border-primary"
        }`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default FormSelect;
