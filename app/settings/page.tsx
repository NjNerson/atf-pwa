"use client";

import { logOutUserAction } from "@/action/user/user";
import PageLayout from "@/components/layout/PageLayout";
import LogOutMobile from "@/components/LogOutMobile";
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

      <LogOutMobile />
    </PageLayout>
  );
};

export default Settings;
