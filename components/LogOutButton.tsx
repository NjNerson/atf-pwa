import { logOutUserAction } from "@/action/user/user";
import { Loader2, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import { toast } from "sonner";
import ConfirmDialog from "./ui/ConfirmDialog";

const LogOutButton = ({ className = "" }: { className?: string }) => {
  const [isPending, startTransition] = useTransition();
  const [confirmLogOut, setConfirmLogOut] = useState(false);
  const router = useRouter();
  const [showLogOutDialog, setShowLogOutDialog] = useState(false);

  const handleLogout = async () => {
    setConfirmLogOut(true);
    const { errorMessage } = await logOutUserAction();
    if (errorMessage) {
      toast.error(errorMessage);
      setConfirmLogOut(false);
    } else {
      toast.success("Vous êtes déconnecté !");
      router.push("/login");
      setConfirmLogOut(false);
    }
  };

  const logout = () => {
    setShowLogOutDialog(true);
  };

  return (
    <>
      <ConfirmDialog
        show={showLogOutDialog}
        isPending={confirmLogOut}
        onConfirm={handleLogout}
        onCancel={() => setShowLogOutDialog(false)}
      />
      <button
        onClick={logout}
        className={`flex gap-2 px-3 items-center justify-center mt-auto text-sm  py-1.5 text-red-500  rounded-md cursor-pointer hover:bg-red-100 transition-colors ${
          isPending ? "pointer-events-none" : ""
        } ${className}`}
      >
        <LogOut className="size-5" />

        <span>Déconnexion</span>
      </button>
    </>
  );
};

export default LogOutButton;
