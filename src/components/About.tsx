import React from 'react';
import { motion } from 'framer-motion';

import second from 'public/images/about.png';
type Props = {};

export default function About({}: Props) {
    return (
        <div className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

            <motion.img
                src={second.src}
                alt="about"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
            />
        </div>
    );
}
