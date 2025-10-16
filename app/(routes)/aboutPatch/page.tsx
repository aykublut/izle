"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const AboutPatchPage = () => {
  const [mounted, setMounted] = useState(false);

  return (
    <div className="min-h-screen relative flex flex-col xl:flex-row items-center xl:items-start pt-20 xl:px-30 lg:px-25 md:px-20 sm:px-15 px-10 gap-12  text-white">
      {/* HTML Audio */}
      <audio
        src="/patch.mp3"
        autoPlay
        loop
        controls={false}
        className="hidden"
      />
      {/* Patch bilgileri */}
      <div className="absolute left-65  p-5 rounded-lg z-50 top-50 flex flex-col gap-6">
        <h1 className="text-4xl font-extrabold text-red-600 tracking-wide">
          Dikkatli Ol, Ajan
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Gelecek güncelleme talimatları geldi. Her hareketin izlendiğini
          unutma.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-200">
          <li>
            Giriş yapan kullanıcıya özel <strong>seviye ve çerçeve</strong>{" "}
            eklenecek. Emirle uygulansın.
          </li>
          <li>
            Yeni filmler eklenecek, <strong>kesinlikle izlenebilir</strong>{" "}
            olacak. Hiçbir sapma yok.
          </li>

          <li>
            Film puanlama sistemi <strong>devreye girecek</strong>.{" "}
            <em>Not verme yetkisi olacak.</em>
          </li>
          <li>
            Telefon görünümü ve UI bozuklukları{" "}
            <strong>derhal giderilecek</strong>. Sapmaya izin yok.
          </li>
        </ul>

        <p className="text-red-500 font-semibold mt-4">
          Talimatlar kesin. Uygula, sorgulama yok. General seni izliyor.
        </p>
      </div>

      {/* Fotoğraf */}
      <div className="absolute w-full right-10 xl:w-2/3 h-163 flex-shrink-0">
        <Image
          src="/images/cevdet.png" // public/images içine ekle
          alt="Genel Cevdet silah doğrultuyor"
          fill
          className="object-contain rounded-lg "
        />
      </div>
    </div>
  );
};

export default AboutPatchPage;
