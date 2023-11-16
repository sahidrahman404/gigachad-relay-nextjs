import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function removeTokenAndRedirect() {
  const token = window.localStorage.getItem("auth");
  await fetch(`http://localhost:3000/api/tokens/delete/${token}`);
  window.localStorage.removeItem("auth");
  window.location.replace("/auth/signin");
}
