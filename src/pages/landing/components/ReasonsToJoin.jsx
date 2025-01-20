import React from "react";
import television from "../../../assets/television.svg";
import profile from "../../../assets/profile.svg";
import telescope from "../../../assets/telescope.svg";
import download from "../../../assets/download.svg";
import Reason from "./Reason";

const ReasonsToJoin = () => {
    const items = [
        {
            title: "Watch on your TV",
            desc: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and other devices",
            img: television,
        },
        {
            title: "Download shows to watch offline",
            desc: "Save your favorites and always have something to watch.",
            img: download,
        },
        {
            title: "Watch anywhere",
            desc: "Unlimited streaming on your phone, tablet, laptop, and TV.",
            img: telescope,
        },
        {
            title: "Create profiles for kids",
            desc: "Let kids explore adventures with their favorite characters in a dedicated space—free with your membership.",
            img: profile,
        },
    ];

    return (
        <div className="px-4 md:px-8 lg:px-16 flex flex-col items-start bg-black">
          <p className="text-white font-bol d text-xl md:text-2xl lg:text-3xl mb-8">
            More Reasons to Join
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {items.map((item, index) => (
              <Reason key={index} item={item} />
            ))}
          </div>
        </div>
      );
      
      
};

export default ReasonsToJoin;
