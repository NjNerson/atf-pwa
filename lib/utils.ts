import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    return { errorMessage: error.message };
  } else {
    return { errorMessage: "Une erreur est survenue..." };
  }
};

export const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    // In the browser, use relative URL
    return "";
  }

  return process.env.NEXT_PUBLIC_BASE_URL;
};
