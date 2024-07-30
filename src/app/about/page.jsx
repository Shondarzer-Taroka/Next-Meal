import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const getTime = async () => {
    const res = await fetch('https://next-meal-five.vercel.app/time', { cache: 'no-cache' })
    const data = await res.json()
    return data.currentTime
}

const page = async () => {
    const session = await getServerSession(authOptions)
    console.log(session);
    let time = await getTime()

    return (
        <div>
            <h1>About Page</h1>
            <h1>Time:{time}</h1>
        </div>
    );
};

export default page;