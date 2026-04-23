interface SettingsNavItem {
  label: string;
  value: string;
}

interface SettingsNavProps {
  items: SettingsNavItem[];
  activeValue: string;
  onChange: (value: string) => void;
}

const SettingsNav = ({ items, activeValue, onChange }: SettingsNavProps) => {
  return (
    <nav className="rounded-3xl border border-border-soft bg-surface p-3 shadow-sm">
      <div className="flex gap-2 overflow-x-auto scrollbar-none xl:flex-col">
        {items.map((item) => {
          const isActive = item.value === activeValue;

          return (
            <button
              key={item.value}
              type="button"
              onClick={() => onChange(item.value)}
              className={`shrink-0 rounded-2xl px-4 py-3 text-left text-sm font-semibold transition xl:w-full ${
                isActive
                  ? "bg-accent-light text-primary"
                  : "text-text-primary hover:bg-soft"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default SettingsNav;
