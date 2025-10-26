"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { LiaTimesCircleSolid } from "react-icons/lia";
import React, { useEffect, useState, useTransition } from "react";
import SelectAvatar from "./SelectAvatar";
import { CiCirclePlus } from "react-icons/ci";
import { Textarea } from "@/components/ui/textarea";
import { createUser } from "@/app/server-actions";
import useStore from "@/store/store";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import MemberAvatar from "@/components/MemberAvatar";
import { avatars } from "@/store/images";
import { easeInOut, motion } from "motion/react";

const AddComment = () => {
  const { data: session } = useSession();
  const { setDialogStation, texts, photoS, frameS, setPhotoAndFrame } =
    useStore();

  // movieName güvenli okuma
  const [movieName, setMovieName] = useState<string>("");

  useEffect(() => {
    const stored = localStorage.getItem("currentMovie");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setMovieName(parsed?.name ?? "");
      } catch {
        setMovieName("");
      }
    }
  }, []);

  // session geldiğinde kullanıcı avatar/frame'i yükle
  useEffect(() => {
    if (session) {
      setPhotoAndFrame(session.user.photo, session.user.frame);
    } else {
      const savedPhoto = localStorage.getItem("profile_photo");
      const savedFrame = localStorage.getItem("profile_frame");
      setPhotoAndFrame(savedPhoto || "", savedFrame || "");
    }
  }, [session, setPhotoAndFrame]);

  const [isPending, startTransition] = useTransition();
  const [clickedAvatar, setClickedAvatar] = useState<boolean>(false);
  const [selectedAvatar, setSelectedAvatar] = useState<string>(
    photoS ?? session?.user.photo ?? "/avatar/emptyAvatar.png"
  );
  const [nickname, setNickName] = useState<string>(
    session?.user.username ?? ""
  );
  const [comment, setComment] = useState<string>("");
  const [movieSuggestion, setMovieSuggestion] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [instantComment, setInstantComment] = useState<boolean>(
    session?.user.allowComment ?? false
  );
  useEffect(() => {
    if (photoS) {
      setSelectedAvatar(photoS);
    } else if (session?.user?.photo) {
      setSelectedAvatar(session.user.photo);
    } else {
      setSelectedAvatar("/avatar/emptyAvatar.png");
    }
  }, [photoS, session]);
  useEffect(() => {
    if (session) {
      setInstantComment(Boolean(session.user.allowComment));
    }
  }, [session]);

  const handleCreateComment = (autoBorderColor: boolean) => {
    if (
      (nickname.length > 1 &&
        comment.length > 1 &&
        selectedAvatar.length > 1) ||
      (session && comment.length > 1)
    ) {
      try {
        startTransition(() => {
          createUser({
            selectedAvatar,
            nickname,
            comment,
            selectedColor: selectedColor || "black",
            movieName, // Artık her zaman string
            movieSuggestion,
            instantComment,
          });
        });

        // toast mesajı
        if (autoBorderColor && !session) {
          toast(
            "Talebiniz başarıyla oluşturuldu! Renk seçmediğiniz için default olarak border black seçildi!",
            {
              description: "Admin tarafından onaylanmasını bekleyin.",
              position: "top-center",
              duration: 10000,
              action: {
                label: "Undo",
                onClick: () => console.log("Undo"),
              },
            }
          );
        } else {
          toast(`Talebiniz başarıyla oluşturuldu ${session?.user.username}`, {
            description: "Admin tarafından onaylanmasını bekleyin.",
            position: "top-center",
            duration: 10000,
            action: {
              label: "Undo",
              onClick: () => console.log("Undo"),
            },
          });
        }

        // 0.5sn sonra sayfayı yenile
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } catch (error) {
        console.log("createUser error:", error);
      }
    } else {
      toast("HATA!!! Lütfen eksiksiz doldurun", {
        description: "Tekrar deneyin.",
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
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeInOut }}
      className="flex flex-col gap-5"
    >
      <div className="flex gap-5 w-full h-50">
        {/* Sol taraf: Avatar & Nickname */}
        <div className="relative flex justify-center items-center max-md:justify-end max-md:gap-5 max-md:pb-[2px] flex-col w-[25%] pt-2">
          <div
            onClick={() => {
              if (!session) setClickedAvatar(!clickedAvatar);
            }}
            className="rounded-full relative flex justify-center items-center cursor-pointer"
          >
            {session ? (
              <MemberAvatar photo={photoS} frame={frameS} />
            ) : (
              <Avatar
                className={`w-25 h-25 md:w-40 md:h-40 sm:w-33 sm:h-33 border-6 ${
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
                <AvatarImage src={selectedAvatar} alt="@avatar" />
                <AvatarFallback></AvatarFallback>
              </Avatar>
            )}
            {clickedAvatar && !session ? (
              <LiaTimesCircleSolid className="absolute bottom-0 text-3xl" />
            ) : !session ? (
              <CiCirclePlus className="absolute bottom-0 text-3xl" />
            ) : null}
          </div>

          {/* Avatar seçimi */}
          {clickedAvatar && !session && (
            <div className="absolute -left-42 -top-25 sm:-top-38 sm:-right-115 xl:-top-11 -right-110 xl:right-65 flex-col flex items-center">
              <div className="relative flex justify-center flex-wrap gap-2 p-[1px] sm:p-2 w-80 sm:w-105 xl:w-54 border-2 bg-white/30 rounded-sm border-white/40">
                {avatars.map((avatar, key) => (
                  <div
                    onClick={() => setSelectedAvatar(avatar)}
                    key={key}
                    className="rounded-full"
                  >
                    <SelectAvatar src={avatar} />
                  </div>
                ))}
                {/* Renk paleti */}
                <div className="absolute max-xl:-top-[50px] -top-[2px] w-44 sm:w-60 xl:w-65 xl:-right-65 flex justify-center flex-wrap gap-1 xl:gap-2 p-1 px-2 border-2 bg-white/50 rounded-sm border-white/40">
                  {["black", "red", "green", "blue", "yellow"].map((c) => (
                    <div
                      key={c}
                      className={`rounded-sm w-7 h-7 sm:w-10 sm:h-10 cursor-pointer ${
                        c === "black"
                          ? "bg-[#1C2526]"
                          : c === "red"
                          ? "bg-[#4A1F2A]"
                          : c === "green"
                          ? "bg-[#2A4D3E]"
                          : c === "blue"
                          ? "bg-[#1E2A44]"
                          : "bg-[#4E3A1D]"
                      }`}
                      onClick={() => setSelectedColor(c)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Nickname alanı */}
          {session?.user ? (
            <Input
              value={session.user.username}
              readOnly
              className="h-5 py-1 px-5 font-light max-sm:text-[7px] text-white sm:text-[12px] font-mono mt-2"
            />
          ) : (
            <Input
              value={nickname}
              onChange={(e) => setNickName(e.target.value)}
              maxLength={14}
              placeholder={texts.comment.nickName}
              className="h-5 py-1 px-5 font-light max-sm:text-[7px] sm:text-[12px] font-mono mt-2"
            />
          )}
        </div>

        {/* Sağ taraf: Yorum ve öneri */}
        <div className="p-3 pb-0 w-[75%] rounded-sm border-l-2">
          <Textarea
            maxLength={200}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={texts.comment.yourComment}
            className="h-[84%] w-full max-sm:text-[7px] sm:text-[12px] resize-none break-all"
          />
          <Input
            value={movieSuggestion}
            onChange={(e) => setMovieSuggestion(e.target.value)}
            maxLength={25}
            readOnly={!session}
            placeholder={
              !session
                ? "Misafirler film öneremez!! Kayıt olun"
                : texts.comment.movieSuggestion
            }
            className="h-5 py-1 px-5 max-sm:text-[7px] sm:text-[12px] font-light font-mono mt-2"
          />
        </div>
      </div>

      {/* Buton */}
      <div className="flex justify-center items-center">
        <div
          className="cursor-pointer w-[90%]"
          onClick={() => {
            session?.user?.username && setNickName(session.user.username);

            if (
              nickname.length > 1 &&
              comment.length > 1 &&
              selectedAvatar.length > 1
            ) {
              if (!selectedColor) setSelectedColor("black");
              handleCreateComment(true);
              setDialogStation(false);
            } else {
              handleCreateComment(true);
            }
          }}
        >
          <Button className="w-full cursor-pointer bg-white/70">
            {texts.comment.confirmComment}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default AddComment;
