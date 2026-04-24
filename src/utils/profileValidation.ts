import {
  doValuesMatch,
  hasMinLength,
  isRequired,
  isValidEmail,
} from "./validation";

export const validateProfileForm = ({
  fullName,
  email,
}: {
  fullName: string;
  email: string;
}) => {
  if (!isRequired(fullName)) {
    return "Full name is required.";
  }

  if (!isRequired(email)) {
    return "Email address is required.";
  }

  if (!isValidEmail(email)) {
    return "Please enter a valid email address.";
  }

  return "";
};

export const validatePasswordForm = ({
  currentPassword,
  newPassword,
  confirmPassword,
}: {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}) => {
  if (!isRequired(currentPassword)) {
    return "Current password is required.";
  }

  if (!isRequired(newPassword)) {
    return "New password is required.";
  }

  if (!hasMinLength(newPassword, 6)) {
    return "New password must be at least 6 characters.";
  }

  if (!isRequired(confirmPassword)) {
    return "Please confirm your new password.";
  }

  if (!doValuesMatch(newPassword, confirmPassword)) {
    return "New passwords do not match.";
  }

  return "";
};
