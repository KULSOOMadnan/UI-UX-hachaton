// app/admin/dashboard/page.tsx
"use client";

import { useState } from "react";

export default function AdminDashboard() {
  const [message, setMessage] = useState("");

  const handleLogout = async () => {
    const res = await fetch("/api/admin/logout", {
      method: "POST",
    });

    if (res.ok) {
      setMessage("Logged out successfully!");
      window.location.href = "/admin/login"; // Redirect to login page after logout
    } else {
      setMessage("Logout failed");
    }
  };

  return (
    <div className="min-h-screen">
      <h2 className="text-3xl mb-4">Admin Dashboard</h2>
      <p>Welcome to the admin panel!</p>

      <div className="mt-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 rounded"
        >
          Logout
        </button>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}
