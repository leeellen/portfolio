import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';

export default function Header() {
    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{ duration: 1.5 }}
                className="flex flex-row items-center "
            >
                <SocialIcon
                    url="https://github.com/leeellen"
                    network="github"
                    fgColor="gray"
                    bgColor="transparent"
                    target="_blank"
                />
                <SocialIcon
                    url="https://rick-ford.tistory.com"
                    network="medium"
                    fgColor="gray"
                    bgColor="transparent"
                    target="_blank"
                />
            </motion.div>

            <Link href="#contactme">
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-row items-center text-gray-300 cursor-pointer"
                >
                    <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />

                    <p className="uppercase hidden sm:inline-flex text-sm text-gray-400">Get In Touch</p>
                </motion.div>
            </Link>
        </header>
    );
}
