// app/api/movies/route.ts
import { NextRequest, NextResponse } from "next/server";

// Örnek film verisi
export const movies = [
  {
    id: 1,
    name: "The Best Offer",
    png: "/movies/theBestOffer.png",
    pngWidth: "1920",
    pngHeight: "2560",
    song: "/songs/theBestOffer-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/engineer.png",
    byAdmin: false,
    description:
      "Virgil, prestijli müzayedelerde çalışan yetenekli bir sanat eksperidir. Bir gün gizemli ve çekici bir koleksiyoncu ile tanışır; hem iş hem de duygusal açıdan hayatı beklenmedik bir şekilde değişir. Filmin gizemli atmosferi ve şaşırtıcı sonu izleyiciyi sürekli merakta bırakır.",
    comments: [
      {
        avatar: "/avatar/claire.png",
        name: "Claire",
        comment:
          "Filmin atmosferi çok sürükleyiciydi, önerdiğiniz için teşekkür ederim",
        color: "black",
        admin: false,
      },
    ],
  },
  {
    id: 2,
    name: "The Jacket",
    png: "/movies/theJacket.png",
    pngWidth: "1200",
    pngHeight: "1600",
    song: "/songs/theJacket-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/engineer.png",
    byAdmin: false,
    description:
      "Gulf Savaşı gazisi Jack, akıl hastanesinde yaşadığı gizemli deneyimler sonucunda zamanda yolculuk yapabildiğini fark eder. Film, geçmiş, gelecek ve gerçeklik arasındaki sınırları zorlayarak izleyiciyi sürükleyici ve gerilim dolu bir yolculuğa çıkarır.",
    comments: [
      {
        avatar: "/avatar/theJacketWoman.png",
        name: "Jackie",
        comment: "Çok underrated bir film.",
        color: "black",
        admin: false,
      },
      {
        avatar: "/avatar/virgil.png",
        name: "Ahmet",
        comment: "Muhteşem",
        color: "red",
        admin: false,
      },
    ],
  },
  {
    id: 3,
    name: "K-Pax",
    png: "/movies/kPax.png",
    pngWidth: "544",
    pngHeight: "789",
    song: "/songs/kpax-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/engineer.png",
    byAdmin: false,
    description:
      "Prot, kendisini K-PAX adlı uzak bir gezegenden geldiğini iddia eden gizemli bir adamdır. Psikiyatristi onun gerçekliğini sorguladıkça hem insan doğası hem de evrenin sırları üzerine derin düşüncelere sürüklenir. Film, felsefi ve bilim kurgu unsurlarını ustaca birleştirir.",
    comments: [
      {
        avatar: "/avatar/dr-mark.png",
        name: "Dr Mark",
        comment: "Hay yapacağınız filmin 32!^'^!24124",
        color: "black",
        admin: false,
      },
    ],
  },
  {
    id: 4,
    name: "A Beautiful Mind",
    png: "/movies/aBeautifulMind.png",
    pngWidth: "1920",
    pngHeight: "2560",
    song: "/songs/aBeautifulMind-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/engineer.png",
    byAdmin: false,
    description:
      "Dahi matematikçi John Nash, şizofreni ile mücadele ederken hem kişisel hem de profesyonel hayatında büyük zorluklar yaşar. Film, zekâ, aşk ve hastalık arasındaki dengeyi etkileyici bir şekilde gösterir ve izleyiciye unutulmaz bir deneyim sunar.",
    comments: [],
  },
  {
    id: 5,
    name: "Collateral",
    png: "/movies/collateral.png",
    pngWidth: "1920",
    pngHeight: "2560",
    song: "/songs/collateral-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/engineer.png",
    byAdmin: false,
    description:
      "Taksi şoförü Max, gecelik bir yolculukta profesyonel bir tetikçi olan Vincent ile karşılaşır. Max, suç ve ölümle dolu bir gece boyunca kendi sınırlarını zorlar ve hayatta kalmak için riskli kararlar almak zorunda kalır. Film, gerilim ve aksiyonu ustaca harmanlar.",
    comments: [],
  },
  {
    id: 6,
    name: "Nightcrawler",
    png: "/movies/nightcrawler.png",
    pngWidth: "1920",
    pngHeight: "2560",
    song: "/songs/nightcrawler-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/engineer.png",
    byAdmin: false,
    description:
      "Lou Bloom, suç ve kaza sahnelerini filmleyip haber kanallarına satmaya başlar. Hırslı ve ahlaksız yaklaşımı, gazetecilik ve etik kavramlarını sorgulayan karanlık bir hikâye oluşturur. İzleyiciye unutulmaz bir gerilim deneyimi sunar.",
    comments: [],
  },
  {
    id: 7,
    name: "Prisoners",
    png: "/movies/prisoners.png",
    pngWidth: "1920",
    pngHeight: "2560",
    song: "/songs/prisoners-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/engineer.png",
    byAdmin: false,
    description:
      "İki küçük kız çocuğu kaçırıldığında, aileler ve polis olayın peşine düşer. Bir baba, kızını bulmak için kendi adaletini uygulamaya karar verir. Film, gerilim, dram ve ahlaki ikilemleri ustaca işler.",
    comments: [],
  },
  {
    id: 8,
    name: "Man From Earth",
    png: "/movies/theManFromEarth.png",
    pngWidth: "1920",
    pngHeight: "2560",
    song: "/songs/theManFromEarth-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/engineer.png",
    byAdmin: false,
    description:
      "Profesör John, binlerce yıldır yaşadığını iddia eder ve arkadaşlarına hayat hikayesini anlatır. Film, felsefi diyaloglar ve insanlık tarihi üzerine düşündürücü bir bakış sunar, izleyiciyi derin düşüncelere iter.",
    comments: [],
  },
  {
    id: 9,
    name: "Next Three Days",
    png: "/movies/theNextThreeDays.png",
    pngWidth: "1920",
    pngHeight: "2560",
    song: "/songs/theNextThreeDays-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/engineer.png",
    byAdmin: false,
    description:
      "John Brennan, karısının suçsuz olduğunu kanıtlamaya çalışırken onu hapisten kaçırmak için karmaşık bir plan yapar. Film, aksiyon ve gerilimi sürükleyici bir şekilde birleştirir, izleyiciyi sürekli merakta bırakır.",
    comments: [],
  },
  {
    id: 10,
    name: "Contratiempo",
    png: "/movies/contratiempo.png",
    pngWidth: "1920",
    pngHeight: "2560",
    song: "/movies/contratiempo-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/engineer.png",
    byAdmin: false,
    description:
      "Başarılı işadamı Adrian, cinayetle suçlanır ve kendi masumiyetini kanıtlamak için zamanla yarışır. Film, zekice kurgulanmış bir hikaye ve şaşırtıcı dönemeçlerle izleyiciyi ekrana kilitler.",
    comments: [],
  },
  {
    id: 11,
    name: "İnek Şaban",
    png: "/movies/inekSaban.png",
    pngWidth: "469",
    pngHeight: "523",
    song: "/songs/kemalSunal.mp3",
    owner: "Ahmet",
    ownerPng: "/avatar/virgil.png",
    byAdmin: false,
    description:
      "Saf ve iyi niyetli İnek Şaban, köydeki çeşitli olaylarla karşılaşır ve komik, eğlenceli maceralar yaşar. Film, Türk mizahının unutulmaz örneklerinden biridir ve izleyiciye keyifli anlar sunar.",
    comments: [],
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(movies);
}
