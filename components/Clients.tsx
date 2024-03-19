"use client";

import Image from "next/image";

const clients = [
  {
    src: "/client-universal_mavurv.png",
    width: 179,
    height: 68,
    alt: "Universal Studios logo",
  },
  {
    src: "/client-eurovision_gxrs1v.png",
    width: 170,
    height: 68,
    alt: "Eurovision logo",
  },
  {
    src: "/client-sony_s6uv0i.png",
    width: 152,
    height: 68,
    alt: "Sony Music logo",
  },
  {
    src: "/client-bmg_iuvepr.png",
    width: 145,
    height: 62,
    alt: "BMG logo",
  },
  {
    src: "/client-warner_ofnzuh.png",
    width: 108,
    height: 68,
    alt: "Warner Group logo",
  },
  {
    src: "/client-thevoice_jvzxkc.png",
    width: 118,
    height: 68,
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
