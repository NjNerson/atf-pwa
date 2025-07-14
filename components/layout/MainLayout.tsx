import BottomNav from "./navigation/BottomNav";
import SideNav from "./navigation/SideNav";
import TopNav from "./navigation/TopNav";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full flex bg-auth-background overflow-hidden ">
      {/* Sidebar fixée */}
      <aside className="hidden md:flex md:w-50 fixed left-0 top-0  border-r border-r-blue-200">
        <SideNav />
      </aside>

      {/* Main content avec padding-left pour compenser le aside */}
      <main className="flex-1 overflow-y-auto md:ml-50 py-8 sm:py-0 md:pb-0 flex flex-col">
        <div className="pb-4 md:pb-0">
          <TopNav />
        </div>
        {children}
      </main>

      {/* BottomNav fixé en mobile */}
      <div className="fixed bottom-0 w-full md:hidden z-50">
        <BottomNav />
      </div>
    </div>
  );
}
