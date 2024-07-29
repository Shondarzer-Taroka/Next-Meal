import Meals from "@/Components/NavBar/Meals/Meals";

const page = () => {
    return (
        <div className="p-12">
            <h1 className="text-3xl font-semibold text-red-400">choose your Meals</h1>
            <p>choose meals of you choice by searching</p>
            <Meals></Meals>
        </div>
    );
};

export default page;