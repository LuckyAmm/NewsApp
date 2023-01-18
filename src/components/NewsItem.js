import React from 'react'

export default function NewsItem({ title, urlToImage, desc ,url}) {
    
  return (
    <div className="w-[350px] h-[480px] bg-gray-200 p-3 flex flex-col justify-between items-center rounded shadow-md shadow-gray-500">
      <img
        draggable='false'
        className="rounded shadow-sm h-[180px] w-[320px] "
        src={urlToImage}
        alt={title}
      />
      <h3 className="font-bold text-xl">
        {title.length > 80 ? title.substring(0, 80) + "..." : title}
      </h3>
      <p className="">
        {desc.length > 250 ? desc.substring(0, 250) + "..." : desc}
      </p>
          <a href={url}  rel="noopener noreferrer"
 target='_blank' className="bg-black px-4 py-1 text-white rounded hover:bg-gray-900 active:bg-black">
        Read More
      </a>
    </div>
  );
}
