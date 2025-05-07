"use client";

import Image from "next/image";
import { useState } from "react";

interface AvatarProps {
  name?: string;
  src?: string;
  size?: number; 
  className?: string;
}

export function Avatar({ name = "Usuário", src, size = 40, className = "" }: AvatarProps) {
  const [imageError, setImageError] = useState(false);
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div
      className={`flex items-center gap-2 mr-2 justify-center rounded-full bg-muted text-foreground font-medium ${className}`}
      style={{ width: size, height: size, fontSize: size / 2 }}
    >
        <p>{name}</p>
      {!src || imageError ? (
        initials
      ) : (
        <Image
          src={src}
          alt={name}
          className="rounded-full object-cover w-full h-full"
          quality={100}
          width={24}
          height={24}
          onError={() => setImageError(true)}
        />
      )}
    </div>
  );
}