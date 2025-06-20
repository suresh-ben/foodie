import Image from "next/image";
import React from "react";

export default function Reviews() {
    return (
        <div className="flex bg-white">
            <div className="w-1/2 h-[40rem] relative">
                <div className="absolute left-[7.5rem] bg-red top-0 bottom-0 w-[20rem] -rotate-90">
                    <Image className="" src="/hero-side.png" alt="side" fill />
                </div>

                <div className="absolute top-[37.5%] left-[8rem] -translate-y-[50%] w-[23rem] h-[30rem]">
                    <Image className="" src="/guy.png" alt="side" fill />
                </div>
            </div>
            <div className="w-1/2 relative h-[40rem] items-center flex">
                <div className="absolute top-[50%] -right-[15rem] -translate-y-[50%] w-[25rem] h-[25rem]">
                    <Image className="" src="/dots_01.png" alt="side" fill />
                </div>

                <div className="w-[30rem] relative">
                    <div className="absolute w-[5rem] h-[5rem] -top-[2.5rem] -left-[5rem]">
                        <Image
                            className=""
                            src={"/quotes.png"}
                            alt="quotes"
                            fill
                        />
                    </div>
                    <p className="text-4xl font-semibold">
                        What Are The Cusumers Saying About Us
                    </p>

                    <p className="mt-10 font-semibold">David Salsa</p>
                    <p className="text-sm">
                        Park Hill, New York, United States
                    </p>
                    <div className="flex gap-1">
                        <img
                            className="w-4 h-4"
                            src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                            alt="star"
                        />
                        <img
                            className="w-4 h-4"
                            src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                            alt="star"
                        />
                        <img
                            className="w-4 h-4"
                            src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                            alt="star"
                        />
                        <img
                            className="w-4 h-4"
                            src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                            alt="star"
                        />
                        <img
                            className="w-4 h-4"
                            src="https://img.icons8.com/?size=100&id=tAfqdu2AVpjT&format=png&color=FFDA1C"
                            alt="star"
                        />
                    </div>

                    <p className="mt-10">
                        "Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Quos, natus. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quos, natus. Lorem ipsum
                        dolor sit amet consectetur adipisicing elit. Quos,
                        natus."
                    </p>

                    <div className="mt-10 top-[39rem] sm:top-[2rem] sm:right-[2rem] right-[50%] sm:translate-x-0 translate-x-[50%] flex gap-8">
                        <div className="relative w-[3rem] aspect-square bg-white rounded-full p-1 shadow-lg shadow-orange-200">
                            <img
                                className="w-full h-full p-2 rotate-90"
                                src="https://img.icons8.com/?size=100&id=43830&format=png&color=000000"
                                alt="Arrow"
                            />
                        </div>

                        <div className="relative w-[3rem] aspect-square bg-white rounded-full p-1 shadow-lg shadow-orange-200">
                            <img
                                className="w-full h-full p-2 -rotate-90"
                                src="https://img.icons8.com/?size=100&id=43830&format=png&color=000000"
                                alt="Arrow"
                            />
                        </div>
                    </div>

                    <div className="flex mt-10 ml-4">
                        {[
                            "/person_01.jpeg",
                            "/person_02.jpeg",
                            "/person_03.jpg",
                            "/person_04.jpeg",
                            "/person_05.jpg",
                            "/person_06.jpg",
                        ].map((item, index) => {
                            return (
                                <div key={index} className="relative w-[3rem] aspect-square bg-black rounded-full -ml-4 border-2 border-white overflow-hidden">
                                    <Image
                                        className="object-cover"
                                        src={item}
                                        alt="person"
                                        fill
                                    />
                                </div>
                            );
                        })}
                        <div className="relative w-[3rem] aspect-square bg-orange-400 flex justify-center items-center rounded-full -ml-4 border-2 border-white">
                            <p className="text-white text-4xl">+</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
