"use client";

import { useState, useEffect, Suspense } from "react";
import Image from 'next/image'

async function fetchProfileData() {
  try {
    const res = await fetch("/api/profile", { cache: "no-store" }); // ✅ 相対URLを使用
    if (!res.ok) {
      throw new Error(`Failed to fetch user profile: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null; // エラー時は null を返す
  }
}

async function updateProfileData(formData: { name: string; bio: string; image: string }) {
  try {
    const res = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (!res.ok) {
      throw new Error(`Failed to update profile: ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null; // エラー時は null を返す
  }
}

export default function ProfilePage() {
  const [user, setUser] = useState<{ name: string; bio?: string; image?: string } | null>(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    async function loadProfile() {
      const userData = await fetchProfileData();
      if (userData) {
        setUser(userData);
        setName(userData.name || "");
        setBio(userData.bio || "");
        setImage(userData.image || "");
      }
    }
    loadProfile();
  }, []);

  async function handleUpdateProfile() {
    const updatedUser = await updateProfileData({ name, bio, image });
    if (updatedUser) {
      setUser(updatedUser);
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile</h1>

      <Suspense fallback={<p>Loading user profile...</p>}>
        <div className="mt-4">
          <Image src={user?.image || "/default-avatar.png"} alt="Profile" width={20} height={20} />
          <div className="mt-4">
            <label className="block text-sm font-medium">Name</label>
            <input className="border p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Bio</label>
            <textarea className="border p-2 w-full" value={bio} onChange={(e) => setBio(e.target.value)} />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium">Image URL</label>
            <input className="border p-2 w-full" value={image} onChange={(e) => setImage(e.target.value)} />
          </div>

          <button onClick={handleUpdateProfile} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Update Profile
          </button>
        </div>
      </Suspense>
    </div>
  );
}