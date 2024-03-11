"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";


import { Menu } from "lucide-react";
import Image from "next/image";

const navLinks = [
  {
    id: 1,
    text: "What is an A&R?",
    href: "/",
  },
  {
    id: 2,
    text: "About",
    href: "/",
  },
  {
    id: 3,
    text: "Work process",
    href: "/",
  },
  {
    id: 4,
    text: "Apply",
    href: "/",
  },
  {
    id: 5,
    text: "Contact",
    href: "/",
  },
];

export default function Header() {
  const handleClose = () => {
    const closeButton = document.getElementById("close");
    closeButton?.click();
  };
  return (
    <div className="relative flex flex-col justify-between gap-6">
      <nav className="hidden bg-card-foreground px-12 py-6 md:flex lg:px-20 xl:justify-end xl:bg-card xl:py-10">
        <ul className="flex w-full items-center justify-between xl:w-3/5">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                className="text-base font-regular uppercase text-background xl:text-lg xl:text-foreground"
                href={link.href}
                replace
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center bg-card-foreground px-8 py-4 md:hidden">
        <h2 className="mb-0 text-sm text-white">
          Unlock Your Music Career's Full Potential with
        </h2>
      </div>

      <div className="absolute left-0 right-0 top-[30rem] -z-10 hidden w-full items-center justify-between gap-24 xl:flex">
        <div className="h-0.5 w-[61%] bg-foreground"></div>
        <div className="h-0.5 w-[6%] bg-foreground"></div>
      </div>

      <Image
        src="/marvin-new_fklbwl.png"
        alt="Photo of Marvin Kuijs"
        width={1565}
        height={1838}
        className="absolute right-[-2rem] top-[10rem] z-[-4] w-[15rem] xs:right-0 sm:right-6 md:right-[-2rem] md:w-[29rem] lg:w-[38rem] xl:w-[40rem] 2xl:right-24 2xl:w-[42rem] xl:bottom-0"
      />

      <div className="absolute top-[27rem] -z-10 w-full bg-card px-8 py-6 md:hidden">
        <p className="text-center xs:text-lg">
          My expertise lies in thoroughly{" "}
          <span className="font-medium">analyzing tracks</span> and pinpointing{" "}
          <span className="font-medium">areas for improvement</span> to{" "}
          <span className="sm:font-medium">
            upgrade your songs and artist brand
          </span>{" "}
          into a masterpiece worthy of{" "}
          <span className="sm:font-medium">major labels</span>.
        </p>
      </div>

      <section className="flex flex-col px-8 sm:pt-4 md:px-12 md:pt-8 lg:px-20 lg:pt-14 xl:pt-32 2xl:pt-36">
        <h2 className="mb-[4vw] flex w-full items-center justify-between 2xl:mb-[6vw]">
          <div className="flex flex-col">
            <span className="mb-2 hidden text-[1.75rem] font-medium text-muted-foreground md:block lg:mb-4 lg:text-3xl xl:text-4xl 2xl:text-[2.82rem]">
              Unlock Your Music Career's Full Potential with
            </span>{" "}
            <span className="text-4xl font-bold uppercase leading-[2.7rem] xs:pr-[3vw] sm:pr-[5vw] sm:text-5xl md:pr-[14rem] lg:pr-[18rem] lg:text-6xl xl:pr-[27rem] xl:text-7xl 2xl:pr-[28rem]">
              Expert A&R Consultancy
            </span>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle className="text-muted-foreground text-center">
                    Marvin Kuijs
                  </SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col items-center justify-center gap-12">
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <Link
                        className="text-lg font-medium uppercase"
                        href={link.href}
                        replace
                        onClick={handleClose}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
                <SheetClose className="hidden" asChild>
                  <button id="close"></button>
                </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </h2>

        <section className="mt-7 flex w-full flex-col xl:mt-5">
          <h3 className="mb-10 w-full pr-[38vw] text-lg font-medium xs:text-xl md:text-3xl lg:text-3xl">
            Are you ready to take your music to the next level?
          </h3>

          <p className="relative z-[-10] w-full pr-[45vw] xs:text-3xl md:text-xl">
            I'm <span className="font-medium lg:font-thin">Marvin Kuijs</span>,
            your personal A&R specialist.
          </p>

          <div className="hidden w-full flex-col py-6 pr-[50vw] md:flex md:bg-transparent md:py-0">
            <p className="text-lg sm:text-xl">
              My expertise lies in thoroughly{" "}
              <span className="font-medium">analyzing tracks</span> and
              pinpointing{" "}
              <span className="font-medium">areas for improvement</span> to{" "}
              <span className="sm:font-medium">
                upgrade your songs and artist brand
              </span>{" "}
              into a masterpiece worthy of{" "}
              <span className="sm:font-medium">major labels</span>.
            </p>
          </div>
        </section>

        <div className="2xl:gap-18 mt-[14rem] flex w-full flex-col items-center justify-center gap-2 py-4 sm:mt-[10rem] md:mt-[2rem] md:w-[120%] md:translate-x-[-10%] md:flex-row md:gap-6 md:bg-card md:py-[4rem] lg:translate-x-0 lg:justify-start lg:bg-transparent lg:py-0">
          <Button className="rounded-2xl px-8 py-4 text-lg md:px-10 md:py-6 md:text-xl 2xl:px-12 2xl:py-8">
            Book Now
          </Button>
          <Button className="rounded-2xl border-2 border-black bg-transparent px-8 py-4 text-lg text-primary hover:bg-slate-400 md:px-10 md:py-6 md:text-xl 2xl:px-12 2xl:py-8">
            View Portfolio
          </Button>
        </div>
      </section>
    </div>
  );
}
