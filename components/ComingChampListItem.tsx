import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ChampItemType = {
  name?: string;
  date?: string | Date;
  place?: string;
  id?: string | number;
};

const ComingChampListItem = ({ name, date, place, id }: ChampItemType) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <>
      <ul className=" list-none grid grid-cols-2 md:grid-cols-4 md: gap-x-4 text-gray-900 items-center  p-4 hover:bg-gray-100 ">
        <li className="font-medium col-span-1 ">
          {name ? name : "Championnat de Madagascar 2025"}{" "}
          <span className="md:hidden text-red-500">
            ({date ? date.toString() : "15 Novembre 2025"})
          </span>
        </li>
        <li className="hidden md:block col-span-1">
          {date ? date.toString() : "15 Novembre 2025"}
        </li>
        <li className="hidden md:block col-span-1">
          {place ? place : "Antsirabe"}
        </li>
        <li className="  col-span-1 flex justify-end">
          <Link
            href={`${baseUrl}/competitions/${id}`}
            className="w-8 h-8   block hover:text-blue-500"
          >
            <ArrowRight className=" w-full h-full" />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default ComingChampListItem;
