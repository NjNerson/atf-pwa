"use client";

import { logOutUserAction } from "@/action/user/user";
import { Loader2, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import MenuItem from "./ui/MenuItem";
import ConfirmDialog from "./ui/ConfirmDialog";

const LogOutMobile = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const [showLogOutDialog, setShowLogOutDialog] = useState(false);

  const handleLogout = async () => {
    startTransition(async () => {
      const { errorMessage } = await logOutUserAction();
      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.success("Vous êtes déconnecté !");
        router.push("/login");
      }
    });
  };

  const logout = () => {
    setShowLogOutDialog(true);
  };

  return (
    <>
      <ConfirmDialog
        show={showLogOutDialog}
        onConfirm={handleLogout}
        onCancel={() => setShowLogOutDialog(false)}
      />
      <div className="w-full p-1 bg-white rounded-md shadow-lg md:hidden">
        <MenuItem
          link="/settings/category"
          title="Déconnexion"
          icon={
            isPending ? (
              <Loader2 className="size-5 animate-spin text-red-600" />
            ) : (
              <LogOut className="text-red-600" />
            )
          }
          className="text-red-600 "
          isButton={true}
          onClick={logout}
        />
      </div>
    </>
  );
};

export default LogOutMobile;
