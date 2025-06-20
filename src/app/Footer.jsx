import React from "react";

export default function Footer() {
    return (
        <div className="pb-6">
            <div className="flex justify-between p-20">
                <div className="flex flex-col">
                    <p className="text-2xl font-semibold mb-4">Affamé</p>

                    <p className="text-sm ">A moment of deliciousness</p>
                    <p className="text-sm ">with Affamé food.</p>

                    <p className="mt-4 font-semibold">
                        Follow our social media
                    </p>

                    <div className="flex gap-2 mt-2">
                        <img
                            className="w-6 h-6"
                            src="https://img.icons8.com/?size=100&id=xmBM0gQ596LO&format=png&color=FC9335"
                            alt="insta"
                        />
                        <img
                            className="w-6 h-6"
                            src="https://img.icons8.com/?size=100&id=AtwWR4cOFS34&format=png&color=FC9335"
                            alt="insta"
                        />
                        <img
                            className="w-6 h-6"
                            src="https://img.icons8.com/?size=100&id=de4vjQ6J061l&format=png&color=FC9335"
                            alt="insta"
                        />
                        <img
                            className="w-6 h-6"
                            src="https://img.icons8.com/?size=100&id=soupkpLfTkZi&format=png&color=FC9335"
                            alt="insta"
                        />
                        <img
                            className="w-6 h-6"
                            src="https://img.icons8.com/?size=100&id=37325&format=png&color=FC9335"
                            alt="insta"
                        />
                    </div>
                </div>

                <div className="flex gap-[7rem]">
                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-xl text-[#FC9335]">
                            About Us
                        </p>
                        <p>About Us</p>
                        <p>Most Searched</p>
                        <p>Blog</p>
                        <p>Contact</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-xl text-[#FC9335]">
                            Company
                        </p>
                        <p>Service</p>
                        <p>Support</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="font-semibold text-xl text-[#FC9335]">
                            Get in Touch
                        </p>
                        <p>+91 1234567890</p>
                        <p>Rd4sA@example.com</p>
                        <p className="w-[28rem]">
                            Lorem ipsum adipisicing elit. Sequi, accusantium
                            magnam quis optio quaerat, perspiciatis tempora
                            nihil aperiam natus.
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-center text-sm -mt-6">
                Copyright @2025 All Rights Reserved
            </p>
        </div>
    );
}
