"use client";

import Image from "next/image";

const clients = [
  {
    src: "/client-universal_vvtm9a.png",
    width: 219,
    height: 99,
    alt: "Universal Studios logo",
  },
  {
    src: "/client-eurovision_zumwjv.png",
    width: 176,
    height: 79,
    alt: "Eurovision logo",
  },
  {
    src: "/client-sony_jmiojt.png",
    width: 239,
    height: 99,
    alt: "Sony Music logo",
  },
  {
    src: "/client-bmg_bdzejk.png",
    width: 169,
    height: 79,
    alt: "BMG logo",
  },
  {
    src: "/client-warner_bx3dq4.png",
    width: 136,
    height: 99,
    alt: "Warner Group logo",
  },
  {
    src: "/client-thevoice_lbrnbu.png",
    width: 141,
    height: 89,
    alt: "The Voice logo",
  },
  {
    src: "/client-theorchard_ufboxr.png",
    width: 191,
    height: 75,
    alt: "The Orchard logo",
  },
];

export default function Clients() {
  return (
    <section
      id="clients"
      className="flex w-full flex-col items-center justify-center xs:justify-start"
    >
      <h2 className="w-full bg-foreground py-6 text-center text-xl text-white md:text-2xl xl:py-10">
        My Clients
      </h2>
      <div className="flex w-full flex-wrap items-center justify-center gap-6 py-12 px-8 md:px-12 lg:px-20 xl:py-10">
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
