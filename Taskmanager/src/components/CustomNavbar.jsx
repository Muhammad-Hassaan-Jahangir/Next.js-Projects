"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Menu, X } from "lucide-react";

const CustomNavbar = () => {
  const context = useContext(UserContext);
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  async function doLogout() {
    try {
      const result = await logout();
      console.log(result);
      context.setUser(undefined);
      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Logout Error");
    }
  }

  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0 text-2xl font-bold">
            <Link href="/" className="hover:text-blue-200 transition">
              Task Manager
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {context.user && (
              <>
                <Link href="/" className="hover:text-blue-200 transition">Home</Link>
                <Link href="/add-task" className="hover:text-blue-200 transition">Add Task</Link>
                <Link href="/show-tasks" className="hover:text-blue-200 transition">Show Tasks</Link>
              </>
            )}
          </div>

          {/* User Actions */}
          <div className="hidden md:flex space-x-4">
            {context.user ? (
              <>
                <span className="font-medium">{context.user.name}</span>
                <button
                  onClick={doLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="hover:text-blue-200 transition">Login</Link>
                <Link href="/signup" className="hover:text-blue-200 transition">Signup</Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-700 px-4 py-3 space-y-2">
          {context.user && (
            <>
              <Link href="/" className="block hover:text-blue-200 transition">Home</Link>
              <Link href="/add-task" className="block hover:text-blue-200 transition">Add Task</Link>
              <Link href="/show-tasks" className="block hover:text-blue-200 transition">Show Tasks</Link>
              <hr className="border-blue-500" />
              <span className="block font-medium">{context.user.name}</span>
              <button
                onClick={doLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
              >
                Logout
              </button>
            </>
          )}

          {!context.user && (
            <>
              <Link href="/login" className="block hover:text-blue-200 transition">Login</Link>
              <Link href="/signup" className="block hover:text-blue-200 transition">Signup</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default CustomNavbar;
