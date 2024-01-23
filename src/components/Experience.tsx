import React from 'react';
import { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

import ExperienceCard from './ExperienceCard';

import woojooin from 'public/images/woojooin.png';
import mayday from 'public/images/mayday.png';

import html from 'public/images/skills/html.png';
import cssIcon from 'public/images/skills/css.png';
import js from 'public/images/skills/js.png';
import ts from 'public/images/skills/ts.png';
import react from 'public/images/skills/react.png';
import next from 'public/images/skills/nextjs-white.png';
import tailwind from 'public/images/skills/tailwind.png';
import { css } from '@emotion/react';

export type Experiencetype = {
    icon: StaticImageData;
    title: string;
    company: string;
    skills: StaticImageData[];
    start: string;
    end: string;
    role: string[];
};

const experienceList = [
    {
        icon: mayday,
        title: 'Software Developer',
        company: 'MAYDAY Partners',
        skills: [html, cssIcon, ts, react, next, tailwind],
        start: '2022.03',
        end: '2023.12',
        role: [
            '[Metaverse Village] Metaverse Village project front-end development',
            '[KOVO] KOVO Korea Volleyball Federation project front-end development',
            '[WEVENT] Online conference platform WEVENT project front-end development',
            '[Samsamhan Daegu Travel] Daegu Three Cultural Zone Site Development Project Front-End Development',
            '[Nlize] Nlize site development project front-end development',
            '[Dokdo Experience Center] Front-end development for the existing Dokdo Experience Center site renewal project',
            '[Shakerrr Mall] SNS + Shopping Mall Platform Project Main Site Front-End Development',
        ],
    },
    {
        icon: woojooin,
        title: 'Software Developer',
        company: 'WOOJOOIN Sports',
        skills: [js, ts, react, next],
        start: '2020.06',
        end: '2022.02',
        role: ['WOOJOOIN service web version front-end development', 'WOOJOOIN Partner Center front-end development'],
    },
];

type Props = {};

export default function Experience({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="max-w-7xl h-screen flex relative overflow-hidden flex-col text-left md:flex-row px-10 justify-evenly mx-auto items-center "
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

            <div
                className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory h-[70%]"
                // @ts-ignore
                css={css`
                    .box {
                        -ms-overflow-style: none; /* IE and Edge */
                        scrollbar-width: none; /* Firefox */
                    }
                    &::-webkit-scrollbar {
                        display: none; /* Chrome, Safari, Opera*/
                    }
                `}
            >
                <Swiper
                    spaceBetween={40}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 1.5,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {experienceList.map((e) => (
                        <SwiperSlide key={e.company}>
                            <ExperienceCard experienceData={e} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </motion.div>
    );
}
