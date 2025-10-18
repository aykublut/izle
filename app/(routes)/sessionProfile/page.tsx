"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SelectAvatar from "../aboutMovie/_comment/SelectAvatar";
import MemberAvatar from "@/components/MemberAvatar";
import useStore from "@/store/store";

export default function ProfilePage() {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const { frameS, photoS, setPhotoAndFrame } = useStore();

  const [message, setMessage] = useState("");
  const [loadingLocal, setLoadingLocal] = useState(true);

  const nickname =
    session?.user?.username ??
    `${session?.user?.firstName ?? ""} ${session?.user?.lastName ?? ""}`;

  useEffect(() => {
    // Bekle, session durumunu al
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.replace("/login");
      return;
    }

    // session authenticated veya data geldiğinde yükle
    const savedPhoto = localStorage.getItem("profile_photo");
    const savedFrame = localStorage.getItem("profile_frame");

    const finalPhoto =
      savedPhoto ?? session?.user?.photo ?? "/avatar/emptyAvatar.png";
    const finalFrame =
      savedFrame ?? session?.user?.frame ?? "/cerceveler/adminCerceve.png";

    setPhotoAndFrame(finalPhoto, finalFrame);
    setLoadingLocal(false);
  }, [status, session, router, setPhotoAndFrame]);

  useEffect(() => {
    if (photoS) localStorage.setItem("profile_photo", photoS);
  }, [photoS]);

  useEffect(() => {
    if (frameS) localStorage.setItem("profile_frame", frameS);
  }, [frameS]);

  const handleUpdate = async () => {
    if (!session?.user?.id) return setMessage("Not logged in");
    setMessage("");
    try {
      const res = await fetch("/api/auth/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ frame: frameS, photo: photoS }),
      });
      const data = await res.json().catch(() => ({ message: "Invalid JSON" }));
      if (!res.ok) return setMessage(data.message || "Update failed");
      setMessage("Profile updated successfully!");
      await update(); // next-auth session güncelle
      // localStorage temizlemek istersen burada yap
      // localStorage.removeItem("profile_photo"); localStorage.removeItem("profile_frame");
    } catch (err: any) {
      setMessage(err.message || "Something went wrong");
    }
  };

  // kaynak diziler (isteğe göre genişlet)
  const avatars = [
    "/avatar/claire.png",
    "/avatar/dr-mark.png",
    "/avatar/prot.png",
    "/avatar/theJacketMan.png",
    "/avatar/theJacketWoman.png",
    "/avatar/virgil.png",
    "/avatar/theMan.png",
    "/avatar/theWoman.png",
    "/avatar/prof.png",
    "/avatar/killer.png",
    "/avatar/contraWoman.png",
    "/avatar/saban.png",
  ];

  const memberAvatars = [
    "/memberAvatar/adanali.png",
    "/memberAvatar/charles.png",
    "/memberAvatar/charlize.png",
    "/memberAvatar/jason.png",
    "/memberAvatar/john.png",
    "/memberAvatar/kadin.png",
    "/memberAvatar/shaco.png",
  ];

  const frames = [
    "/cerceveler/fire.png",
    "/cerceveler/ice.png",
    "/cerceveler/magic.png",
  ];

  // Tekrarlı avatar render'ı için küçük bileşen
  const AvatarItem = ({
    src,
    selected,
    size = 56,
    onClick,
  }: {
    src: string;
    selected: boolean;
    size?: number;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full transition-transform transform duration-200 focus:outline-none
        ${
          selected
            ? "shadow-[0_0_18px_rgba(59,130,246,0.35)] scale-105"
            : "hover:scale-105"
        }
        ${selected ? "ring-2 ring-offset-2 ring-blue-400/40" : ""}`}
      style={{ width: size, height: size }}
      aria-pressed={selected}
    >
      <div className="w-full h-full rounded-full overflow-hidden">
        <SelectAvatar src={src} />
      </div>
    </button>
  );

  if (status === "loading" || loadingLocal) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#07070a] to-[#121228] p-4">
        <div className="animate-pulse text-center text-white/70">
          <div className="h-6 w-56 bg-white/6 rounded mb-4 mx-auto" />
          <div className="h-56 w-56 bg-white/5 rounded-full mx-auto" />
          <p className="mt-4 text-sm">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f101a] to-[#1a1a2b] p-4">
      <div className="w-full max-w-[1000px] bg-white/5 rounded-2xl shadow-xl backdrop-blur-md text-white p-4 flex flex-col lg:flex-row gap-6">
        {/* LEFT: Preview */}
        <div className="flex flex-col items-center gap-4 lg:w-1/3 w-full">
          <div className="bg-white/6 p-4 rounded-2xl shadow-inner">
            <MemberAvatar
              frame={frameS === "" ? session?.user.frame : frameS}
              photo={photoS === "" ? session?.user.photo : photoS}
            />
          </div>
          <div className="text-center">
            <div className="text-sm text-blue-200 font-semibold">
              {nickname}
              <p
                className={
                  session?.user.level === "Başrol"
                    ? "block text-[10px] text-orange-500"
                    : session?.user.level === "Destekçi"
                    ? "block text-[10px] text-blue-400"
                    : "hidden"
                }
              >
                {session?.user.level}
              </p>
            </div>
            <div className="text-xs text-gray-400 mt-1">
              Make it yours — changes preview live
            </div>
          </div>
          <button
            onClick={handleUpdate}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold shadow-lg hover:scale-[1.01] transition-transform"
          >
            Save Changes
          </button>
          {message && (
            <div className="mt-2 text-center text-green-400 text-sm">
              {message}
            </div>
          )}
        </div>

        {/* RIGHT: selections */}
        <div className="flex-1 flex flex-col gap-4 w-full">
          {/* Avatars */}
          <section className="w-full">
            <h3 className="text-sm text-blue-300 font-medium mb-2">Avatars</h3>
            <div className="flex flex-wrap justify-center sm:justify-between gap-3">
              {avatars.map((src) => (
                <AvatarItem
                  key={src}
                  src={src}
                  selected={photoS === src}
                  onClick={() => setPhotoAndFrame(src, frameS)}
                />
              ))}
            </div>
          </section>

          {/* Member Avatars */}
          <section className="w-full">
            <h3 className="text-sm text-purple-300 font-medium mb-2">
              Special / Member Avatars
            </h3>
            <div className="flex flex-wrap justify-center sm:justify-between gap-3">
              {memberAvatars.map((src) => (
                <AvatarItem
                  key={src}
                  src={src}
                  selected={photoS === src}
                  onClick={() => setPhotoAndFrame(src, frameS)}
                />
              ))}
            </div>
          </section>

          {/* Frames */}
          <section className="w-full mt-1">
            <h3 className="text-sm text-cyan-300 font-medium mb-2">Frames</h3>
            <div className="flex flex-wrap justify-center sm:justify-around gap-3">
              {frames.map((f) => (
                <button
                  key={f}
                  onClick={() => setPhotoAndFrame(photoS, f)}
                  className={`rounded-lg overflow-hidden transition-transform duration-200 focus:outline-none
                ${
                  frameS === f
                    ? "scale-105 shadow-[0_0_18px_rgba(34,211,238,0.2)] ring-2 ring-cyan-300/30"
                    : "hover:scale-105"
                }`}
                  style={{ width: 70, height: 70 }}
                >
                  <img
                    src={f}
                    alt="frame"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </section>

          {/* Reset */}
          <div className="w-full flex items-center justify-between mt-2">
            <span className="text-xs text-gray-400">
              Tip: seçtiğin görünümü kaydetmeyi unutma.
            </span>
            <button
              onClick={() => {
                const defP = session?.user?.photo ?? "/avatar/emptyAvatar.png";
                const defF =
                  session?.user?.frame ?? "/cerceveler/adminCerceve.png";
                setPhotoAndFrame(defP, defF);
              }}
              className="text-xs px-3 py-1 rounded-full bg-white/6 hover:bg-white/8 transition"
            >
              Reset to account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
