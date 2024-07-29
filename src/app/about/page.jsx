import React from 'react';

const getTime=async()=>{
    const res= await fetch('https://next-meal-five.vercel.app/time',{cache:'no-cache'})
    const data=await res.json()
    return data.currentTime
}

const page = async() => {

  let time=await getTime()
    return (
        <div>
            <h1>About Page</h1>
            <h1>Time:{time}</h1>
        </div>
    );
};

export default page;