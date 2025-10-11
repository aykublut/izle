"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { LiaTimesCircleSolid } from "react-icons/lia";
import React, { useState, useTransition } from "react";
import SelectAvatar from "./SelectAvatar";
import { CiCirclePlus } from "react-icons/ci";
import { Textarea } from "@/components/ui/textarea";
import { createUser } from "@/app/server-actions";
import useStore from "@/store/store";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const AddComment = () => {
  const stored = JSON.parse(localStorage.getItem("currentMovie") || "null");
  const { setDialogStation, texts } = useStore();
  const movieName = stored.name;
  const [isPending, startTransition] = useTransition();
  const [clickedAvatar, setClickedAvatar] = useState<boolean>(false);
  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    "/avatar/emptyAvatar.png"
  );
  const [nickname, setNickName] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [movieSuggestion, setMovieSuggestion] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const handleCreateComment = () => {
    if (
      nickname.length > 1 &&
      comment.length > 1 &&
      selectedColor.length > 1 &&
      selectedAvatar.length > 1
    ) {
      try {
        startTransition(() => {
          createUser({
            selectedAvatar,
            nickname,
            comment,
            selectedColor,
            movieName,
            movieSuggestion,
          });
        });
        toast("Talebiniz başarıyla oluşturuldu!!!", {
          description: "Admin tarafından onaylanmasını bekleyin.",
          position: "top-center",
          duration: 10000,
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
        });
      } catch (error) {
        console.log("NOLUYOR AMK", error);
      }
    } else {
      toast("HATA!!! Lütfen eksiksiz doldurun, renk de seçmelisiniz", {
        description: "tekrar deneyin",
        position: "top-center",
        duration: 10000,
        action: {
          label: "Undo",
          onClick: () => console.log("Undo"),
        },
      });
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 w-full h-50">
        <div className="relative flex justify-center items-center max-md:justify-end max-md:gap-5 max-md:pb-[2px] flex-col w-[25%] pt-2   ">
          <div
            onClick={() => setClickedAvatar(!clickedAvatar)}
            className="rounded-full relative flex justify-center items-center cursor-pointer"
          >
            <Avatar
              className={`w-25 h-25 md:w-40 md:h-40 sm:w-33 sm:h-33 border-6  ${
                selectedColor === "red"
                  ? "border-[#4A1F2A]"
                  : selectedColor === "green"
                  ? "border-[#2A4D3E]"
                  : selectedColor === "blue"
                  ? "border-[#1E2A44]"
                  : selectedColor === "yellow"
                  ? "border-[#4E3A1D]"
                  : selectedColor === "black"
                  ? "border-[#1C2526]"
                  : "border-gray-500"
              }`}
            >
              <AvatarImage src={selectedAvatar} alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {clickedAvatar ? (
              <LiaTimesCircleSolid className="absolute bottom-0 text-3xl" />
            ) : (
              <CiCirclePlus className="absolute bottom-0 text-3xl" />
            )}
          </div>

          <div
            className={
              clickedAvatar
                ? "absolute  -left-42 -top-25 sm:-top-38 sm:-right-115 xl:-top-11 -right-110 xl:right-65 flex-col flex  items-center"
                : "hidden"
            }
          >
            <div className="relative flex justify-center flex-wrap gap-2 p-[1px] sm:p-2 w-80  sm:w-105 xl:w-54 border-2 bg-white/30 rounded-sm border-white/40">
              <div
                onClick={() => {
                  setSelectedAvatar("/avatar/claire.png");
                }}
                className="rounded-full"
              >
                <SelectAvatar src="/avatar/claire.png" />
              </div>
              <div
                onClick={() => {
                  setSelectedAvatar("/avatar/dr-mark.png");
                }}
                className="rounded-full"
              >
                <SelectAvatar src="/avatar/dr-mark.png" />
              </div>
              <div
                onClick={() => {
                  setSelectedAvatar("/avatar/prot.png");
                }}
                className="rounded-full"
              >
                <SelectAvatar src="/avatar/prot.png" />
              </div>
              <div
                onClick={() => {
                  setSelectedAvatar("/avatar/theJacketMan.png");
                }}
                className="rounded-full"
              >
                <SelectAvatar src="/avatar/theJacketMan.png" />
              </div>
              <div
                onClick={() => {
                  setSelectedAvatar("/avatar/theJacketWoman.png");
                }}
                className="rounded-full"
              >
                <SelectAvatar src="/avatar/theJacketWoman.png" />
              </div>
              <div
                onClick={() => {
                  setSelectedAvatar("/avatar/virgil.png");
                }}
                className="rounded-full"
              >
                <SelectAvatar src="/avatar/virgil.png" />
              </div>
              <div
                onClick={() => {
                  setSelectedAvatar("/avatar/theMan.png");
                }}
                className="rounded-full"
              >
                <SelectAvatar src="/avatar/theMan.png" />
              </div>
              <div
                onClick={() => {
                  setSelectedAvatar("/avatar/theWoman.png");
                }}
                className="rounded-full"
              >
                <SelectAvatar src="/avatar/theWoman.png" />
              </div>
              <div
                onClick={() => {
                  setSelectedAvatar("/avatar/prof.png");
                }}
                className="rounded-full"
              >
                <SelectAvatar src="/avatar/prof.png" />
              </div>
              <div
                onClick={() => {
                  setSelectedAvatar("/avatar/killer.png");
                }}
                className="rounded-full"
              >
                <SelectAvatar src="/avatar/killer.png" />
              </div>
              <div
                onClick={() => {
                  setSelectedAvatar("/avatar/contraWoman.png");
                }}
                className="rounded-full"
              >
                <SelectAvatar src="/avatar/contraWoman.png" />
              </div>
              <div
                onClick={() => {
                  setSelectedAvatar("/avatar/saban.png");
                }}
                className="rounded-full"
              >
                <SelectAvatar src="/avatar/saban.png" />
              </div>
              <div className="absolute max-xl:-top-[50px]  -top-[2px] w-44 sm:w-60 xl:w-65 xl:-right-65  flex justify-center flex-wrap gap-1 xl:gap-2 p-1 px-2 border-2 bg-white/50 rounded-sm border-white/40">
                <div
                  className="rounded-sm w-7 h-7 sm:w-10 sm:h-10 bg-[#1C2526] hover:shadow-sm shadow-white/70 cursor-pointer"
                  onClick={() => setSelectedColor("black")}
                ></div>
                <div
                  onClick={() => setSelectedColor("red")}
                  className="rounded-sm w-7 h-7 sm:w-10 sm:h-10 bg-[#4A1F2A] hover:shadow-sm shadow-white/70 cursor-pointer"
                ></div>
                <div
                  onClick={() => setSelectedColor("green")}
                  className="rounded-sm w-7 h-7 sm:w-10 sm:h-10 bg-[#2A4D3E] hover:shadow-sm shadow-white/70 cursor-pointer"
                ></div>
                <div
                  onClick={() => setSelectedColor("blue")}
                  className="rounded-sm w-7 h-7 sm:w-10 sm:h-10 bg-[#1E2A44] hover:shadow-sm shadow-white/70 cursor-pointer"
                ></div>
                <div
                  onClick={() => setSelectedColor("yellow")}
                  className="rounded-sm w-7 h-7 sm:w-10 sm:h-10 bg-[#4E3A1D] hover:shadow-sm shadow-white/70 cursor-pointer"
                ></div>
              </div>
            </div>
          </div>

          <Input
            value={nickname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNickName(e.target.value)
            }
            maxLength={14}
            placeholder={texts.comment.nickName}
            className=" h-5 py-1 px-5 font-light max-sm:text-[7px] sm:text-[12px] font-mono  mt-2"
          />
        </div>

        <div className="p-3 pb-0 w-[75%] rounded-sm border-l-2">
          <Textarea
            maxLength={200}
            value={comment}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setComment(e.target.value)
            }
            placeholder={texts.comment.yourComment}
            className="h-[84%] w-full max-sm:text-[7px] sm:text-[12px] resize-none break-all"
          />
          <Input
            value={movieSuggestion}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMovieSuggestion(e.target.value)
            }
            maxLength={25}
            placeholder={texts.comment.movieSuggestion}
            className=" h-5 py-1 px-5 max-sm:text-[7px] sm:text-[12px] font-light font-mono mt-2 "
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="cursor-pointer w-[90%]" onClick={handleCreateComment}>
          <Button
            onClick={() => {
              setDialogStation(false);
            }}
            className="w-full cursor-pointer bg-white/70 "
          >
            {texts.comment.confirmComment}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
