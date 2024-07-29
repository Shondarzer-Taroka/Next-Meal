'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Meals = () => {
    let [search, setSearch] = useState('a')
    let [meals, setMeals] = useState([])
    let [error, setError] = useState('')

    const loadData = async () => {

        try {
            let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
            let data = await res.json()
            console.log(data);
            setMeals(data.meals)
            setError('')
        } catch (error) {
            setError('No data found')
            // console.log(error);
        }
    }


    useEffect(() => {
        loadData()
    }, [search])

    function getSearchValue(e) {
        let searchValue = e.target.value
        setSearch(searchValue)
        // console.log(searchValue);
    }
    return (
        <div>
            <div className="mt-12">
                <input onChange={getSearchValue} className="p-4 outline-none border-transparent text-slate-900" type="text" placeholder="search item..." name="" id="" />
                <button className="p-4 bg-red-400">search</button>
            </div>
            {error && error}


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {meals.map(meal => <div className='border-red-500 border p-4' key={meal.id}>
                     <Image src={meal.strMealThumb} alt={meal.strMeal} width={200} height={100}></Image>
                    <h1>{meal.strMeal}</h1>
                    <h1>{meal.strCategory}</h1>
                    <h1>{meal.strArea}</h1>
                    <p>{meal.strInstructions}</p>
                </div>)}

            </div>
        </div>
    );
};

export default Meals;