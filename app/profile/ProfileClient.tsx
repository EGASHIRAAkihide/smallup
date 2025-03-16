'use client'

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { fetchProfileData, createProfile, updateProfileData, deleteProfile } from "./page";
import Image from 'next/image';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function ProfileClient() {
  const [user, setUser] = useState<{ name: string; bio?: string; image?: string } | null>(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState("");
  const [isEdit, setIsEdit] = useState(false);

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
  
  async function handleCreateProfile() {
    const newUser = await createProfile({ name, bio, image });
    if (newUser) {
      setUser(newUser);
      toast("Profile created successfully");
    }
  }

  async function handleUpdateProfile() {
    const updatedUser = await updateProfileData({ name, bio, image });
    if (updatedUser) {
      setUser(updatedUser);
      setIsEdit(false)
      toast("Profile updated successfully");
    }
  }

  async function handleDeleteProfile() {
    const deleted = await deleteProfile();
    if (deleted) {
      setUser(null);
      setName("");
      setBio("");
      setImage("");
      toast("Profile deleted successfully");
    }
  }

  if (!user) {
    return (
      <div>
        <p>No profile found. Create one below:</p>
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

        <button onClick={handleCreateProfile} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          Create Profile
        </button>
      </div>
    )
  }

  return (
    <div className="mt-4">
      <Image src={user.image || "/default-avatar.png"} alt="Profile" width={50} height={50} className="rounded-full" />
      <Table>
        <TableCaption>Table Caption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>name</TableHead>
            <TableHead>bio</TableHead>
            <TableHead>image</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>{isEdit ? (<input className="border p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} />) : name}</TableCell>
            <TableCell>{isEdit ? (<textarea className="border p-2 w-full" value={bio} onChange={(e) => setBio(e.target.value)} />) : bio}</TableCell>
            <TableCell>{isEdit ? (<input className="border p-2 w-full" value={image} onChange={(e) => setImage(e.target.value)} />) : image}</TableCell>
            <TableCell>
            {isEdit ? (
              <div className="flex gap-4 mt-4">
                <button onClick={handleUpdateProfile} className="bg-blue-500 text-white px-4 py-2 rounded">
                  Update Profile
                </button>
                <button onClick={() => setIsEdit(false)}>
                  cancel
                </button>
              </div>
            ) : (
              <div className="flex gap-4 mt-4">
                <button onClick={() => setIsEdit(true)}>
                Edit Profile
                </button>
                <button onClick={handleDeleteProfile} className="bg-red-500 text-white px-4 py-2 rounded">
                  Delete Profile
                </button>
              </div>
            )}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}