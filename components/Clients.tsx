"use client";

import Image from "next/image";

const clients = [
  {
    src: "/universal_jb3lbs.png",
    width: 219,
    height: 99,
    alt: "Universal Studios logo",
  },
  {
    src: "/eurovision_ygpc5z.png",
    width: 167,
    height: 66,
    alt: "Eurovision logo",
  },
  {
    src: "/sony_q8lxha.png",
    width: 149,
    height: 66,
    alt: "Sony Music logo",
  },
  {
    src: "/bmg_oas8fq.png",
    width: 142,
    height: 60,
    alt: "BMG logo",
  },
  {
    src: "/warner-2_yaqbqq.png",
    width: 136,
    height: 99,
    alt: "Warner Group logo",
  },
  {
    src: "/the-voice_v3hkrk.png",
    width: 116,
    height: 66,
    alt: "The Voice logo",
  },
  {
    src: "/orchard_x9frah.png",
    width: 180,
    height: 66,
    alt: "The Orchard logo",
  },
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="flex w-full flex-col items-center justify-center xs:justify-start"
    >
      <h2 className="w-full bg-foreground py-6 text-center text-xl text-background md:text-2xl xl:py-10 xl:text-3xl">
        My Clients
      </h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-12 px-8 py-12 md:px-12 lg:px-20 xl:py-20">
        {clients.map((client) => (
          <Image
            src={client.src}
            width={client.width}
            height={client.height}
            alt={client.alt}
            className="w-[9rem] 2xl:w-[11rem]"
            key={client.src}
          />
        ))}
      </div>
    </section>
  );
}
