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
    ownerPng: "/avatar/general.png",
    byAdmin: true,
    descriptionTR:
      "Virgil, prestijli müzayedelerde çalışan yetenekli bir sanat eksperidir. Bir gün gizemli ve çekici bir koleksiyoncu ile tanışır; hem iş hem de duygusal açıdan hayatı beklenmedik bir şekilde değişir. Filmin gizemli atmosferi ve şaşırtıcı sonu izleyiciyi sürekli merakta bırakır.",
    descriptionENG:
      "Virgil is a talented art expert working at prestigious auctions. One day, he meets a mysterious and attractive collector; his life changes unexpectedly both professionally and emotionally. The film's mysterious atmosphere and surprising ending keep the audience constantly intrigued.",
    comments: [
      {
        avatar: "/avatar/claire.png",
        name: "Claire",
        comment:
          "Filmin atmosferi çok sürükleyiciydi, önerdiğiniz için teşekkür ederim",
        color: "black",
        admin: false,
      },
      {
        avatar: "/avatar/killer.png",
        name: "İskilip",
        comment: "Hayatımda gördüğüm en iyi teklif !",
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
    ownerPng: "/avatar/general.png",
    byAdmin: true,
    descriptionTR:
      "Gulf Savaşı gazisi Jack, akıl hastanesinde yaşadığı gizemli deneyimler sonucunda zamanda yolculuk yapabildiğini fark eder. Film, geçmiş, gelecek ve gerçeklik arasındaki sınırları zorlayarak izleyiciyi sürükleyici ve gerilim dolu bir yolculuğa çıkarır.",
    descriptionENG:
      "Gulf War veteran Jack discovers he can travel through time following mysterious experiences in a mental hospital. The film pushes the boundaries between past, future, and reality, taking the audience on an engaging and thrilling journey.",
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
      {
        avatar: "/avatar/prot.png",
        name: "Cecu",
        comment: "Güzel bir roman uyarlaması",
        color: "blue",
        admin: false,
      },
      {
        avatar: "/avatar/killer.png",
        name: "İskilip",
        comment: "Jacket döner 😂😂 afiyet olsun",
        color: "yellow",
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
    ownerPng: "/avatar/general.png",
    byAdmin: true,
    descriptionTR:
      "Prot, kendisini K-PAX adlı uzak bir gezegenden geldiğini iddia eden gizemli bir adamdır. Psikiyatristi onun gerçekliğini sorguladıkça hem insan doğası hem de evrenin sırları üzerine derin düşüncelere sürüklenir. Film, felsefi ve bilim kurgu unsurlarını ustaca birleştirir.",
    descriptionENG:
      "Prot is a mysterious man claiming to be from a distant planet called K-PAX. As his psychiatrist questions his reality, it leads to deep reflections on human nature and the secrets of the universe. The film masterfully combines philosophical and sci-fi elements.",
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
    ownerPng: "/avatar/general.png",
    byAdmin: true,
    descriptionTR:
      "Dahi matematikçi John Nash, şizofreni ile mücadele ederken hem kişisel hem de profesyonel hayatında büyük zorluklar yaşar. Film, zekâ, aşk ve hastalık arasındaki dengeyi etkileyici bir şekilde gösterir ve izleyiciye unutulmaz bir deneyim sunar.",
    descriptionENG:
      "Genius mathematician John Nash struggles with schizophrenia while facing significant challenges in his personal and professional life. The film impressively shows the balance between intelligence, love, and illness, offering the audience an unforgettable experience.",
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
    ownerPng: "/avatar/general.png",
    byAdmin: true,
    descriptionTR:
      "Taksi şoförü Max, gecelik bir yolculukta profesyonel bir tetikçi olan Vincent ile karşılaşır. Max, suç ve ölümle dolu bir gece boyunca kendi sınırlarını zorlar ve hayatta kalmak için riskli kararlar almak zorunda kalır. Film, gerilim ve aksiyonu ustaca harmanlar.",
    descriptionENG:
      "Taxi driver Max encounters professional hitman Vincent during a night journey. Max must push his limits and make risky decisions to survive a night filled with crime and death. The film skillfully combines suspense and action.",
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
    ownerPng: "/avatar/general.png",
    byAdmin: true,
    descriptionTR:
      "Lou Bloom, suç ve kaza sahnelerini filmleyip haber kanallarına satmaya başlar. Hırslı ve ahlaksız yaklaşımı, gazetecilik ve etik kavramlarını sorgulayan karanlık bir hikâye oluşturur. İzleyiciye unutulmaz bir gerilim deneyimi sunar.",
    descriptionENG:
      "Lou Bloom starts filming crime and accident scenes and sells them to news channels. His ambitious and immoral approach creates a dark story questioning journalism and ethics, providing the audience with an unforgettable thriller experience.",
    comments: [
      {
        avatar: "/avatar/killer.png",
        name: "İskilip",
        comment:
          "Harika bir film daha, Çağlar Ertuğrul yine çok iyi bir performans sergilemiş !",
        color: "black",
        admin: false,
      },
    ],
  },
  {
    id: 7,
    name: "Prisoners",
    png: "/movies/prisoners.png",
    pngWidth: "1920",
    pngHeight: "2560",
    song: "/songs/prisoners-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/general.png",
    byAdmin: true,
    descriptionTR:
      "İki küçük kız çocuğu kaçırıldığında, aileler ve polis olayın peşine düşer. Bir baba, kızını bulmak için kendi adaletini uygulamaya karar verir. Film, gerilim, dram ve ahlaki ikilemleri ustaca işler.",
    descriptionENG:
      "When two young girls are kidnapped, families and police pursue the case. A father decides to take justice into his own hands to find his daughter. The film skillfully handles suspense, drama, and moral dilemmas.",
    comments: [
      {
        avatar: "/avatar/theMan.png",
        name: "Kayhan",
        comment:
          "gerilim dozu oldukca yerinde ama tahmin edilebilir bir sona sahip film…",
        color: "black",
        admin: false,
      },
      {
        avatar: "/avatar/killer.png",
        name: "İskilip",
        comment: "Suça sürüklenenler 😞",
        color: "yellow",
        admin: false,
      },
      {
        avatar: "/avatar/theWoman.png",
        name: "fatma",
        comment: "Çok sresli filmdi.",
        color: "yellow",
        admin: false,
      },
    ],
  },
  {
    id: 8,
    name: "Man From Earth",
    png: "/movies/theManFromEarth.png",
    pngWidth: "1920",
    pngHeight: "2560",
    song: "/songs/theManFromEarth-song.mp3",
    owner: "Admin",
    ownerPng: "/avatar/general.png",
    byAdmin: true,
    descriptionTR:
      "Profesör John, binlerce yıldır yaşadığını iddia eder ve arkadaşlarına hayat hikayesini anlatır. Film, felsefi diyaloglar ve insanlık tarihi üzerine düşündürücü bir bakış sunar, izleyiciyi derin düşüncelere iter.",
    descriptionENG:
      "Professor John claims to have lived for thousands of years and shares his life story with his friends. The film provides thought-provoking insights through philosophical dialogues and human history, prompting the audience to reflect deeply.",
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
    ownerPng: "/avatar/general.png",
    byAdmin: true,
    descriptionTR:
      "John Brennan, karısının suçsuz olduğunu kanıtlamaya çalışırken onu hapisten kaçırmak için karmaşık bir plan yapar. Film, aksiyon ve gerilimi sürükleyici bir şekilde birleştirir, izleyiciyi sürekli merakta bırakır.",
    descriptionENG:
      "John Brennan devises a complex plan to break his wife out of prison while trying to prove her innocence. The film combines action and suspense in a compelling way, keeping the audience constantly on edge.",
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
    ownerPng: "/avatar/general.png",
    byAdmin: true,
    descriptionTR:
      "Başarılı işadamı Adrian, cinayetle suçlanır ve kendi masumiyetini kanıtlamak için zamanla yarışır. Film, zekice kurgulanmış bir hikaye ve şaşırtıcı dönemeçlerle izleyiciyi ekrana kilitler.",
    descriptionENG:
      "Successful businessman Adrian is accused of murder and races against time to prove his innocence. The film features a cleverly crafted story and surprising twists, keeping the audience glued to the screen.",
    comments: [
      {
        avatar: "/avatar/killer.png",
        name: "İskilip",
        comment: "Takım elbise giymekle adam olunsaydı ohhooo 😂",
        color: "black",
        admin: false,
      },
    ],
  },

  {
    id: 11,
    name: "Snowpiercer",
    png: "/movies/snowpiercer.png",
    pngWidth: "3543",
    pngHeight: "5016",
    song: "/songs/snowpiercer.mp3",
    owner: "İskilip",
    byAdmin: false,
    descriptionTR:
      "Küresel bir felaketin ardından hayatta kalan insanların sürekli hareket eden bir trende yaşam mücadelesini konu alan bu film, sınıf çatışmaları ve hayatta kalma mücadelesini işliyor.",
    descriptionENG:
      "Set in a post-apocalyptic world, this film follows the survivors living on a perpetually moving train. It explores themes of class conflict and the struggle for survival.",
    comments: [],
  },
  {
    id: 12,
    name: "Nobody",
    png: "/movies/nobody.png",
    pngWidth: "3000",
    pngHeight: "4500",
    song: "/songs/nobody.mp3",
    owner: "İskilip",
    byAdmin: false,
    descriptionTR:
      "Sıradan bir aile babasının evine giren hırsızlara sessiz kalmasının ardından bastırılmış öfkesini dışa vurduğu bu aksiyon dolu film, sıradan görünen bir adamın geçmişindeki karanlık sırları ortaya çıkarıyor.",
    descriptionENG:
      "After a home invasion, a seemingly ordinary family man unleashes his long-suppressed rage in this action-packed film that reveals the dark secrets of his past.",
    comments: [],
  },
];

export async function GET(req: NextRequest) {
  return NextResponse.json(movies);
}
