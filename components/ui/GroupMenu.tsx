const GroupMenu = ({
  children,
  title = "",
  className = "",
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
}) => {
  return (
    <section
      className={`w-full md:p-4 p-1 bg-white rounded-md shadow-lg ${className}`}
    >
      {title && (
        <h6 className="text-xs px-4 pt-2 md:pt-0 md:px-0 md:text-base font-medium text-blue-400">
          {title}
        </h6>
      )}

      <div className="py-2 flex gap-2 flex-col">{children}</div>
    </section>
  );
};

export default GroupMenu;
