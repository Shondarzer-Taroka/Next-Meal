'use client'
import Link from 'next/link';
import React from 'react';

const page = () => {
    const handleRegister = async (e) => {
        e.preventDefault()

        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            image: e.target.image.value,
            type:e.target.type.value
        }

        console.log(newUser);

        let resp = await fetch('http://localhost:3000/api/auth/signup/new-user', {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
                'content-type': 'application/json'
            }

        })


        console.log(resp);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="md:hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register</h1>

                </div>
                <div className="my-3 md:my-1 card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleRegister} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="image" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative">
                                <input type='password' name="password" required placeholder="password" className="input input-bordered" />

                                <span className="absolute bottom-[17px] right-[1px]">
                                </span>

                            </div>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className='form-control border'>
                            <label className="label flex gap-2">
                                <span className="label-text">Type:</span>
                                <select name='type' placeholder='user type' className=' w-full'>
                                    <option value={'admin'}>Admin</option>
                                    <option value={'moderator'}>Moderator</option>
                                    <option value={'member'}>Member</option>
                                </select>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default page;