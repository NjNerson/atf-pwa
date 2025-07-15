import clsx from "clsx";
import Link from "next/link";
import { cloneElement, ReactElement } from "react";

type MenuItemProps = {
  title: string;
  link: string;
  icon?: ReactElement;
  className?: string;
  isButton?: boolean;
  onClick?: () => void;
};

const MenuItem = ({
  title,
  link,
  icon,
  className,
  isButton = false,
  onClick,
}: MenuItemProps) => {
  return (
    <div
      className={`flex items-center  hover:bg-gray-100 bg-gray transition-colors rounded-md text-gray-800 duration-200 ${className}`}
    >
      {isButton ? (
        <button onClick={onClick} className="flex items-center w-full p-4 ">
          {icon &&
            cloneElement(icon, {
              ...(icon.props as any),
              className: clsx(
                (icon.props as any).className,
                "mr-2 size-6 text-blue-500"
              ),
            })}{" "}
          <span className=" font-medium">{title}</span>
        </button>
      ) : (
        <Link href={link} className="flex items-center w-full p-4">
          {icon &&
            cloneElement(icon, {
              ...(icon.props as any),
              className: clsx(
                (icon.props as any).className,
                "mr-2 size-6 text-blue-500"
              ),
            })}{" "}
          <span className=" font-medium">{title}</span>
        </Link>
      )}
    </div>
  );
};

export default MenuItem;
