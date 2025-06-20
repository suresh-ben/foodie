import Image from "next/image";

export default function Hero() {
    return <div className="w-screen h-screen relative overflow-hidden">
       <div className="absolute top-0 right-0 h-[85vh] sm:h-[90vh] w-[23rem] sm:w-[25rem]">
            <Image 
                src="/hero-side.png"
                alt="hero-side"
                fill
            />
       </div>

       <div className="absolute top-[50%] sm:top-[40%] -translate-y-[50%] -right-[3rem] aspect-square w-[20rem]">
            <Image 
                src="/dots_02.png"
                alt="dots 02"
                fill
            />
       </div>

       <div className="hidden sm:block absolute top-[30%] -translate-y-[50%] -left-[7rem] rotate-[-30deg] aspect-square w-[15rem]">
            <Image 
                src="/dots_01.png"
                alt="dosts 01"
                fill
            />
       </div>

       <div className="absolute -bottom-[10rem] left-[20rem] rotate-[-30deg] aspect-square w-[15rem]">
            <Image 
                src="/dots_01.png"
                alt="side"
                fill
            />
       </div>

       <div className="absolute top-[65%] sm:top-[50%] -translate-y-[50%] right-[4rem] sm:right-[10rem] aspect-square w-[23rem] sm:w-[30rem]">
            <Image 
                src="/dish.png"
                alt="side"
                fill
            />
       </div>

       <div className="absolute z-40 top-[40%] sm:top-[15%] right-[5rem] sm:right-[15rem] aspect-square w-[1.5rem] sm:w-[2rem]">
            <Image 
                src="/fish.png"
                alt="side"
                fill
            />
       </div>

       <div className="absolute top-[80%] right-[5rem] sm:right-[10rem] aspect-square w-[2rem]">
            <Image 
                src="/leaves.png"
                alt="side"
                fill
            />
       </div>

       <div className="absolute top-[77%] sm:top-[70%] right-[23rem] sm:right-[40rem] aspect-square w-[2rem]">
            <Image 
                src="/chicken.png"
                alt="side"
                fill
            />
       </div>

       <div className="hidden sm:block absolute top-[20%] left-[10rem] aspect-square w-[1.5rem]">
            <Image 
                src="/orange.png"
                alt="side"
                fill
            />
       </div>

       <nav className="bg-orange-300 z-[100] sm:bg-transparent fixed flex justify-between items-center h-[7rem] w-full sm:relative z-50 p-10 sm:p-30 sm:py-20">
            <div className="">
                <p className="text-2xl sm:text-3xl font-bold">Affamé</p>
            </div>

            <div className="gap-10 hidden sm:flex">
                <button className="hover:underline">About Us</button>
                <button className="hover:underline">Menu</button>
                <button className="hover:underline">Reviews</button>
                <button className="hover:underline">Blog</button>
                <button className="hover:underline">FAQ</button>
            </div>

            <div className="hidden sm:block">
                <button className="border-orange-400 p-3 w-[10rem] border rounded-full">
                    <p className="text-orange-400">Food Menu</p>
                </button>
            </div>

            <div className="sm:hidden">
                <button className="w-[1.5rem] aspect-square">
                    <img 
                        src="https://img.icons8.com/?size=100&id=8113&format=png&color=000000"
                        className="w-full h-full"
                    />
                </button>
            </div>
       </nav>

       <div className="h-[7rem] block sm:hidden" />

       <div className="relative z-50 p-10 sm:p-30 py-10 sm:py-20 w-[50rem]">
            <p className="text-5xl sm:text-6xl mb-5 font-[400]">Welcome to</p>
            <p className="text-5xl sm:text-6xl mb-5 font-bold">Affamé & Enjoy</p>
            <p className="text-5xl sm:text-6xl mb-5 font-bold">Delicious Food</p>

            <div className="flex gap-10 mt-[30rem] sm:mt-10 mb-20">
                <button className="bg-orange-400 p-3 w-[10rem] border-orange-400 rounded-full">
                    <p className="text-white">Reserve Table</p>
                </button>
                <button className="border-orange-400 p-3 w-[10rem] border rounded-full">
                    <p className="text-orange-400">Order Now</p>
                </button>
            </div>

            <div className="gap-15 hidden sm:flex">
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="relative w-[3rem] h-[3rem]">
                        <Image 
                            src="/delivery.png"
                            alt="Delivery"
                            fill
                        />
                    </div>

                    <p className="font-semibold">Free Delivery</p>
                </div>

                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="relative w-[3rem] h-[3rem]">
                        <Image 
                            src="/time.png"
                            alt="Clock"
                            fill
                        />
                    </div>

                    <p className="font-semibold">Delivery in 30 mins</p>
                </div>
            </div>
       </div>
    </div>;
}
