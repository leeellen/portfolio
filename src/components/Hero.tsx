import React from 'react';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { primaryColor } from '@/utils/helper';
import BackgroundCircles from './BackgroundCircles';

import hero from 'public/images/hero.png';

import Link from 'next/link';

export default function Hero() {
    const [text, count] = useTypewriter({
        words: [`Hello, I'm Ellen`, `A-Developer-who-likes-Netflix.tsx`, `<ButLovesToCodeMore/>`],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />

            <Image src={hero} alt="introduce" className="relative rounded-full w-32 h-32 mx-auto object-cover" />

            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Developer</h2>
                <h1 className="text-5xl lg:text-6xl font-semibold  px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor={primaryColor} />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButtons">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButtons">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButtons">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButtons">Projects </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
