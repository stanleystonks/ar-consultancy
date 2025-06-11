"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { ValidationError, useForm } from "@formspree/react";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [link, setLink] = useState("");

  const [state, handleSubmit] = useForm("xdoqwapp");

  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setPhone("");
      setLink("");

      toast("Your request was sent successfully! ✔️");
    }
  }, [state.succeeded]);

  return (
    <section id="contact" className="relative flex w-full flex-col lg:pb-24">
      <h2 className="mb-0 flex w-full flex-col bg-foreground px-8 py-6 text-2xl uppercase text-background md:px-12 lg:px-20 lg:pb-10 lg:pt-24 lg:text-4xl">
        <span className="mb-1 font-light ">Get Started:</span>
        <span className="font-bold md:text-3xl lg:text-5xl">
          Book Your Session Today!
        </span>
      </h2>

      {state.succeeded && (
        <div className="top-[16rem] my-12 px-8 text-center md:px-12 lg:absolute lg:px-20 lg:pr-[65vw] lg:text-left xl:top-[18rem]">
          <h3 className="text-xl font-bold lg:text-2xl xl:text-4xl">
            Thanks for your request!
          </h3>
          <p className="xl:font-medium">
            You have taken the first step towards the next level of your music
            career.
          </p>
          <p className="xl:font-medium">
            Marvin will contact you within the next 24 hours.
          </p>
        </div>
      )}

      <div
        id="contact-form"
        className="relative flex flex-col lg:flex-row-reverse lg:items-end lg:justify-between"
      >
        <div className="lg:pb-18 bg-card px-8 py-12 md:px-12 lg:w-1/2 lg:translate-x-[-5rem] lg:px-20">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <label
              className="mb-1 font-medium lg:mb-2 xl:text-lg"
              htmlFor="name"
            >
              Name:
            </label>
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <input
              name="name"
              id="name"
              type="text"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              className="mb-5 p-1 lg:mb-7 xl:p-2"
            />
            <label
              className="mb-1 font-medium lg:mb-2 xl:text-lg"
              htmlFor="email"
            >
              Email:
            </label>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              name="email"
              id="email"
              type="text"
              value={email}
              required
              className="mb-5 p-1 lg:mb-7 xl:p-2"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              className="mb-1 font-medium lg:mb-2 xl:text-lg"
              htmlFor="phone"
            >
              Phone number:
            </label>
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
            <input
              name="phone"
              id="phone"
              type="text"
              className="mb-5 p-1 lg:mb-7 xl:p-2"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label
              className="mb-1 font-medium lg:mb-2 xl:text-lg"
              htmlFor="music-link"
            >
              Spotify Link to Your Music:
            </label>
            <ValidationError
              prefix="Music Link"
              field="music-link"
              errors={state.errors}
            />
            <input
              name="music-link"
              id="music-link"
              type="text"
              required
              className="mb-5 p-1 lg:mb-7 xl:p-2"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
            <Button
              type="submit"
              className="m-auto mt-8 w-min rounded-sm text-lg md:p-6 lg:text-xl"
              disabled={state.submitting}
            >
              Contact Me
            </Button>
          </form>
        </div>

        <div className="flex-1 justify-between px-8 pb-8 md:px-12 lg:px-20 lg:pb-0">
          <div className="flex w-full items-center justify-center mb-12 py-[8rem] lg:mb-4 xl:py-[9rem]">
            <Link href="https://stan.store/marvinkuijs" replace>
              <Button
                className="rounded-sm px-8 py-4 text-2xl md:px-10 md:py-6 md:text-4xl 2xl:px-12 2xl:py-8"
              >
                Book now
              </Button>
            </Link>
          </div>

          <div>
            <p className="text-xl font-medium text-muted-foreground lg:text-2xl xl:text-3xl">
              Contact:
            </p>
            <p className="text-xl font-medium lg:mb-8">ar@marvinkuijs.com</p>
            <p className="text-xl font-medium text-muted-foreground lg:text-2xl xl:text-3xl">
              Let's Connect:
            </p>

            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a href="https://www.facebook.com/MarvinKuijs/" target="blank">
                <svg
                  className="w-8 lg:w-12"
                  viewBox="0 0 45 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_10_238)">
                    <path
                      d="M1.58496 40.4772V5.60837C1.58496 4.76766 1.91893 3.96139 2.5134 3.36692C3.10787 2.77245 3.91415 2.43848 4.75486 2.43848H39.6237C40.4644 2.43848 41.2707 2.77245 41.8652 3.36692C42.4596 3.96139 42.7936 4.76766 42.7936 5.60837V40.4772C42.7936 41.3179 42.4596 42.1242 41.8652 42.7187C41.2707 43.3132 40.4644 43.6471 39.6237 43.6471H30.114V28.6218H32.3647C32.8775 28.6218 33.3693 28.4181 33.7319 28.0555C34.0946 27.6928 34.2983 27.201 34.2983 26.6882V24.2474C34.2975 23.7348 34.0935 23.2434 33.731 22.881C33.3686 22.5186 32.8772 22.3146 32.3647 22.3137H30.2408V19.334C30.2408 16.6713 31.4454 16.6713 32.6499 16.6713H34.2032C34.4583 16.6818 34.7126 16.6362 34.9482 16.5376C35.1837 16.439 35.3947 16.2898 35.5663 16.1007C35.7505 15.9254 35.8963 15.7137 35.9945 15.479C36.0927 15.2444 36.1412 14.992 36.1368 14.7377V12.392C36.1461 12.1336 36.1042 11.876 36.0135 11.6339C35.9228 11.3919 35.7851 11.1702 35.6083 10.9816C35.4315 10.793 35.2191 10.6413 34.9834 10.5351C34.7477 10.429 34.4933 10.3706 34.2349 10.3632H30.5895C29.5258 10.3232 28.4662 10.5146 27.4837 10.9242C26.5012 11.3337 25.6193 11.9516 24.899 12.7353C24.1787 13.5189 23.637 14.4496 23.3115 15.463C22.9859 16.4764 22.8842 17.5484 23.0135 18.6049V22.3137H20.9847C20.7281 22.3095 20.4733 22.3564 20.235 22.4517C19.9967 22.547 19.7798 22.6888 19.5969 22.8687C19.414 23.0487 19.2687 23.2633 19.1696 23.5C19.0704 23.7367 19.0194 23.9907 19.0194 24.2474V26.6882C19.0194 26.9448 19.0704 27.1989 19.1696 27.4355C19.2687 27.6722 19.414 27.8868 19.5969 28.0668C19.7798 28.2468 19.9967 28.3885 20.235 28.4838C20.4733 28.5791 20.7281 28.626 20.9847 28.6218H23.0135V43.6471H4.75486C3.91415 43.6471 3.10787 43.3132 2.5134 42.7187C1.91893 42.1242 1.58496 41.3179 1.58496 40.4772Z"
                      stroke="#1A1A1A"
                      strokeWidth="3.1699"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_238">
                      <rect
                        width="44.3786"
                        height="44.3786"
                        fill="white"
                        transform="translate(0 0.852539)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/armarvinkuijs/" target="blank">
                <svg
                  className="w-8 lg:w-12"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_10_240)">
                    <path
                      d="M33.38 11.3699H36.3848M13.8488 2.35547H31.8776C35.0653 2.35547 38.1224 3.62177 40.3764 5.87581C42.6305 8.12984 43.8968 11.187 43.8968 14.3747V32.4034C43.8968 35.5911 42.6305 38.6483 40.3764 40.9023C38.1224 43.1563 35.0653 44.4226 31.8776 44.4226H13.8488C10.6611 44.4226 7.60396 43.1563 5.34993 40.9023C3.09589 38.6483 1.82959 35.5911 1.82959 32.4034V14.3747C1.82959 11.187 3.09589 8.12984 5.34993 5.87581C7.60396 3.62177 10.6611 2.35547 13.8488 2.35547ZM22.8632 32.4034C20.4724 32.4034 18.1796 31.4537 16.489 29.7632C14.7985 28.0727 13.8488 25.7798 13.8488 23.3891C13.8488 20.9983 14.7985 18.7054 16.489 17.0149C18.1796 15.3244 20.4724 14.3747 22.8632 14.3747C25.2539 14.3747 27.5468 15.3244 29.2373 17.0149C30.9278 18.7054 31.8776 20.9983 31.8776 23.3891C31.8776 25.7798 30.9278 28.0727 29.2373 29.7632C27.5468 31.4537 25.2539 32.4034 22.8632 32.4034Z"
                      stroke="#1A1A1A"
                      strokeWidth="3.0048"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_10_240">
                      <rect
                        width="45.072"
                        height="45.072"
                        fill="white"
                        transform="translate(0.327148 0.852539)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/marvin-kuijs-4b01b1a/?originalSubdomain=nl"
                target="blank"
              >
                <svg
                  className="w-8 lg:w-12"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M41.8056 0.200195H3.66776C2.74823 0.200195 1.86637 0.565475 1.21617 1.21568C0.565963 1.86588 0.200684 2.74774 0.200684 3.66727V41.8051C0.200684 42.7246 0.565963 43.6065 1.21617 44.2567C1.86637 44.9069 2.74823 45.2722 3.66776 45.2722H41.8056C42.7251 45.2722 43.607 44.9069 44.2572 44.2567C44.9074 43.6065 45.2726 42.7246 45.2726 41.8051V3.66727C45.2726 2.74774 44.9074 1.86588 44.2572 1.21568C43.607 0.565475 42.7251 0.200195 41.8056 0.200195ZM41.8056 41.8051H3.66776V3.66727H41.8056V41.8051ZM15.8025 19.2691V33.1374C15.8025 33.5972 15.6199 34.0381 15.2948 34.3632C14.9697 34.6883 14.5287 34.8709 14.069 34.8709C13.6092 34.8709 13.1683 34.6883 12.8432 34.3632C12.5181 34.0381 12.3354 33.5972 12.3354 33.1374V19.2691C12.3354 18.8093 12.5181 18.3684 12.8432 18.0433C13.1683 17.7182 13.6092 17.5356 14.069 17.5356C14.5287 17.5356 14.9697 17.7182 15.2948 18.0433C15.6199 18.3684 15.8025 18.8093 15.8025 19.2691ZM34.8714 25.3365V33.1374C34.8714 33.5972 34.6888 34.0381 34.3637 34.3632C34.0386 34.6883 33.5977 34.8709 33.1379 34.8709C32.6781 34.8709 32.2372 34.6883 31.9121 34.3632C31.587 34.0381 31.4044 33.5972 31.4044 33.1374V25.3365C31.4044 24.1871 30.9478 23.0847 30.135 22.272C29.3222 21.4592 28.2199 21.0026 27.0705 21.0026C25.9211 21.0026 24.8188 21.4592 24.006 22.272C23.1933 23.0847 22.7367 24.1871 22.7367 25.3365V33.1374C22.7367 33.5972 22.554 34.0381 22.2289 34.3632C21.9038 34.6883 21.4629 34.8709 21.0031 34.8709C20.5434 34.8709 20.1024 34.6883 19.7773 34.3632C19.4522 34.0381 19.2696 33.5972 19.2696 33.1374V19.2691C19.2717 18.8445 19.4297 18.4354 19.7134 18.1195C19.9971 17.8036 20.387 17.6028 20.8089 17.5553C21.2309 17.5077 21.6556 17.6166 22.0026 17.8615C22.3495 18.1063 22.5945 18.4699 22.6912 18.8834C23.8639 18.0879 25.2311 17.6268 26.6461 17.5497C28.0611 17.4726 29.4703 17.7824 30.7225 18.4458C31.9747 19.1092 33.0226 20.1012 33.7535 21.3152C34.4845 22.5292 34.871 23.9194 34.8714 25.3365ZM16.6693 13.2017C16.6693 13.716 16.5168 14.2188 16.2311 14.6464C15.9453 15.074 15.5392 15.4073 15.0641 15.6041C14.5889 15.8009 14.0661 15.8524 13.5617 15.7521C13.0573 15.6517 12.5939 15.4041 12.2303 15.0404C11.8666 14.6768 11.619 14.2134 11.5186 13.709C11.4183 13.2046 11.4698 12.6818 11.6666 12.2066C11.8634 11.7315 12.1967 11.3254 12.6243 11.0396C13.0519 10.7539 13.5547 10.6014 14.069 10.6014C14.7586 10.6014 15.42 10.8754 15.9077 11.363C16.3953 11.8507 16.6693 12.5121 16.6693 13.2017Z"
                    fill="#1A1A1A"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[-1rem] left-[-4rem] h-[19rem] w-[100vw] border-2 border-foreground lg:-z-10 lg:h-[22rem] lg:w-[52vw]"></div>
    </section>
  );
}
