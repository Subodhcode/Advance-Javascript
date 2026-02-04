import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { FaqList } from '../Data/FaqData'//array 10 items --object
import { useState } from 'react'


export default function Faq() {
    let [currentId,setCurrentID]=useState(FaqList[0].id)
    return (
        <section className='bg-amber-100 py-10'>
            <h2 className='text-center text-4xl font-bold mb-10'>Faq</h2>


            {FaqList.map((obj, index) => {
                return (
                    <div className='max-w-[1320px] mx-auto border-2 mb-2'>
                        <h3 onClick={()=>setCurrentID(obj.id==currentId ? 0 : obj.id)} className='bg-orange-600 text-white text-2xl p-3 relative cursor-pointer'>
                            {obj.question}
                            {
                            obj.id==currentId ? 
                             <FaMinus className='absolute right-2 top-2 '/>
                             :
                            <FaPlus className='absolute right-2 top-2' />
                             }
                          
                        </h3>
                        <div className={` p-3 ${obj.id==currentId ?'block':'hidden'}
                        
                        `}>
                           {obj.answer}
                        </div>
                    </div>

                )
            })}


            {currentId}
           


            {/* 
            <div className='max-w-[1320px] mx-auto border-2 mb-2'>
                <h3 className='bg-orange-600 text-white text-2xl p-3 relative'>What is React Js?
                    <FaPlus className='absolute right-2 top-2' />
                </h3>
                <div className='p-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore, rerum non quibusdam suscipit rem quia dolorem, tempore quidem, voluptates in inventore animi natus. In.
                </div>
            </div>


            <div className='max-w-[1320px] mx-auto border-2 mb-2'>
                <h3 className='bg-orange-600 text-white text-2xl p-3 relative'>What is React Js?
                    <FaPlus className='absolute right-2 top-2' />
                </h3>
                <div className='p-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore, rerum non quibusdam suscipit rem quia dolorem, tempore quidem, voluptates in inventore animi natus. In.
                </div>
            </div> */}
        </section>
    )
}
