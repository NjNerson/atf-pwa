import React from "react";

const PageLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`min-h-screen p-2 w-full  bg-blue-50 ${className}`}>
      {children}
    </div>
  );
};

export default PageLayout;
