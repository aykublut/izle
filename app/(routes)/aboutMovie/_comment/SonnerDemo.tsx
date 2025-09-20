"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import useStore from "@/store/store";

export function SonnerDemo() {
  const { setDialogStation } = useStore();
  return (
    <Button
      variant="outline"
      onClick={() => {
        toast("Talebiniz başarıyla oluşturuldu!!!", {
          description: "Admin tarafından onaylanmasını bekleyin.",
          position: "top-center",
          duration: 10000,
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
        setDialogStation(false);
      }}
    >
      Confirm Comment
    </Button>
  );
}
