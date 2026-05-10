import React, { useState, useEffect } from "react";
import { Edit2, Save, Loader2, GraduationCap, Building2, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useUpdateUserProfile, type ProfileUpdatePayload } from "@/lib/user-profile";
import { toast } from "sonner";

export function formatProfileDate(value: string | number | null | undefined) {
  if (value === null || value === undefined || value === "") return "Unknown";

  const numeric = typeof value === "number" ? value : Number(value);
  const parsed =
    Number.isFinite(numeric) && numeric > 1e12 ? new Date(numeric) : new Date(String(value));

  if (Number.isNaN(parsed.getTime())) return String(value);

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(parsed);
}

export function AccountOverview({ profile }: { profile: any }) {
  const email = profile?.email ?? "No email on file";
  const [editOpen, setEditOpen] = useState(false);
  const [form, setForm] = useState<ProfileUpdatePayload>({
    displayName: "",
    bio: "",
    collegeName: "",
    major: "",
  });

  const { mutate: updateProfile, isPending: saving } = useUpdateUserProfile();

  useEffect(() => {
    if (editOpen && profile) {
      setForm({
        displayName: profile.displayName ?? "",
        bio: profile.bio ?? "",
        collegeName: profile.collegeName ?? "",
        major: profile.major ?? "",
      });
    }
  }, [editOpen, profile]);

  const handleSave = () => {
    updateProfile(form, {
      onSuccess: () => {
        toast.success("Profile updated successfully!");
        setEditOpen(false);
      },
      onError: (err) => {
        toast.error(err.message || "Failed to update profile.");
      },
    });
  };

  const infoCards = [
    { label: "Email", value: email },
    { label: "Member since", value: formatProfileDate(profile?.createdAt) },
    { label: "Last login", value: formatProfileDate(profile?.lastLoginAt) },
    {
      label: "Verification",
      value: profile?.emailVerified ? "Email verified" : "Verification pending",
    },
  ];

  const extraCards = [
    {
      label: "Bio",
      value: profile?.bio || "Not set yet",
      icon: FileText,
      empty: !profile?.bio,
    },
    {
      label: "College",
      value: profile?.collegeName || "Not set yet",
      icon: Building2,
      empty: !profile?.collegeName,
    },
    {
      label: "Major",
      value: profile?.major || "Not set yet",
      icon: GraduationCap,
      empty: !profile?.major,
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold">Account overview</h3>
          <p className="text-xs text-muted-foreground">Your synced profile and login details</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full"
          onClick={() => setEditOpen(true)}
        >
          <Edit2 className="mr-1.5 h-3.5 w-3.5" /> Edit Profile
        </Button>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {infoCards.map((item) => (
          <div key={item.label} className="rounded-xl border border-border bg-secondary/30 p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              {item.label}
            </div>
            <div
              className="mt-2 text-sm font-medium text-foreground break-words"
              data-testid={`account-${item.label.replace(/\s+/g, "-")}`}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {extraCards.map((item) => (
          <div key={item.label} className="rounded-xl border border-border bg-secondary/30 p-4">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
              <item.icon className="h-3.5 w-3.5" />
              {item.label}
            </div>
            <div
              className={`mt-2 text-sm font-medium break-words ${item.empty ? "text-muted-foreground italic" : "text-foreground"}`}
            >
              {item.value}
            </div>
          </div>
        ))}
      </div>

      {/* Edit Profile Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Update your profile details. Changes are saved to the database and will appear across
              the platform.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-2">
            <label className="space-y-1 text-xs font-semibold text-muted-foreground">
              Display Name
              <input
                value={form.displayName}
                onChange={(e) => setForm((f) => ({ ...f, displayName: e.target.value }))}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                placeholder="Your name"
              />
            </label>

            <label className="space-y-1 text-xs font-semibold text-muted-foreground">
              College / University
              <input
                value={form.collegeName}
                onChange={(e) => setForm((f) => ({ ...f, collegeName: e.target.value }))}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                placeholder="e.g. MANIT Bhopal"
              />
            </label>

            <label className="space-y-1 text-xs font-semibold text-muted-foreground">
              Major / Branch
              <input
                value={form.major}
                onChange={(e) => setForm((f) => ({ ...f, major: e.target.value }))}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                placeholder="e.g. Computer Science & Engineering"
              />
            </label>

            <label className="space-y-1 text-xs font-semibold text-muted-foreground">
              Bio
              <textarea
                value={form.bio}
                onChange={(e) => setForm((f) => ({ ...f, bio: e.target.value }))}
                rows={3}
                className="w-full resize-none rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
                placeholder="Tell others about yourself..."
              />
            </label>
          </div>

          <DialogFooter>
            <Button
              variant="outline"
              className="rounded-full"
              onClick={() => setEditOpen(false)}
              disabled={saving}
            >
              Cancel
            </Button>
            <Button
              className="rounded-full bg-brand-gradient text-primary-foreground shadow-soft hover:opacity-90"
              onClick={handleSave}
              disabled={saving}
            >
              {saving ? (
                <>
                  <Loader2 className="mr-1.5 h-4 w-4 animate-spin" /> Saving…
                </>
              ) : (
                <>
                  <Save className="mr-1.5 h-4 w-4" /> Save Changes
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AccountOverview;
