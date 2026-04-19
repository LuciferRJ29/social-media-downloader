"use client";

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export default function Button({
  children,
  onClick,
  disabled = false,
  type = "button", // 🔥 important (form bug fix)
  className = "",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-5 py-2 rounded-xl font-semibold text-white
        bg-gradient-to-r from-purple-500 to-pink-500
        transition-all duration-200
        hover:scale-105 active:scale-95
        hover:shadow-lg hover:shadow-purple-500/30
        focus:outline-none focus:ring-2 focus:ring-purple-400
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        ${className}
      `}
    >
      {children}
    </button>
  );
}
