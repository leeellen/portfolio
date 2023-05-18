import React from 'react';
import { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { css } from '@emotion/react';

import ExperienceCard from './ExperienceCard';

import woojooin from 'public/images/woojooin.png';
import mayday from 'public/images/mayday.png';

import html from 'public/images/skills/html.png';
import cssIcon from 'public/images/skills/css.png';
import js from 'public/images/skills/js.png';
import ts from 'public/images/skills/ts.png';
import react from 'public/images/skills/react.png';
import next from 'public/images/skills/next.png';
import tailwind from 'public/images/skills/tailwind.png';

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
        title: 'Frontend Developer',
        company: 'MAYDAY Partners',
        skills: [html, cssIcon, ts, react, next, tailwind],
        start: '2022.03',
        end: '',
        role: [
            '[Shakerrr Mall] SNS + 쇼핑몰 플렛폼 프로젝트 메인 사이트 전체 프론트엔드 개발',
            '[독도체험관] 기존의 독도체험관 사이트 리뉴얼 프로젝트 메인 사이트 전체 프론트엔드 개발',
            '[Nlize] Nlize 사이트 개발 프로젝트 메인 사이트 전체 프론트엔드 개발',
            '[삼삼한대구여행] 대구 삼대문화권 사이트 개발 프로젝트 메인 사이트 전체 프론트엔드 개발',
        ],
    },
    {
        icon: woojooin,
        title: 'Frontend Developer',
        company: '우주인 스포츠',
        skills: [js, ts, react, next],
        start: '2020.06',
        end: '2022.02',
        role: [
            '우주인 서비스 웹 버전 프론트엔드 전체 개발',
            '우주인 파트너센터 프론트엔드 개발',
            '재사용성이 떨어지고, 결합도가 높아 유지보수 및 에러 핸들링이 어렵던 우주인 어드민 레거시 코드를 결합도를 낮추고 에러 핸들링이 용이하도록 리팩토링',
            '직관적이지 않은 UI와 불편한 UX를 가졌던 구조를 리팩토링하여 보다 직관적인 UI로 변경하고, UX 향상',
        ],
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

            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory h-[70%]">
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
