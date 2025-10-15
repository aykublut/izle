"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const PrivacyNotice = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-20  text-white text-center">
      <div className="max-w-lg  flex flex-col items-center p-6 rounded-2xl shadow-md shadow-white/10">
        <Image
          src="/scott.png"
          alt="Michael Scott"
          width={1090}
          height={720}
          className="w-85 h-55 mr-12 rounded-sm  mb-4"
        />
        <h1 className="text-2xl font-semibold mb-3">Küçük bir uyarı... 😅</h1>
        <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-4">
          Bu site kişisel bir proje olup, yalnızca yazılım ve tasarım
          becerilerimi geliştirmek amacıyla hazırlanmıştır.
          <br />
          <br />
          Lütfen kayıt olurken{" "}
          <span className="text-yellow-400 font-medium">
            gerçek ad, soyad, şifre veya e-posta
          </span>{" "}
          kullanmayın. Verileriniz yalnızca yerel geliştirme/test ortamında
          saklanır ve hiçbir üçüncü tarafla paylaşılmaz.
        </p>

        <p className="text-sm text-gray-400 mb-6">
          Giriş ve kayıt sisteminde güvenlik için{" "}
          <span className="text-gray-200">
            şifre hashleme (bcrypt), güvenli session (JWT)
          </span>{" "}
          ve{" "}
          <span className="text-gray-200">environment variable koruması</span>{" "}
          kullanılmaktadır.
        </p>

        <Button
          variant="outline"
          className="cursor-pointer hover:bg-white hover:text-slate-900 transition"
          onClick={() => router.push("/register")}
        >
          Tamam, okudum! Beni kayıt sayfasına götür 🚀
        </Button>
      </div>
    </div>
  );
};

export default PrivacyNotice;
