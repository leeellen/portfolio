import React from 'react';
import { motion } from 'framer-motion';

import second from 'public/images/about.png';
type Props = {};

export default function About({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

            <motion.img
                src={second.src}
                alt="about"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
            />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a <span className="underline decoration-[#fb3131]/50">little</span> background
                </h4>
                <div className="md:text-xl leading-7 text-base flex flex-col gap-3">
                    <p>
                        I am Eunji Lee, a front-end developer who pursues writing code that is easy for anyone to
                        understand and read.
                    </p>
                    <p>
                        If I were to introduce myself a little more, I would say that I am a developer who enjoys three
                        things without being afraid.
                    </p>

                    <p className="md:text-3xl font-semibold underline decoration-[#fb3131]/50 text-xl">
                        &quot; New skills + new challenges + finding out without being embarrassed by what you don’t
                        know &quot;
                    </p>
                    <p>
                        As for project experience, I have experience building a service administrator from scratch for
                        about 3 years, and I have experience working in shopping malls and events. I have experience
                        working on various projects including platforms.
                    </p>
                    <p>
                        Recently, I have become interested in building 3D environments in a web environment, so I am
                        studying Babylon.js.
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
