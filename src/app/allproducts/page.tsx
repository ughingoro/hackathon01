import React from 'react'
import FetchData from '../../../sanity/lib/FetchData'
import { urlForImage } from '../../../sanity/lib/image';

export default async function page() {
    const data = await FetchData()
    console.log("data", data);
    return (
        <div className='flex gap-5 max-w-6xl m-auto text-black' >
            {data.map((product: any, index: number) =>
                <div className='w-1/4 border border-black p-2'>
                    <img src={urlForImage(product.image).url()} alt="" className='w-full h-60 object-cover object-top' />
                    <h1 className='text-2xl font-bold mt-2 '>{product.title}</h1>
                    <h1>{product.descritpion}</h1>
                    <h1 className='text-lg font-semibold' >{product.category}</h1>
                    <h1 className='text-xl font-semibold' >{product.price}</h1>
                </div>

            )}
        </div>
    )
}

