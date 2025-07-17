import { Loader2 } from "lucide-react";

export default function loading() {
  return (
    <div className="flex h-full items-center justify-center bg-blue-50">
      <Loader2 className="animate-spin size-6 w-8 h-8 text-blue-500" />
    </div>
  );
}
