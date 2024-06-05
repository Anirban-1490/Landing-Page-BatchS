import { ButtonMain } from "@/components/button/button-main";
import React from "react";

export function DownloadMain() {
  return (
    <section className=" h-[32rem] px-[4rem] rounded-md  bg-download-banner bg-no-repeat bg-cover flex items-center">
      <div className="  max-w-[50rem]">
        <h2 className=" text-5xl text-white capitalize ">
          ready to get started?
        </h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga debitis
          ab vel dignissimos officia eligendi, aperiam beatae veritatis totam
          rem?
        </p>
        <ButtonMain className=" capitalize !text-black  bg-white mt-10 hover:bg-primary-700 hover:!text-white">
          download now
        </ButtonMain>
      </div>
    </section>
  );
}
