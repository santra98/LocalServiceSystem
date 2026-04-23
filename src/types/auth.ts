export type UserRole = "customer" | "provider" | "admin";

export interface AuthUser {
  name: string;
  email: string;
  role: UserRole;
}
