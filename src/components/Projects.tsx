import { motion } from 'framer-motion';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

type Props = {};

import daegu from 'public/images/projects/daegu.webp';
import nlize from 'public/images/projects/nlize.webp';
import dokdo from 'public/images/projects/dokdo.webp';
import Link from 'next/link';

const projectList = [
    {
        link: 'https://xn--2e0bu9hmpna657do1zdja.kr/',
        img: daegu,
        title: '삼삼한 대구 여행',
        desc: '#Next.js #TypeScript #Emotion #Tailwind \n삼삼한 대구 여행 홍보를 위한 웹사이트 구축 프로젝트로 메인 웹사이트 전체 개발을 담당했습니다.',
    },
    {
        link: 'http://nlize-co.com/index.html',
        img: nlize,
        title: 'Nlize',
        desc: '#HTML #CSS #JavaScript  \nNlize 소개 웹사이트 구축 프로젝트로 메인 웹사이트 전체 개발을 담당했으며, HTML, Css, JavaScript만을 이용해 구현한 프로젝트입니다.',
    },
    {
        link: 'http://dokdomuseum.nahf.or.kr/',
        img: dokdo,
        title: '독도 체험관',
        desc: '#Next.js #TypeScript #Emotion #Antd  \n노후화된 기존 독도 체험관 웹페이지를 리뉴얼하는 프로젝트로 메인 웹사이트 전체 개발을 담당했으며, 퍼블리싱 된 코드를 기반으로 웹 사이트 UI를 리엑트로 재구축하고, NICE API를 이용한 본인인증 예약 기능 등을 구현하였습니다.',
    },
];

export default function Projects({}: Props) {
    return (
        <div className="h-screen relative  flex flex-col text-left md:flex-row m-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

            <div className="relative w-full flex z-20">
                <Swiper spaceBetween={40} slidesPerView={1}>
                    {projectList.map((e, i) => (
                        <SwiperSlide key={e.title}>
                            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                                <Link href={e.link} target="_blank" rel="noopener">
                                    <motion.img
                                        initial={{ y: -100, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 1.2 }}
                                        viewport={{ once: true }}
                                        src={e.img.src}
                                        className="md:mb-0 flex-shrink-0 w-96 h-96 rounded-full md:rounded-lg  object-contain cursor-pointer"
                                    />
                                </Link>
                                <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                                    <h4 className="text-4xl font-semibold text-center">
                                        <span className="underline decoration-[#fb3131]/50">
                                            Project {i + 1} of {projectList.length} :
                                        </span>{' '}
                                        {e.title}
                                    </h4>

                                    <p className="whitespace-pre-wrap">{e.desc}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="w-full absolute top-[30%] bg-[#fb3131]/10 left-0 h-[500px] -skew-y-12" />
        </div>
    );
}
