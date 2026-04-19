import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  onClick,
  disabled,
  className = "",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-2 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105 transition disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}
