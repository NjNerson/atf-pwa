// app/(auth)/layout.tsx
// import "../global.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
