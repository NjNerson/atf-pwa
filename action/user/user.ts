"use server";

import { createClient } from "@/lib/auth/server";
import { handleError } from "@/lib/utils";

export const loginUserAction = async (email: string, password: string) => {
  if (!email || !password) {
    return { errorMessage: "Email et mot de passe requis." };
  }

  try {
    const { auth } = await createClient();
    const { error } = await auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    return { errorMessage: null };
  } catch (error) {
    return handleError(error);
  }
};
