import React from 'react';
import { motion } from 'framer-motion';

import html from 'public/images/skills/html.png';
import cssIcon from 'public/images/skills/css.png';
import js from 'public/images/skills/js.png';
import ts from 'public/images/skills/ts.png';
import react from 'public/images/skills/react.png';
import next from 'public/images/skills/next.png';
import next_w from 'public/images/skills/nextjs-white.png';
import tailwind from 'public/images/skills/tailwind.png';
import antd from 'public/images/skills/antd.png';

import Skill from './Skill';

const skillList = [
    { directionLeft: true, icon: html, percent: '80%' },
    { directionLeft: true, icon: cssIcon, percent: '70%' },
    { directionLeft: true, icon: js, percent: '70%' },
    { directionLeft: true, icon: ts, percent: '50%' },
    { directionLeft: false, icon: react, percent: '65%' },
    { directionLeft: false, icon: next_w, percent: '60%' },
    { directionLeft: false, icon: tailwind, percent: '30%' },
    { directionLeft: false, icon: antd, percent: '80%' },
];
type Props = {};

export default function Skills({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="min-h-screen relative max-w-7xl flex flex-col text-center md:text-left xl:flex-row xl:px-10 justify-center xl:space-y-0 mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
            <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
                Hover over a skill for currency proficiency
            </h3>

            <div className="grid grid-cols-4 gap-5">
                {skillList.map((e) => (
                    <Skill skill={e} key={e.icon.src} />
                ))}
            </div>
        </motion.div>
    );
}
