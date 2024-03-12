"use client";

import Image from "next/image";

const artists = [
  {
    src: "/snoop-dogg_b0j9lx.png",
    name: "Snoop Dogg",
  },
  {
    src: "/janet-jackson_ypq8zk.png",
    name: "Janet Jackson",
  },
  {
    src: "/afrojack_dbqnfh.png",
    name: "Afrojack",
  },
  {
    src: "/shaggy_b0udk3.png",
    name: "Shaggy",
  },
  {
    src: "/pitbull_tlcajs.png",
    name: "Pitbull",
  },
  {
    src: "/nicky-minaj_s6inem.png",
    name: "Nicky Minaj",
  },
  {
    src: "/kat-deluna_ry3orx.png",
    name: "Kat DeLuna",
  },
  {
    src: "/tito-jackson_ajwvhr.png",
    name: "Tito Jackson",
  },
  {
    src: "/joss-stone_h3jy8e.png",
    name: "Joss Stone",
  },
  {
    src: "/frank-mccomb_tuzlwd.png",
    name: "Frank McComb",
  },
  {
    src: "/daddy-yankee_k0fpft.png",
    name: "Daddy Yankee",
  },
  {
    src: "/mario-winans_v8jvsu.png",
    name: "Mario Winans",
  },
  {
    src: "/inna_ef6eah.png",
    name: "INNA",
  },
  {
    src: "/elephant-man_eytcvq.png",
    name: "Elephant Man",
  },
  {
    src: "/mohombi_zirsin.png",
    name: "Mohombi",
  },
  {
    src: "/timmy-trumpet_nzzvxh.png",
    name: "Timmy Trumpet",
  },
  {
    src: "/flo-rida_kfhi36.png",
    name: "Flo Rida",
  },
  {
    src: "/chenoa_gw41q8.png",
    name: "Chenoa",
  },
  {
    src: "/alexandra-stan_he8glf.png",
    name: "Alexandra Stan",
  },
  {
    src: "/fred-wesley_thaytj.png",
    name: "Fred Wesley",
  },
];

export default function Artists() {
  return (
    <section id="artists" className="flex w-full flex-col pb-6">
      <h2 className="w-full bg-foreground py-6 text-center text-xl text-background md:text-2xl xl:py-10">
        Artists I've Worked with & Produced
      </h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-8 p-6 px-8 md:px-12 lg:px-20 xl:py-10">
        {artists.map((artist) => (
          <div
            key={artist.src}
            className="flex h-[7rem] w-[5rem] flex-col items-center justify-start xl:h-[11rem] xl:w-[9rem]"
          >
            <Image
              src={artist.src}
              width={105}
              height={105}
              alt={artist.name}
              className="w-full"
            />
            <span className="text-center text-sm xl:text-base font-medium">
              {artist.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
