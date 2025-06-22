import React from "react";

// Importing JSON data
import protectedSites from "../components/ActivitiesData/ProtectedSites.json";

import VikramshilaRuins from "../assets/ProtectedSites/VikramshilaRuins.jpg";
import ColganjRockCut from "../assets/ProtectedSites/ColganjRockCut.jpg";
import Bateshwar_sthan_caves from "../assets/ProtectedSites/Bateshwar_sthan_caves.jpg";
import SilentPages from "../assets/ProtectedSites/SilentPages.jpeg";
import AncientMound from "../assets/ProtectedSites/AncientMound.avif";
import PachrukhiGarh from "../assets/ProtectedSites/PachrukhiGarh.jpeg";
import Chanki_garh_West_Champaran from "../assets/ProtectedSites/Chanki_garh_West_Champaran.jpg";
import AshokaPillarAtLauriy from "../assets/ProtectedSites/Ashoka Pillar at Lauriya Nandangarh.webp";
import VedicBurialMounds from "../assets/ProtectedSites/VedicBurialMounds.jpg";
import KesariyaStupa from "../assets/ProtectedSites/KesariyaStupa.jpg";
import AshokaPillarLauriya from "../assets/ProtectedSites/AshokaPillarLauriya.webp";
import AshokanPillarsRampurva from "../assets/ProtectedSites/AshokanPillarsRampurva.jpg";
import CrowHillSculptures from "../assets/ProtectedSites/CrowHillSculptures.jpg";
import AncientBuddhaStatueRuins from "../assets/ProtectedSites/AncientBuddhaStatueRuins.jpg";
import ShivTempleKonch from "../assets/ProtectedSites/ShivTempleKonch.jpg";
import SujataKutirStupa from "../assets/ProtectedSites/SujataKutirStupa.jpeg";
import BuddhaOfGhejan  from "../assets/ProtectedSites/BuddhaOfGhejan.jpg";
import LomasRishiCave from "../assets/ProtectedSites/LomasRishiCave.webp";
import SudamaCave from "../assets/ProtectedSites/SudamaCave.jpg";
import KaranChauparCave from "../assets/ProtectedSites/KaranChauparCave.jpg";
import LomasRishiCaveBarabarHills from "../assets/ProtectedSites/LomasRishiCaveBarabarHills.jpg";
import VadathikaCave from "../assets/ProtectedSites/VadathikaCave.jpg";
import VapiyakaCaves from "../assets/ProtectedSites/VapiyakaCaves.jpg";
import ViswaJhopaRockCutCave from "../assets/ProtectedSites/ViswaJhopaRockCutCave.jpeg";
import TombOfMalikIbrahimBayu from "../assets/ProtectedSites/TombOfMalikIbrahimBayu.jpeg";

const imageMap = {
  VikramshilaRuins,
  ColganjRockCut,
  Bateshwar_sthan_caves,
  SilentPages,
  AncientMound,
  PachrukhiGarh,
  Chanki_garh_West_Champaran,
  AshokaPillarAtLauriy,
  VedicBurialMounds,
  KesariyaStupa,
  AshokaPillarLauriya,
  AshokanPillarsRampurva,
  CrowHillSculptures,
  AncientBuddhaStatueRuins,
  ShivTempleKonch,
  SujataKutirStupa,
  BuddhaOfGhejan,
  LomasRishiCave,
  SudamaCave,
  KaranChauparCave,
  LomasRishiCaveBarabarHills,
  VadathikaCave,
  VapiyakaCaves,
  ViswaJhopaRockCutCave,
  TombOfMalikIbrahimBayu,

};

const ProtectedSites = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-700 pt-10 pb-4 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center text-yellow-300 mb-10 mt-14">
        Protected Heritage Sites of Bihar
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {protectedSites.map((site) => (
          <div
            key={site.id}
            className="bg-gradient-to-br from-slate-800 to-slate-700 border border-gray-700 rounded-2xl shadow hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-500 ease-in-out p-4 cursor-pointer"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={imageMap[site.image]}
                alt={site.name}
                className="w-full h-48 object-cover rounded-xl transform hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
            <h3 className="text-xl font-semibold text-yellow-400 mb-2 mt-4">
              {site.name}
            </h3>
            <p className="text-gray-300">📍 {site.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtectedSites;
