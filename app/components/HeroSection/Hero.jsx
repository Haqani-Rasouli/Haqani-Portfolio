import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
const Hero = () => {
    return (
        <div className='wrapper flex h-screen flex-col-reverse md:flex-row'>
            <div className="left text-center flex flex-1 flex-col gap-2 justify-center ">
                <h1 className='font-light text-5xl'>  Hello </h1>
                <h1 className='font-bold font-title text-4xl'>I'm <span className='text-pink-600 font-sans font-extrabold'>Haqani</span> Rasouli</h1>
                <p>Passionate full-stack web and Java developer, UI/UX designer, and Mathematics graduate from Kabul University. Proficient in Photoshop and Illustrator, with experience as a mathematics teacher. Fluent in English, Turkish, Persian, Pashto, and basic Spanish. Let’s collaborate to create something extraordinary!</p>
                <div className='justify-center flex flex-col sm:flex-row items-center gap-6 mt-5'>
                <button className='bg-pink-700 rounded-xl shadow-xl shadow-gray-800 p-2 flex gap-2 w-40  items-center justify-center  mr-3'> <FaFilePdf size = {24} className='mr-2'/>Download CV</button>
                <button className='bg-gray-900 rounded-xl shadow-xl shadow-gray-800 p-2 flex gap-2 w-40 text-white mr-3 text-center'> <FaGithub size = {24} /> Github Account</button>
                </div>
            </div>
            <div className='right flex flex-1 justify-center items-center w-full'>
                <div className="bg-red-500 rounded-full w-1200 h-120 -z-10 "></div>
                <img className='max-w-full h-full object-contain' src="/images/Haqani.png" alt="Haqani" />
            </div>
        </div>
    );
}

export default Hero;