"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { CiCirclePlus } from "react-icons/ci";
import AddComment from "./AddComment";
import useStore from "@/store/store";

export function DialogDemo() {
  const { dialogStation, setDialogStation } = useStore();
  return (
    <Dialog open={dialogStation} onOpenChange={setDialogStation}>
      <form>
        <DialogTrigger onClick={() => setDialogStation(true)} asChild>
          <div className="flex w-full justify-center items-center h-25 border text-3xl border-white/40 rounded-sm hover:bg-white/10 hover:text-[35px] cursor-pointer">
            <CiCirclePlus />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[725px]">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <AddComment />
        </DialogContent>
      </form>
    </Dialog>
  );
}
