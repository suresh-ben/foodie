import Image from "next/image";
import React from "react";

export default function FoodApp() {
    return (
        <>
            <div className="flex h-[35rem] bg-white px-30 justify-center items-center">
                <div className="w-1/2 flex flex-col gap-4 py-10">
                    <p className="text-4xl font-semibold">
                        Order Delicious Food
                    </p>
                    <p className="text-4xl font-semibold">
                        Through Your Mobile
                    </p>
                    <p className="text-4xl font-semibold">More Easy Now</p>

                    <p className="mt-5">
                        We came up with mobile application to make your food
                        ordering easy and quick delivery. Our AffameFood app
                        available in play store and app store
                    </p>

                    <div className="flex gap-4 -mt-4 -ml-2">
                        <div className="relative w-[26rem] h-[8rem]">
                            <Image
                                className=""
                                src="/app_downloads.png"
                                alt="our-foods"
                                fill
                            />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center h-[35rem]">
                    <div className="relative h-full aspect-[716/1408] z-20">
                        <Image
                            className="-rotate-[10deg] shadow-xl"
                            src="/phone_view_01.png"
                            alt="our-foods"
                            fill
                        />
                    </div>
                    <div className="relative h-full aspect-[716/1408] -ml-4">
                        <Image
                            className="rotate-[5deg] shadow-xl"
                            src="/phone_view_02.png"
                            alt="our-foods"
                            fill
                        />
                    </div>
                </div>
            </div>
            <div className="p-16 bg-white" />
        </>
    );
}
