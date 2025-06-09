"use client";

import Image from "next/image";

const artists = [
  {
    src: "/SNOOP_hrutbl.png",
    name: "Snoop Dogg",
  },
  {
    src: "/JANNET_shwf7c.png",
    name: "Janet Jackson",
  },
  { src: "/TEDDY_a6hylx.png", name: "Teddy Swims" },
  {
    src: "/SHAGGY_tq4a7u.png",
    name: "Shaggy",
  },
  {
    src: "/PITBULL_qvuuru.png",
    name: "Pitbull",
  },
  {
    src: "/NICKY_gkbuqu.png",
    name: "Nicky Minaj",
  },
  {
    src: "/KAT_dexwmq.png",
    name: "Kat DeLuna",
  },
  {
    src: "/TITO_f7g0jm.png",
    name: "Tito Jackson",
  },
  {
    src: "/JOSS_qjnyiz.png",
    name: "Joss Stone",
  },
  {
    src: "/FRANK_vi2fyd.png",
    name: "Frank McComb",
  },
  {
    src: "/DADDY_ltnydm.png",
    name: "Daddy Yankee",
  },
  {
    src: "/MARIO_nflq3d.png",
    name: "Mario Winans",
  },
  {
    src: "/INNA_dhuhne.png",
    name: "INNA",
  },
  {
    src: "/AFRO_etmumw.png",
    name: "Afrojack",
  },
  // {
  //   src: "/elephant-man_eytcvq.png",
  //   name: "Elephant Man",
  // },
  {
    src: "/MOHO_ulgvdv.png",
    name: "Mohombi",
  },
  {
    src: "/TIMMY_tqhyoc.png",
    name: "Timmy Trumpet",
  },
  {
    src: "/FLO_bey89y.png",
    name: "Flo Rida",
  },
  {
    src: "/CHENOA_yxckmn.png",
    name: "Chenoa",
  },
  {
    src: "/ALE_STAN_gala2o.png",
    name: "Alexandra Stan",
  },
  {
    src: "/FRED_vmagtl.png",
    name: "Fred Wesley",
  },
];

export default function Artists() {
  return (
    <section id="artists" className="flex w-full flex-col pb-6">
      <h2 className="w-full bg-foreground py-6 text-center text-xl text-background md:text-2xl xl:py-10 xl:text-3xl">
        Artists I've Worked with & Produced
      </h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-8 p-6 px-8 md:px-12 lg:px-20 xl:py-10">
        {artists.map((artist) => (
          <div
            key={artist.src}
            className="flex h-[7rem] w-[5rem] flex-col items-center justify-start xl:h-[10rem] xl:w-[8rem]"
          >
            <Image
              src={artist.src}
              width={500}
              height={500}
              alt={artist.name}
              className="w-full"
            />
            <span className="text-center text-sm font-medium xl:text-base">
              {artist.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
