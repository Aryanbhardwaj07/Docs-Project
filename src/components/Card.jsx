import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"
function Card({data,reference}) {
  return (    
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragElastic={0.2} dragTransition={{bounceDamping:30,bounceStiffness:200}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
    <FaRegFileLines/>
    <p className='text-sm mt-5 font-semibold leading-tight'>
     {data.desc}    
     </p>
    <div className='footer absolute bottom-0  w-full left-0'>
        <div className='flex items-center justify-between px-8 py-3 mb-5'>
            <h5>{data.filesize}</h5>
            
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose/> : <GoDownload size=".7em" color='#fff'/>}
            
            </span>
        </div>
        <div>
           { data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor==="blue" ? "bg-blue-600 ": "bg-green-600"}  flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            
        </div>
           )}
        </div>
    </div>
</motion.div> 
  )
}

export default Card
