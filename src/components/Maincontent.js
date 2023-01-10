import React from "react";
//BsGlobe2
//RiTwitterFill
//FaDiscord
import { BsGlobe2 } from "react-icons/bs";
import { RiTwitterFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";

import ownerslogo from "../images/owners.svg";
import image1 from "../images/characters/1.png";
import image2 from "../images/characters/2.png";
import image3 from "../images/characters/3.png";
import image4 from "../images/characters/4.png";
import image5 from "../images/characters/5.png";

import video from "../images/video1.mp4";

const Maincontent = () => {
  return (
    <>
      <div className="flex items-center pt-24 justify-center">
        <div className="rounded overflow-hidden">
          <video width="1280" height="720" controls>
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex w-[1280px] justify-between mt-4">
          <div>
            <div className="pt-2 px-6 h-[40px] text-pink-600 outline outline-1 outline-pink-600 rounded">
              RUDE ROBOT STUDIOS
            </div>
          </div>
          <div>
            <button className="px-6 h-[40px] rounded bg-pink-600 text-white hover:brightness-50">
              EXPLORE COLLECTION
            </button>
            <button className="ml-4 px-6 h-[40px] rounded bg-pink-600 text-white hover:brightness-50">
              PLAY NOW
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center text-white">
        <div className="w-[1280px] justify-between mt-4">
          <div className="grid grid-cols-2">
            <div className="w-[910px]">
              <div className="text-4xl font-bold">Nyan Heroes</div>
              <div className="flex flex-rows space-x-2 mt-4">
                <div className="rounded-full bg-violet-950 outline outline-1 outline-violet-800/[.4] text-lg px-4 py-1">
                  Mech
                </div>
                <div className="rounded-full bg-violet-950 outline outline-1 outline-violet-800/[.4] text-lg px-4 py-1">
                  Battle Royale
                </div>
                <div className="mt-[9px] pl-3">
                  <BsGlobe2 size={19} />
                </div>
                <div className="mt-[7px]">
                  <RiTwitterFill size={24} />
                </div>
                <div className="mt-[7px]">
                  <FaDiscord size={23} />
                </div>
              </div>
              <div className="mt-6">
                Nyan Heroes is a F2P Play-And-Earn Battle Royale built on the
                Solana blockchain. Our studio is focused on building a AAA
                gaming experience backed by a fair, sustainable in-game economy
                that puts the players experience and needs first.
              </div>
              <div className="text-lg underline decoration-pink-600 underline-offset-4 mt-6">
                About Nyan Heros
              </div>
              <div className="mt-4">
                In Nyan Heroes, you play as a Nyan cat piloting a Guardian Mech
                set in a futuristic world where elements of fantasy and science
                fiction intertwine. Match up against others in a PvP style
                battle royale tournament, or team up with a group of friends and
                fight enemies in our PvE open world experience. By simply
                playing the game, players will automatically participate in our
                player-based economy by collecting tokens as rewards for
                defeating enemies, winning battles, or completing quests. We are
                dedicated to building a sustainable rewards system that
                substantially and equitably benefits players and developers -
                not just the studio.
              </div>
            </div>
            <div className="w-[320px] justify-self-end mt-3 mr-5 rounded bg-violet-950 outline outline-1 outline-violet-800/[.4] px-5 py-3 pb-5">
              <div className="text-2xl font-bold text-center">Nyan Heros</div>
              <div className="text-sm text-center text-pink-600 mt-1">
                Owners Group
              </div>
              <div className="flex justify-center rounded overflow-hidden mt-1">
                <img className="" src={ownerslogo} alt="Logo" />
              </div>

              <div>
                <div className="text-sm text-center mt-4">
                  Ownership benefits include: private discord access, revenue
                  share, airdrops + more.
                </div>
                <div className="flex justify-center">
                  <button className="px-6 h-[40px] rounded bg-pink-600 text-white hover:brightness-50 mt-4">
                    EXPLORE COLLECTION
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex w-[1380px] justify-between mt-9 text-white ">
          <div className="flex space-x-2">
            <div className="text-2xl font-bold pr-4">Assets: Characters</div>
            <div className="rounded-full px-4 py-[6px] bg-pink-600">
              Recently Listed
            </div>
            <div className="rounded-full px-4 py-[6px] bg-violet-800/[.15]">
              Floor Price
            </div>
          </div>
          <div>
            <button className="px-6 h-[40px] rounded bg-violet-950 outline outline-1 outline-violet-800/[.4]">
              See All
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center text-white justify-center space-x-6 mt-6">
        <div className="rounded overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] p-1">
          <img className="" src={image1} alt="Logo" width="200" />
          <div className="text-md">Nyan Hero #997</div>
          <div className="text-sm text-pink-600">Nyan Heros</div>
          <div className="font-bold">4.25 SOL</div>
        </div>
        <div className="rounded overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] p-1">
          <img className="" src={image2} alt="Logo" width="200" />
          <div className="text-md">Nyan Hero #886</div>
          <div className="text-sm text-pink-600">Nyan Heros</div>
          <div className="font-bold">69.69 SOL</div>
        </div>
        <div className="rounded overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] p-1">
          <img className="" src={image3} alt="Logo" width="200" />
          <div className="text-md">Nyan Hero #666</div>
          <div className="text-sm text-pink-600">Nyan Heros</div>
          <div className="font-bold">4.20 SOL</div>
        </div>
        <div className="rounded overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] p-1">
          <img className="" src={image4} alt="Logo" width="200" />
          <div className="text-md">Nyan Hero #1677</div>
          <div className="text-sm text-pink-600">Nyan Heros</div>
          <div className="font-bold">5.00 SOL</div>
        </div>
        <div className="rounded overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] p-1">
          <img className="" src={image5} alt="Logo" width="200" />
          <div className="text-md">Nyan Hero #005</div>
          <div className="text-sm text-pink-600">Nyan Heros</div>
          <div className="font-bold">7.50 SOL</div>
        </div>
        <div className="rounded overflow-hidden text-center space-y-1 bg-violet-950 outline outline-1 outline-violet-800/[.4] p-1">
          <img className="" src={image1} alt="Logo" width="200" />
          <div className="text-md">Nyan Hero #997</div>
          <div className="text-sm text-pink-600">Nyan Heros</div>
          <div className="font-bold">4.25 SOL</div>
        </div>
      </div>
      <div className="h-16">-</div>
    </>
  );
};

export default Maincontent;
