//@ts-nocheck
import React from "react";
//assets
import laptop from "../../assets/laptop.png";
import map from "../../assets/map.png";

const Footer = () => {
  return (
    <div className="flex flex-col px-20 py-12 mt-4 bg-lightBlue lg:flex-row">
      <img src={laptop} alt="laptop" className="w-60" />

      <div className="flex flex-col justify-between w-full py-4 lg:w-1/2 lg:pl-10">
        <div>
          <h3 className="font-semibold text-white">İletişim</h3>
          <p className="w-full text-sm text-white lg:w-2/3 lg:text-base">
            Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi
            D2 Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
          </p>
        </div>

        <p className="w-full text-sm text-white lg:w-2/3 lg:text-base">
          Email: bilgi@tesodev.com
        </p>
      </div>

      <div className="flex-grow">
        <img src={map} alt="map" className="" />
      </div>
    </div>
  );
};

export default Footer;
