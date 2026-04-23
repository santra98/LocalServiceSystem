import type { ToastItem } from "../../types/toast";

interface ToastContainerProps {
  toasts: ToastItem[];
  onClose: (id: number) => void;
}

const variantClasses = {
  success: "border-green-200 bg-green-50 text-green-800",
  error: "border-red-200 bg-red-50 text-red-700",
  info: "border-border-soft bg-surface text-text-primary",
};

const ToastContainer = ({ toasts, onClose }: ToastContainerProps) => {
  if (toasts.length === 0) return null;

  return (
    <div className="pointer-events-none fixed right-4 top-4 z-50 flex w-full max-w-sm flex-col gap-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto rounded-2xl border px-4 py-3 shadow-lg ${variantClasses[toast.variant]}`}
        >
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm font-medium leading-6">{toast.message}</p>

            <button
              type="button"
              onClick={() => onClose(toast.id)}
              className="text-xs font-semibold opacity-70 transition hover:opacity-100"
            >
              Close
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;
