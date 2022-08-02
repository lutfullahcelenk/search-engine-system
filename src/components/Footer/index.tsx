//@ts-nocheck
import React from "react";
import laptop from "../../assets/laptop.png";

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

      <iframe
        title="tesodev"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12041.118984277!2d28.8909481!3d41.0191353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1659273691612!5m2!1str!2str"
        className="w-full rounded lg:w-1/4"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Footer;
