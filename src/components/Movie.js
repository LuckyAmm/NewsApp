import React from 'react'


// this should be in app.js
/* {list.map((element) => {
          return (
            <Movie title={element.Title}
              key ={element.imdbID}
            img={element.Poster}
            year={element.Year}
            />
            )
        })}  */

export default function Movie(props) {
  return (
    <div className="w-[200px] transition-all cursor-pointer p-2 border-2 min-w-[190px] border-sky-300 bg-[#dae5eb] hover:w-[190px]" >
      <img src={props.img} alt="" className="w-full max-w-[260px] max-h-[260px] " />
      <p className="font-bold text-center">{props.title}</p>
      <p className="font-bold">Year : {props.year}</p>
    </div>
  );
}



