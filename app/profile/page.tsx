import { Suspense } from "react";
import { ProfileClient } from "./ProfileClient";

export async function fetchProfileData() {
  try {
    const res = await fetch("/api/profile", { cache: "no-store" });
    if (!res.ok) throw new Error(`Failed to fetch user profile: ${res.statusText}`);
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function createProfile(formData: { name: string; bio: string; image: string }) {
  try {
    const res = await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error(`Failed to create profile: ${res.statusText}`);
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function updateProfileData(formData: { name: string; bio: string; image: string }) {
  try {
    const res = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error(`Failed to update profile: ${res.statusText}`);
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function deleteProfile() {
  try {
    const res = await fetch("/api/profile", {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(`Failed to delete profile: ${res.statusText}`);
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default function ProfilePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile</h1>

      <Suspense fallback={<p>Loading user profile...</p>}>
        <ProfileClient />
      </Suspense>
    </div>
  );
}