"use client";

import React from "react";

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export default function Input({
  value,
  onChange,
  placeholder = "Paste video URL...",
}: InputProps) {
  return (
    <input
      type="url" // 🔥 better for URL input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="
        flex-1 bg-transparent outline-none
        text-white placeholder-gray-400
        px-2 py-1
        focus:ring-2 focus:ring-purple-500
        rounded-lg
      "
    />
  );
}
