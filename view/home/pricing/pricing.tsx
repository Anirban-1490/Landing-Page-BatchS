import { ButtonMain } from "@/components/button/button-main";
import { CheckCircleOutlined } from "@ant-design/icons";
import React from "react";
interface IPricingProps<T> {
  plans: {
    id: number;
    plan: T;
    price: T;
    features: T[];
    type: T;
  }[];
}
export function Pricing({ plans }: IPricingProps<string>) {
  return (
    <section>
      <div className="max-w-[70%] mx-auto">
        <h4 className=" mt-12 text-md text-center uppercase tracking-widest text-primary-700">
          Pricing
        </h4>
        <h2 className="text-4xl text-center capitalize font-extrabold mb-6 mx-auto">
          see our best deal
        </h2>
        <p className=" text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam
          quae doloremque dicta sapiente corrupti sint, saepe sunt ratione?
          Atque exercitationem reprehenderit sapiente quis blanditiis officia
          consequuntur sequi dignissimos porro.
        </p>
      </div>
      <div className="my-10 flex justify-center gap-10">
        {plans.map((plan) => {
          const planStyle =
            plan.id == 1
              ? { borderColor: "border-black", bgColor: "bg-black" }
              : {
                  borderColor: "border-primary-700",
                  bgColor: "bg-primary-700",
                };

          return (
            <div
              key={plan.id}
              className={`w-[19rem] overflow-hidden border ${planStyle.borderColor} rounded-2xl`}
            >
              <div className={`h-[9rem] py-4 px-8 ${planStyle.bgColor}`}>
                <h4 className=" text-md text-white flex gap-3 items-center">
                  {plan.plan}{" "}
                  {plan.plan === "Basic" && (
                    <span className=" text-sm capitalize text-primary-700 px-4 py-1 border border-primary-700 rounded-xl">
                      popular
                    </span>
                  )}
                </h4>
                <h3 className=" text-xl capitalize text-white">
                  <span className=" text-4xl">{plan.price}</span> /
                  {plan.type == "monthly" ? "month" : ""}
                </h3>
              </div>
              <div className=" h-[20rem] p-8 flex flex-col gap-10">
                <ul className=" flex flex-col gap-5 flex-1">
                  {plan.features.map((feature, index) => {
                    return (
                      <li key={index} className=" flex gap-3 items-center">
                        <CheckCircleOutlined />
                        {feature}
                      </li>
                    );
                  })}
                </ul>
                <ButtonMain
                  className={`${planStyle.bgColor} capitalize`}
                  style={{ width: "100%" }}
                >
                  purchase plan
                </ButtonMain>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
