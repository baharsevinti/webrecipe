import React from 'react'
import PriceCards from './PriceCards'
import { pricesItems } from '../ constants'
const Abone = () => {
    return (
        <div id='pricing' className='mt-[4%] flex flex-col justify-center items-center bg-white'>
            <span className='font-bold text-3xl mt-8 '>Abonelik Al</span>
            <h1 className='text-xl mt-10 text-gray-600'>
                Choose a membership plan to get started.
            </h1>

            {/* Cards */}
            <div className='flex flex-wrap justify-center gap-10 max-w-7xl'>
                {pricesItems?.map((item, index) => (
                    <PriceCards key={index} period={item.period} price={item.price} description={item.description} pricePeriod={item.pricePeriod} />
                ))}
            </div>

        </div>
    )
}

export default Abone;