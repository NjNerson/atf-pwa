import DashboardBanner from "@/components/DashboardBanner";
import PageLayout from "@/components/layout/PageLayout";
import Image from "next/image";

export default function Home() {
  return (
    <PageLayout className="flex flex-col">
      <DashboardBanner />
    </PageLayout>
  );
}
