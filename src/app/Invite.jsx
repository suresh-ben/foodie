import Image from "next/image";
import React from "react";

export default function Invite() {
    return (
        <div className="p-30 pt-20 bg-white">
            <div className="bg-[#fef3e2] p-20 py-20 rounded-4xl relative overflow-hidden">
                <div className="absolute bottom-[10%] left-[4rem] aspect-square w-[1.5rem]">
                    <Image src="/leaves.png" alt="side" fill />
                </div>

                <div className="absolute top-[10%] left-[12rem] aspect-square w-[1.5rem]">
                    <Image src="/chicken.png" alt="side" fill />
                </div>

                <div className="absolute top-[0] -bottom-[2rem] right-[2rem] w-[19rem]">
                    <Image src="/condiments.png" alt="side" fill />
                </div>

                <p className="text-6xl font-semibold">Are You Ready To Enjoy</p>
                <p className="text-6xl font-semibold mt-6">
                    Your Favorite Food
                </p>

                <div className="flex gap-10 mt-10">
                    <button className="bg-orange-400 p-3 w-[10rem] border-orange-400 rounded-full">
                        <p className="text-white">Order Now</p>
                    </button>
                    <button className="border-orange-400 p-3 w-[10rem] border rounded-full">
                        <p className="text-orange-400">Reserve Table</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
