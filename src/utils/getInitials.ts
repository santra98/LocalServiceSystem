export const getInitials = (name: string) => {
  const trimmedName = name.trim();

  if (!trimmedName) return "?";

  const parts = trimmedName.split(" ").filter(Boolean);

  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }

  return `${parts[0].charAt(0)}${parts[1].charAt(0)}`.toUpperCase();
};
