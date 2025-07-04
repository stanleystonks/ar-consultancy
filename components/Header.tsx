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
import React from "react";

const navLinks = [
  {
    text: "About",
    href: "#clients",
  },
  {
    text: "Work process",
    href: "#approach",
  },
  // {
  //   text: "Apply",
  //   href: "#contact",
  // },
  { text: "Book now", href: "https://stan.store/marvinkuijs" },
  {
    text: "Contact",
    href: "#contact-form",
  },
];

export default function Header() {
  const handleClose = (href: string) => {
    handleScroll(href);
    const closeButton = document.getElementById("close");
    closeButton?.click();
  };

  const handleScroll = (href: string) => {
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="2xl:custom-height-2xl 4xl:custom-height-4xl relative flex flex-col gap-6 xl:min-h-[56rem]">
      <nav className=" flex items-center justify-between bg-card-foreground px-8 py-4 md:px-12 md:py-6 lg:px-20 xl:justify-end xl:bg-card">
        <ul className="hidden w-full items-center justify-between md:flex xl:w-3/5">
          <a
            target="blank"
            className="text-base font-medium uppercase text-background xl:text-lg xl:text-foreground"
            href="https://en.wikipedia.org/wiki/Artists_and_repertoire"
          >
            What is an A&R?
          </a>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                className="text-base font-medium uppercase text-background xl:text-lg xl:text-foreground"
                href={link.href}
                replace
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mb-0 text-sm text-background xs:text-base sm:text-lg md:hidden">
          Unlock Your Music Career's Full Potential with
        </h2>

        <div className="translate-y-24 sm:translate-y-28 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-center text-muted-foreground">
                  Marvin Kuijs
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col items-center justify-center gap-12">
                <a
                  target="blank"
                  className="text-lg font-medium uppercase"
                  href="https://en.wikipedia.org/wiki/Artists_and_repertoire"
                >
                  What is an A&R?
                </a>
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      className="text-lg font-medium uppercase"
                      href={link.href}
                      replace
                      onClick={() => handleClose(link.href)}
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
      </nav>

      <div className="absolute left-0 right-0 top-[26rem] -z-10 hidden w-full items-center justify-between gap-24 xl:flex 2xl:top-[31.5rem] 4xl:top-[32rem]">
        <div className="h-0.5 w-[55%] bg-foreground 2xl:h-1 2xl:w-[52vw] 4xl:w-[59vw]"></div>
        <div className="h-0.5 w-[6%] bg-foreground 2xl:h-1 4xl:w-[8%]"></div>
      </div>

      <section className="flex flex-col sm:pt-4 md:pt-8 lg:pt-14 xl:pt-20 2xl:min-h-[48rem] 2xl:pt-36 4xl:pt-[10rem]">
        <h2 className="mb-[4rem] flex w-full px-8 md:px-12 lg:px-20 xl:mb-[3rem] 2xl:mb-[6rem] 2xl:h-[8rem]">
          <div className="flex flex-col">
            <span className="mb-2 hidden text-[1.75rem] font-medium text-muted-foreground md:block lg:mb-4 lg:text-3xl xl:text-4xl 2xl:text-[2.92rem] 4xl:text-[3.55rem]">
              Unlock Your Music Career's Full Potential with
            </span>{" "}
            <span className="text-4xl font-bold uppercase leading-[2.7rem] xs:pr-[5vw] sm:pr-[10rem] sm:text-5xl md:pr-[14rem] lg:pr-[20rem] lg:text-6xl xl:pr-[27rem] xl:text-7xl 2xl:pr-[28rem] 2xl:text-[4.7rem] 4xl:text-[5.7rem]">
              Expert A&R Consultancy
            </span>
          </div>
        </h2>

        <section className="2xl:custom-height-div-2xl 4xl:custom-height-div-4xl relative mt-6 flex w-full flex-col bg-card px-8 pt-8 xs:pb-8 md:px-12 lg:px-20 xl:mt-0 xl:min-h-[23rem] xl:bg-transparent 2xl:mt-24 4xl:mt-32">
          <h3 className="mb-0 w-full translate-y-[-3rem] pr-[39vw] text-xl font-bold xs:text-xl md:text-3xl xl:mb-10 xl:translate-y-0">
            Are you ready to take your music to the next level?
          </h3>
          <p className="w-full pr-[45vw] text-lg font-regular sm:text-2xl lg:text-3xl xl:text-2xl">
            I'm <span>Marvin Kuijs</span>, your personal<br className="lg:hidden" /> A&R expert.
          </p>

          <div className="absolute bottom-[-80%] left-0 w-full flex-col bg-transparent px-8 text-center md:px-12 lg:px-20 xl:static xl:px-0 xl:pr-[45vw] 2xl:pr-[50vw]">
            <p className="text-md font-regular sm:text-xl lg:text-2xl xl:text-left">
              From deep track analysis and artist branding to career guidance,
              licensing, promotion, publishing and legal advice. I provide the
              insider strategies you need to grow, build income, protect, and
              elevate your music in today’s industry.
            </p>
          </div>
          <Image
            src="/marvin-new_fklbwl.png"
            alt="Photo of Marvin Kuijs"
            priority
            width={1565}
            height={1838}
            className="absolute bottom-0 right-[-2rem] w-[15rem] xs:right-0 sm:right-6 sm:w-[16rem] md:w-[20rem] lg:right-0 lg:w-[28rem] xl:bottom-[-50%] xl:-z-10 xl:w-[46rem] 2xl:bottom-[-50%] 2xl:right-0 2xl:w-[54rem] 4xl:bottom-[-55%] 4xl:w-[56rem]"
          />
        </section>

        <div className="mb-4 mt-[12rem] flex w-full flex-col items-center justify-center gap-2 px-8 py-4 xs:mt-[10rem] sm:flex-row md:mt-[12rem] md:gap-6 md:py-[2rem] xl:mb-10 xl:mt-0 xl:justify-start xl:px-20 xl:py-0 2xl:mb-4 2xl:gap-16">
          <Link href="https://stan.store/marvinkuijs" replace>
            <Button className="rounded-sm px-8 py-4 text-lg md:px-10 md:py-6 md:text-xl 2xl:px-12 2xl:py-8">
              Book Now
            </Button>
          </Link>
          <Link href="/portfolio" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="rounded-sm px-8 py-4 text-lg md:px-10 md:py-6 md:text-xl 2xl:px-12 2xl:py-8"
              >
                View Portfolio
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </header>
  );
}
