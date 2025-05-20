// pages/dashboard.js
"use client";

import { useEffect, useState } from "react";
import { account, databases, DB_ID } from "@/lib/appwrite";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<null | Awaited<ReturnType<typeof account.get>>>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAndStore = async () => {
      try {
        const userAccount = await account.get();
        setUser(userAccount);

        const formDataStr = localStorage.getItem("user_student");
        if (!formDataStr) {
          console.error("Form data missing");
          return;
        }

        const formData = JSON.parse(formDataStr);

        // Add email and role
        const studentData = {
          ...formData,
          email: userAccount.email,
          role: "student",
        };

        // Create document in Appwrite
        await databases.createDocument(
          DB_ID,
          "682c9f4d0031798ddd51", // Your collection ID
          "unique()",     // Auto-generate ID
          studentData
        );

        // Clear form data
        localStorage.removeItem("user_student");
      } catch (error) {
        console.error("Error in dashboard:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndStore();
  }, []);

  if (loading) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="p-10 h-screen">
      <h1>Welcome, {user?.name}!</h1>
      <p>You are logged in and your data is stored ✅</p>
    </div>
  );
}






















