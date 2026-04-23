import { useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
import FormInput from "../components/ui/FormInput";
import InfoChip from "../components/ui/InfoChip";
import SettingsNav from "../components/ui/SettingsNav";
import SettingsSection from "../components/ui/SettingsSection";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { getInitials } from "../utils/getInitials";

type ProfileTab = "account" | "preferences" | "security";

const ProfilePage = () => {
  const { user, updateUser, isAuthenticated } = useAuth();
  const { showToast } = useToast();

  const [activeTab, setActiveTab] = useState<ProfileTab>("account");

  const [fullName, setFullName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  const [emailUpdates, setEmailUpdates] = useState(true);
  const [serviceReminders, setServiceReminders] = useState(true);
  const [marketingUpdates, setMarketingUpdates] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const initials = useMemo(
    () => getInitials(fullName || user?.name || "U"),
    [fullName, user?.name],
  );

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  const handleSaveProfile = () => {
    if (!fullName.trim() || !email.trim()) return;

    updateUser({
      name: fullName.trim(),
      email: email.trim(),
    });

    showToast("Profile updated successfully.", "success");
  };

  const handleSavePreferences = () => {
    showToast("Preferences updated successfully.", "success");
  };

  const handleSaveSecurity = () => {
    if (
      !currentPassword.trim() ||
      !newPassword.trim() ||
      !confirmPassword.trim()
    ) {
      return;
    }

    if (newPassword !== confirmPassword) {
      showToast("New passwords do not match.", "error");
      return;
    }

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");

    showToast("Security settings updated successfully.", "success");
  };

  const roleDescription =
    user.role === "customer"
      ? "You can browse providers, create bookings, and manage your service history."
      : user.role === "provider"
        ? "You can manage incoming requests, confirmed jobs, and your provider dashboard."
        : "You can monitor platform activity, approvals, and issue tracking.";

  const settingsItems = [
    { label: "Account", value: "account" },
    { label: "Preferences", value: "preferences" },
    { label: "Security", value: "security" },
  ];

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 sm:py-6">
      <div className="space-y-6 sm:space-y-8">
        <section className="rounded-3xl border border-border-soft bg-surface p-4 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent-light text-xl font-bold text-primary sm:h-20 sm:w-20 sm:text-2xl">
                {initials}
              </div>

              <div className="min-w-0">
                <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">
                  Profile Settings
                </h1>
                <p className="mt-1 text-sm leading-6 text-text-secondary sm:mt-2">
                  View and manage your account settings in one place.
                </p>
              </div>
            </div>

            <div>
              <InfoChip label={user.role} />
            </div>
          </div>
        </section>

        <div className="grid gap-4 sm:gap-6 xl:grid-cols-[260px_minmax(0,1fr)]">
          <div className="xl:sticky xl:top-24 xl:self-start">
            <SettingsNav
              items={settingsItems}
              activeValue={activeTab}
              onChange={(value) => setActiveTab(value as ProfileTab)}
            />
          </div>

          <div className="space-y-4 sm:space-y-6">
            {activeTab === "account" && (
              <>
                <SettingsSection
                  title="Basic Information"
                  description="Keep your profile details up to date so the app reflects the latest account information."
                >
                  <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
                    <FormInput
                      id="profileFullName"
                      label="Full name"
                      value={fullName}
                      placeholder="Enter your full name"
                      onChange={setFullName}
                    />

                    <FormInput
                      id="profileEmail"
                      label="Email address"
                      type="email"
                      value={email}
                      placeholder="Enter your email"
                      onChange={setEmail}
                    />
                  </div>

                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={handleSaveProfile}
                      className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover sm:w-auto"
                    >
                      Save Changes
                    </button>
                  </div>
                </SettingsSection>

                <SettingsSection
                  title="Account Role"
                  description="Your account currently has access to one role-specific dashboard and workflow."
                >
                  <div className="rounded-2xl bg-soft px-4 py-4 sm:px-5">
                    <p className="text-sm font-semibold capitalize text-text-primary">
                      {user.role}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">
                      {roleDescription}
                    </p>
                  </div>
                </SettingsSection>
              </>
            )}

            {activeTab === "preferences" && (
              <SettingsSection
                title="Preferences"
                description="Customize how you want to hear from the platform and receive reminders."
              >
                <div className="space-y-3 sm:space-y-4">
                  <label className="flex items-start justify-between gap-4 rounded-2xl bg-soft px-4 py-4 sm:px-5">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-text-primary">
                        Email updates
                      </p>
                      <p className="mt-1 text-sm text-text-secondary">
                        Receive important account and booking related updates by
                        email.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={emailUpdates}
                      onChange={(e) => setEmailUpdates(e.target.checked)}
                      className="mt-1 h-4 w-4 shrink-0"
                    />
                  </label>

                  <label className="flex items-start justify-between gap-4 rounded-2xl bg-soft px-4 py-4 sm:px-5">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-text-primary">
                        Service reminders
                      </p>
                      <p className="mt-1 text-sm text-text-secondary">
                        Get reminders before scheduled bookings and provider
                        activity.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={serviceReminders}
                      onChange={(e) => setServiceReminders(e.target.checked)}
                      className="mt-1 h-4 w-4 shrink-0"
                    />
                  </label>

                  <label className="flex items-start justify-between gap-4 rounded-2xl bg-soft px-4 py-4 sm:px-5">
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-text-primary">
                        Marketing updates
                      </p>
                      <p className="mt-1 text-sm text-text-secondary">
                        Receive occasional product tips, feature updates, and
                        offers.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={marketingUpdates}
                      onChange={(e) => setMarketingUpdates(e.target.checked)}
                      className="mt-1 h-4 w-4 shrink-0"
                    />
                  </label>
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={handleSavePreferences}
                    className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover sm:w-auto"
                  >
                    Save Preferences
                  </button>
                </div>
              </SettingsSection>
            )}

            {activeTab === "security" && (
              <SettingsSection
                title="Security"
                description="Manage your password and basic security-related account settings."
              >
                <div className="grid gap-4 sm:gap-5">
                  <FormInput
                    id="currentPassword"
                    label="Current password"
                    type="password"
                    value={currentPassword}
                    placeholder="Enter current password"
                    onChange={setCurrentPassword}
                  />

                  <FormInput
                    id="newPassword"
                    label="New password"
                    type="password"
                    value={newPassword}
                    placeholder="Enter new password"
                    onChange={setNewPassword}
                  />

                  <FormInput
                    id="confirmPassword"
                    label="Confirm new password"
                    type="password"
                    value={confirmPassword}
                    placeholder="Re-enter new password"
                    onChange={setConfirmPassword}
                  />
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    onClick={handleSaveSecurity}
                    className="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover sm:w-auto"
                  >
                    Update Password
                  </button>
                </div>
              </SettingsSection>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
