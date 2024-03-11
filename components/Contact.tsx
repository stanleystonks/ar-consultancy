"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <section id="contact" className="relative flex w-full flex-col lg:pb-24">
      <h2 className="mb-0 flex w-full flex-col bg-foreground px-8 py-6 text-2xl uppercase text-background md:px-12 lg:px-20 lg:pb-10 lg:pt-24 lg:text-4xl">
        <span className="mb-1 font-light ">Get Started:</span>
        <span className="font-bold lg:text-5xl">Book Your Session Today!</span>
      </h2>

      <div className="flex flex-col lg:flex-row-reverse lg:items-end lg:justify-between">
        <div className="lg:pb-18 bg-card px-8 pb-32 pt-12 md:px-12 lg:w-1/2 lg:translate-x-[-5rem] lg:px-20">
          <form action="" className="flex flex-col">
            <label
              className="mb-1 font-medium lg:mb-2 xl:text-lg"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              name="name"
              id="name"
              type="text"
              required
              className="mb-5 p-1 lg:mb-7 xl:p-2"
            />
            <label
              className="mb-1 font-medium lg:mb-2 xl:text-lg"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              name="email"
              id="email"
              type="text"
              required
              className="mb-5 p-1 lg:mb-7 xl:p-2"
            />
            <label
              className="mb-1 font-medium lg:mb-2 xl:text-lg"
              htmlFor="phone"
            >
              Phone number:
            </label>
            <input
              name="phone"
              id="phone"
              type="text"
              className="mb-5 p-1 lg:mb-7 xl:p-2"
            />
            <label
              className="mb-1 font-medium lg:mb-2 xl:text-lg"
              htmlFor="spotify"
            >
              Spotify Link to Your Music:
            </label>
            <input
              name="spotify"
              id="spotify"
              type="text"
              className="mb-5 p-1 lg:mb-7 xl:p-2"
            />
            <Button
              type="submit"
              className="m-auto mt-8 w-min rounded-lg text-lg md:p-6 lg:text-xl"
            >
              Send Request
            </Button>
          </form>
        </div>

        <div className="px-8 py-8 md:px-12 lg:px-20 lg:pb-0">
          <p className="text-xl font-medium text-muted-foreground lg:text-2xl xl:text-3xl">
            Contact:
          </p>
          <p className="text-xl font-medium lg:mb-8">ar@marvinkuijs.com</p>
          <p className="text-xl font-medium text-muted-foreground lg:text-2xl xl:text-3xl">
            Let's Connect:
          </p>
          <div className="flex items-center gap-3 lg:hidden">
            <Link href="/">
              <Icon icon="streamline:facebook-1" width={30} />
            </Link>
            <Link href="/">
              <Icon icon="teenyicons:instagram-outline" width={30} />
            </Link>
            <Link href="/">
              <Icon icon="ph:linkedin-logo" width={38} />
            </Link>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <Link href="/">
              <Icon icon="streamline:facebook-1" width={40} />
            </Link>
            <Link href="/">
              <Icon icon="teenyicons:instagram-outline" width={40} />
            </Link>
            <Link href="/">
              <Icon icon="ph:linkedin-logo" width={48} />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-1rem] left-[-4rem] h-[19rem] w-[100vw] border-2 border-foreground lg:-z-10 lg:h-[22rem] lg:w-[52vw]"></div>
    </section>
  );
}
