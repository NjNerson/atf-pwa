import { getUser } from "@/lib/auth/server";
import { redirect } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  return <MainLayout>{children}</MainLayout>;
}
