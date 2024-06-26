import React from 'react';
import { useNavigate } from 'react-router-dom';

const PriceCards = ({ period, price, description, pricePeriod }) => {
    const navigate = useNavigate();

    const navigateAboneRecipe = () => {
        navigate("/getPayment", { state: { price } }); // price değerini route state'i olarak aktar
    };
    
    return (
        <div className="mt-10 p-4 rounded-xl border-2 border-blue-300 shadow-md text-left w-[432px] h-[228px] ">
            <h1 className="text-xl font-bold text-[#111827]">{period}</h1>
            <h2 className="text-sm text-[#52525b] my-4">{description}</h2>

            <h1 className="text-4xl font-bold text-[#111827] mb-4">${price} <span className="text-sm font-semibold text-[#52525b]">/ {pricePeriod}</span></h1>

            <button onClick={navigateAboneRecipe} className='bg-black text-white font-bold w-28 h-12 rounded-lg hover:opacity-80 duration-300'>
                Abone Ol
            </button>
        </div>
    );
};

export default PriceCards;
