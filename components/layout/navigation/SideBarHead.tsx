import Image from "next/image";
const SideNavHead = () => (
  <div className="flex items-center gap-3 p-4 py-1.5 bg-blue-50 border-b border-blue-200">
    <Image
      src="/bg-login.jpeg"
      alt="Logo ATF"
      width={36}
      height={36}
      className="rounded-full object-cover w-9 h-9"
    />
    <h1 className="text-sm font-semibold text-blue-900 select-none">
      ATF Management
    </h1>
  </div>
);

export default SideNavHead;
