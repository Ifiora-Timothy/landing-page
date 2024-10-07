import { CircleCheck, MoveLeft } from "lucide-react";
import React from "react";
import Image from "next/image";
import { AppleLogo, GoogleLogo } from "../login/page";
import { AccMessage } from "./AuthMessage";
import Link from "next/link";
import { cn } from "@/lib/utils";
const MobileAuth = ({ children }) => {
  return (
    <div className="w-full h-[735px] pt-[23px] bg-[#333747] flex-col justify-start items-center gap-1.5 inline-flex">
      <div className="self-stretch px-[23px] justify-between items-center  inline-flex">
        <Link href="/">
          <MoveLeft size={24} className="text-white" />
        </Link>
        <div className="text-center text-white text-sm font-medium font-['Inter'] leading-tight">
          Need some help?
        </div>
      </div>
      <div className="self-stretch h-[682px] px-6 py-9 bg-[#070322] rounded-tl-[20px] rounded-tr-[20px] flex-col justify-start items-center gap-7 flex">
        <Image
          src="/general/logo.png"
          width={113}
          height={155}
          className="w-[65px]"
          alt="logo"
        />
        {children}
        <div className="h-5 relative flex w-full">
          <div className="w-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-full"
              viewBox="0 0 327 2"
              fill="none"
            >
              <path d="M0 1H327" stroke="#515978" />
            </svg>
          </div>
          <div className="text-center shrink-0 w-fit px-2 py-1 bg-[#282a37]  text-[#858dab] text-xs font-medium font-['Inter'] leading-tight">
            or continue with
          </div>
          <div className="w-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-full"
              viewBox="0 0 327 2"
              fill="none"
            >
              <path d="M0 1H327" stroke="#515978" />
            </svg>
          </div>
        </div>
        <div className="self-stretch justify-center items-center gap-[13px] inline-flex">
          <div className="w-12 bg-opacity-20 place-content-center place-items-center flex h-12 relative bg-white rounded-[27.27px]">
            <GoogleLogo />
          </div>
          <div className="w-12 bg-opacity-20 place-content-center place-items-center flex h-12 relative bg-white rounded-[27.27px]">
            <AppleLogo />
          </div>
          <div className="w-12 h-12 relative  bg-opacity-20 bg-white rounded-[27.27px] border border-[#515978]">
            <SolLogo className="p-2" />
          </div>
        </div>
        <AccMessage />
      </div>
    </div>
  );
};

export default MobileAuth;

export const PersonIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
    >
      <circle
        cx="12.0134"
        cy="6.78512"
        r="3.59128"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M4.77808 16.5286C4.77808 14.1661 8.01114 12.251 11.9993 12.251M4.77808 16.5286C4.77808 18.3635 6.72839 19.9285 9.46803 20.536M4.77808 16.5286C4.77808 18.115 6.23585 19.4996 8.40115 20.2382C9.46049 20.5995 10.6892 20.8062 11.9993 20.8062C13.3095 20.8062 14.5382 20.5995 15.5975 20.2382C17.7628 19.4996 19.2206 18.115 19.2206 16.5286M4.77808 16.5286C4.77808 14.6937 6.72839 13.1287 9.46803 12.5212M11.9993 12.251C13.3095 12.251 14.5382 12.4577 15.5975 12.819M11.9993 12.251C15.9875 12.251 19.2206 14.1661 19.2206 16.5286M11.9993 12.251C10.6892 12.251 9.46049 12.4577 8.40115 12.819M19.2206 16.5286C19.2206 18.3635 17.2703 19.9285 14.5306 20.536M19.2206 16.5286C19.2206 14.6937 17.2703 13.1287 14.5306 12.5212"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export const PasswordIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.8327 10.4735V6.72849C16.8327 4.05985 14.6694 1.89648 12.0007 1.89648V1.89648C9.33206 1.89648 7.1687 4.05985 7.1687 6.72849V10.4735"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3.67114"
        y="10.4731"
        width="16.6593"
        height="11.6304"
        rx="5"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="12.0001"
        cy="15.5203"
        rx="1.38606"
        ry="1.38606"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0325 16.9067L12.0325 18.7899"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SolLogo = ({ className }) => {
  return (
    <svg
      id="Layer_1"
      x="0px"
      y="0px"
      viewBox="0 0 397.7 311.7"
      style={{ enableBackground: "new 0 0 397.7 311.7" }}
    >
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="360.8791"
        y1="351.4553"
        x2="141.213"
        y2="-69.2936"
        gradientTransform="matrix(1 0 0 -1 0 314)"
      >
        <stop offset="0" style={{ stopColor: "#00FFA3" }} />
        <stop offset="1" style={{ stopcolor: "#DC1FFF" }} />
      </linearGradient>
      <path
        class="st0"
        fill="url(#SVGID_1_)"
        d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
	c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
      />
      <linearGradient
        id="SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1="264.8291"
        y1="401.6014"
        x2="45.163"
        y2="-19.1475"
        gradientTransform="matrix(1 0 0 -1 0 314)"
      >
        <stop offset="0" style={{ stopColor: "#00FFA3" }} />
        <stop offset="1" style={{ stopColor: "#DC1FFF" }} />
      </linearGradient>
      <path
        class="st1"
        fill="url(#SVGID_2_)"
        d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
	c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
      />
      <linearGradient
        id="SVGID_3_"
        gradientUnits="userSpaceOnUse"
        x1="312.5484"
        y1="376.688"
        x2="92.8822"
        y2="-44.061"
        gradientTransform="matrix(1 0 0 -1 0 314)"
      >
        <stop offset="0" style={{ stopColor: "#00FFA3" }} S />
        <stop offset="1" style={{ stopColor: "#DC1FFF" }} />
      </linearGradient>
      <path
        class="st2"
        fill="url(#SVGID_3_)"
        d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4
	c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
      />
    </svg>
  );
};
