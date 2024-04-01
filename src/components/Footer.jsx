import React from "react";

const Footer = ({ linkTextColors, copyrightTextColor }) => {
  return (
    <>
      <div className=" flex justify-between items-center p-4 h-[120px]">
        {/* Proje İsmi  */}
        <div className="flex items-center">
          <h2 className="text-white text-3xl p-4 ">
            Yemek<span className="font-bold text-white"> Bizim</span>
          </h2>
        </div>

        {/* Yönlendirme Linkleri */}
        <div
          className={`text-white flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-9`}
        >
          <button
            className={`text-base hover:underline`}
            style={{ color: linkTextColors }}
          >
            Destek
          </button>
          <button
            className={`text-base hover:underline`}
            style={{ color: linkTextColors }}
          >
            Gizlilik Politikası
          </button>
          <button
            className={`text-base hover:underline`}
            style={{ color: linkTextColors }}
          >
            Kullanım Koşulları
          </button>
        </div>

        {/* Copyright */}
        <div>
          <div className="flex items-center justify-center">
            <p
              className={`text-white text-base mr-40`}
              style={{ color: copyrightTextColor }}
            >
              Bahar Sevinti
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
