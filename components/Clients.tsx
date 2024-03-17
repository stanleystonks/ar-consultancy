"use client";

import Image from "next/image";

const clients = [
  {
    src: "/universal_pa3lsh.png",
    width: 176,
    height: 66,
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
    src: "/warner-client_gbqy4a.png",
    width: 106,
    height: 66,
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
      <h2 className="mb-0 w-full bg-foreground py-6 text-center text-xl text-background md:text-2xl xl:py-10 xl:text-3xl">
        My Clients
      </h2>
      <div className="my-12 flex w-full flex-wrap items-center justify-evenly gap-8 px-8 xs:justify-center md:my-16 md:gap-6 md:px-12 lg:my-20 lg:h-[2.75rem] lg:px-20 xl:my-[6rem] xl:h-[3.25rem] xl:gap-10 2xl:my-28 2xl:h-[3.5rem] 2xl:gap-12 4xl:h-[3.75rem] 4xl:gap-16">
        {clients.map((client) => (
          <Image
            key={client.src}
            src={client.src}
            width={client.width}
            height={client.height}
            alt={client.alt}
            className="aspect-auto h-full w-auto"
          />
        ))}
      </div>
    </section>
  );
}
