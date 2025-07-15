"use client";

import { logOutUserAction } from "@/action/user/user";
import PageLayout from "@/components/layout/PageLayout";
import GroupMenu from "@/components/ui/GroupMenu";
import MenuItem from "@/components/ui/MenuItem";
import {
  Component,
  KeyRound,
  Loader2,
  LogOut,
  ShieldUser,
  SquareUserRound,
  Archive,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { toast } from "sonner";

const Settings = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

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

  return (
    <PageLayout className="flex flex-col gap-2 md:pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* ATHLETE ET PARENT SECTION */}
        <GroupMenu title="Athlète et Parent">
          <MenuItem
            link="/settings/category"
            title="Gérer les catégories"
            icon={<Component />}
          />

          <MenuItem
            link="/settings/parents"
            title="Gérer les parents"
            icon={<SquareUserRound />}
          />
        </GroupMenu>

        {/* ADMIN PARTIES */}
        <GroupMenu title="Administration">
          <MenuItem
            link="/settings/managers"
            title="Gérer les responsables"
            icon={<ShieldUser />}
          />

          <MenuItem
            link="/settings/change-password"
            title="Changer mot de passe"
            icon={<KeyRound />}
          />
        </GroupMenu>

        {/* HISTORIQUES */}
        <GroupMenu title="Historiques d'activités" className="md:col-span-2">
          <MenuItem
            link="/settings/archives"
            title="Voir les archives"
            icon={<Archive />}
          />
        </GroupMenu>
      </div>

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
          onClick={handleLogout}
        />
      </div>
    </PageLayout>
  );
};

export default Settings;
