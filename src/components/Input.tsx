"use client";

import { useState, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...rest }: InputProps) {
  const [isFocus, setIsfocus] = useState(false);

  return (
    <div
      className={`p-3 rounded-md border-2 text-zinc-700 transition ease-in duration-100 ${isFocus ? "border-blue-800" : "border-zinc-100"}`}
    >
      <input className="w-full outline-none font-medium" onFocus={() => setIsfocus(true)} onBlur={() => setIsfocus(false)} {...rest} />
    </div>
  );
}
