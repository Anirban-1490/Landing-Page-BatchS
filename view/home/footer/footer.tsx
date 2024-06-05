import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonMain } from "@/components/button/button-main";
import { MailFilled, PhoneFilled } from "@ant-design/icons";

const footerContent = [
  {
    heading: "links",
    subLinks: [
      { label: "home", url: "/" },
      { label: "about us", url: "/" },
      { label: "booking", url: "/" },
      { label: "blog", url: "/" },
    ],
  },
  {
    heading: "legal",
    subLinks: [
      { label: "terms of use", url: "/" },
      { label: "privacy policy", url: "/" },
      { label: "cookie policy", url: "/" },
    ],
  },
  {
    heading: "product",
    subLinks: [
      { label: "take tour", url: "/" },
      { label: "live chat", url: "/" },
      { label: "reviews", url: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="">
      <div className="flex  min-h-[20rem] max-lg:flex-col">
        <div className="basis-[20%] flex flex-col gap-4 max-lg:flex-row max-lg:items-center max-lg:order-2 max-lg:my-5">
          <div className="relative w-[7rem] h-8">
            <Image
              src={"/images/logo-main.png"}
              className=""
              fill
              alt="logo-main"
            />
          </div>
          <p className=" text-base">
            <MailFilled className=" text-primary-700" /> example@mail.com
          </p>
          <p className=" text-base">
            <PhoneFilled className=" text-primary-700" /> +1234567
          </p>
        </div>
        <ul className="flex gap-[7%] capitalize flex-1 max-[845px]:flex-wrap max-[845px]:justify-between">
          {footerContent.map((content, index) => {
            return (
              <li key={index}>
                <div className=" text-3xl mb-5">{content.heading}</div>

                <ul key={index} className="flex flex-col gap-4 ">
                  {content.subLinks.map((link, index) => {
                    return (
                      <li key={index}>
                        <Link href={link.url}>{link.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
          <li className="max-[845px]:mt-5">
            <div className=" text-3xl mb-5">newsletter</div>
            <ul className="flex flex-col gap-4 ">
              <li>
                <p className="mb-4">stay up to date</p>
                <div className=" flex items-center">
                  <input
                    type="text"
                    placeholder="Enter email"
                    className="h-[3rem] border border-primary-700/30 pl-4 focus-visible:border-primary-700 focus-visible:outline-none"
                  />
                  <ButtonMain className=" capitalize ml-[-1rem] w-[8rem] hover:bg-primary-700 hover:!text-white">
                    subscribe
                  </ButtonMain>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="capitalize ">
        <div className=" bg-gradient-grey h-[1px]"></div>
        <p className="py-10 text-center">
          copyright@{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
