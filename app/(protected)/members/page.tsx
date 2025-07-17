import PageLayout from "@/components/layout/PageLayout";
import React, { Suspense } from "react";
import Loading from "./loading";
import { resolve } from "path";

const Members = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-center">Membres Page</h1>
    </PageLayout>
  );
};

export default Members;
