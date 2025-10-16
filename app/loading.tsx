import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="min-h-screen w-full  flex justify-center items-center bg-transparent">
      <Spinner className="size-8" />
    </div>
  );
}
