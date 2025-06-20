import React from "react";
import Image from "next/image";

export default function OurPopularDishes() {
    return (
        <div className="bg-white sm:p-40 sm:px-30 relative">
            <div className="rounded-4xl p-20 bg-[#fef3e2] relative overflow-hidden">
                <div className="absolute -top-[2rem] -left-[2rem] h-[12rem] w-[12rem]">
                    <Image
                        className="-rotate-90 object-contain"
                        src="/our-foods-leaves.png"
                        alt="side"
                        fill
                    />
                </div>

                <div className="absolute -bottom-[1rem] right-0 h-[12rem] w-[12rem]">
                    <Image
                        className=" object-cover"
                        src="/food-crumbs.png"
                        alt="side"
                        fill
                    />
                </div>

                <div className="absolute top-[39rem] sm:top-[2rem] sm:right-[2rem] right-[50%] sm:translate-x-0 translate-x-[50%] flex gap-8">
                    <div className="relative w-[3rem] aspect-square bg-white rounded-full p-1 shadow-md">
                        <img
                            className="w-full h-full p-2 rotate-90"
                            src="https://img.icons8.com/?size=100&id=43830&format=png&color=000000"
                            alt="Arrow"
                        />
                    </div>

                    <div className="relative w-[3rem] aspect-square bg-white rounded-full p-1 shadow-md">
                        <img
                            className="w-full h-full p-2 -rotate-90"
                            src="https://img.icons8.com/?size=100&id=43830&format=png&color=000000"
                            alt="Arrow"
                        />
                    </div>
                </div>

                <p className="text-center text-4xl font-bold">
                    Our Popular Dishes
                </p>

                <div className="mt-10 mb-10 sm:mb-0 flex gap-20 justify-center items-center relative z-50">
                    {[
                        {
                            img: "/chicken_green_salad.png",
                            heading: "Chicken Green Salad",
                            calories: "120 kcal",
                            protein: "20g",
                            stars: "",
                            reviews: "",
                        },
                        {
                            img: "/roti_panner.png",
                            heading: "Roti Panner",
                            calories: "150 kcal",
                            protein: "15g",
                            stars: "",
                            reviews: "",
                        },
                        {
                            img: "/chicken_salad.png",
                            heading: "Chicken Salad",
                            calories: "120 kcal",
                            protein: "25g",
                            stars: "",
                            reviews: "",
                        },
                    ].map((data, ind) => {
                        return (
                            <div
                                key={ind}
                                className="bg-[#ffffffea] rounded-4xl w-[25rem] sm:w-[18rem] flex flex-col justify-center items-center p-10"
                            >
                                <div className="relative w-[10rem] aspect-square">
                                    <Image
                                        className=""
                                        src={data.img}
                                        alt={data.img}
                                        fill
                                    />
                                </div>

                                <p className="mt-4 text-center text-xl font-semibold">
                                    {data.heading}
                                </p>
                                <div className="mt-1 text-sm flex gap-4 mb-4">
                                    <p>{data.calories}</p>
                                    <p>{data.protein}</p>
                                </div>

                                <button className="border-orange-400 p-[0.6rem] w-[10rem] border rounded-full">
                                    <p className="text-orange-400">Order Now</p>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
