import React from 'react'

export default function Employee({userId,id,title,body}) {
  return (
    <div className='w-fit h-fit'>   
          <h4>Name : {userId}</h4>
          <h4>Email : { id}</h4>
          <h3>DOB : {title}</h3>
          <p>Salary : {body}</p>
    </div>
  )
}
