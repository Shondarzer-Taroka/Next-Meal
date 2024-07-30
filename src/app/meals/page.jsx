import Meals from "@/Components/NavBar/Meals/Meals";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async() => {
    const session = await getServerSession(authOptions)
    console.log({session});
    return (
        <div className="p-12">
            <h1 className="text-3xl font-semibold text-red-400">choose your Meals</h1>
            <p>choose meals of you choice by searching</p>
            <Meals></Meals>
        </div>
    );
};

export default page;