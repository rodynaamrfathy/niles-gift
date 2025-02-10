"use client"; 
import { useEffect } from "react";

export default function DebugWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    console.log("Hydration Debugging:", document.documentElement.innerHTML);
  }, []);

  return <>{children}</>;
}
