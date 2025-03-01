import React from "react"
import { twMerge } from "tailwind-merge";

interface Props{
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: Props) {
  const newClassName = twMerge(
    'max-w-screen-2xl mx-auto py-10 px-4  ', 
    className
  );
  return (

    <div className={ newClassName}>
      {children}
    </div>
  )
}
