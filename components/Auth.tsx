"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  EnvelopeIcon,
  LockClosedIcon,
  EyeSlashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { KeyIcon } from "@heroicons/react/24/solid";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useTransition, useState, use } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { loginUserAction } from "@/action/user/user";
import { useRouter } from "next/navigation";

function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const toggleShowPassword = () => setShowPassword((v) => !v);

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;
      let errorMessage = null;
      errorMessage = (await loginUserAction(email, password)).errorMessage;
      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.success("Connexion réussie !");
        router.push("/");
      }
    });
  };
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/bg-login.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-0" />
      <Card className="relative z-10 w-full max-w-sm bg-white/80 backdrop-blur-md shadow-xl border border-gray-200 rounded-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-semibold text-black flex items-center justify-center-safe">
            <KeyIcon className=" size-6 text-amber-400" />
            &nbsp;ATF - Connexion
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <form action={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <Label
                htmlFor="email"
                className="block text-gray-900 font-medium mb-1"
              >
                Email
              </Label>
              <div className="relative">
                <EnvelopeIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="atf@gmail.com"
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isPending}
                  className="pl-10 pr-4 bg-white text-black border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                />
              </div>
            </div>

            {/* MDP */}
            <div>
              <Label
                htmlFor="password"
                className="block text-gray-900 font-medium mb-1"
              >
                Mot de passe
              </Label>
              <div className="relative">
                <LockClosedIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  required
                  name="password"
                  disabled={isPending}
                  //   value={password}
                  //   onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 bg-white text-black border-gray-300 focus:border-blue-600 focus:ring-blue-600"
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label={
                    showPassword
                      ? "Cacher le mot de passe"
                      : "Afficher le mot de passe"
                  }
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white font-semibold py-3 rounded-md">
              {isPending ? (
                <Loader2 className=" animate-spin" />
              ) : (
                "Se connecter"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Auth;
