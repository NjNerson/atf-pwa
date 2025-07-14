import React from "react";

const PageLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex min-h-screen py-6 w-full items-center justify-center bg-blue-50 ${className}`}
    >
      {children}
    </div>
  );
};

export default PageLayout;
