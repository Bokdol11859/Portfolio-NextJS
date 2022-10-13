import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  number: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:eric010506@naver.com?subject=${formData.subject}&body=안녕하세요 제 이름은 ${formData.name}입니다. ${formData.message} ${formData.number}로 연락 주세요.`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-4xl px-10 justify-evenly mx-auto items-center overflow-x-hidden">
      <h3 className="absolute ml-6 top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl lg:text-4xl font-semibold text-center">
          <span className="underline underline-offset-4 decoration-[#51abcb]/50">
            커피챗
          </span>{" "}
          좋아합니다.
        </h4>
        <h4 className="text-2xl lg:text-4xl font-semibold text-center !mt-3">
          편하게 연락주세요!
        </h4>
        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#51abcb] h-7 w-7 animate-pulse" />
            <p className="text-xl lg:text-4xl">+82 010-8909-6141</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#51abcb] h-7 w-7 animate-pulse" />
            <p className="text-xl lg:text-4xl">eric010506@naver.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#51abcb] h-7 w-7 animate-pulse" />
            <p className="text-xl lg:text-4xl">대한민국 서초구 잠원동</p>
          </div>
        </div>
        {/* <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto "
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("number")}
              placeholder="Telephone"
              className="contactInput"
              type="tel"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Title"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#51abcb] py-5 px-10 rounded-md text-black font-bold text-lg relative"
          >
            <BellIcon className="absolute h-7 w-7 " />
            <p>띵동</p>
          </button>
        </form> */}
      </div>
    </div>
  );
};

export default ContactMe;
