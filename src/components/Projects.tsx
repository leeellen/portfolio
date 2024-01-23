import { motion } from 'framer-motion';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

type Props = {};

import metaverse from 'public/images/projects/metaverse.webp';
import kovo from 'public/images/projects/kovo.webp';
import daegu from 'public/images/projects/daegu.webp';
import nlize from 'public/images/projects/nlize.webp';
import dokdo from 'public/images/projects/dokdo.webp';
import Link from 'next/link';
import { css } from '@emotion/react';

const projectList = [
    {
        link: 'https://www.k-metavillage.com/',
        img: metaverse,
        title: 'METAVERSE VILLAGE',
        stack: '#Next.js #TypeScript #Emotion #Tailwind',
        desc: 'As a website construction project to promote METAVERSE VILLAGE, I was responsible for developing the main website.',
    },
    {
        link: 'https://kovo.co.kr/',
        img: kovo,
        title: 'KOVO',
        stack: '#React #Next.js #TypeScript #Emotion #Tailwind',
        desc: 'Technological Upgrade: Replaced outdated languages and libraries with the latest technologies, ensuring a more sustainable and maintainable foundation for the KOVO website. \n\n Enhanced User Experience: Redesigned the website with a focus on user experience (UX), employing modern design principles to provide visitors with a more intuitive and enjoyable browsing experience. \n\n Admin Function Separation: Recognizing the need for efficient management, we separated the admin function and established a dedicated admin site. This strategic move significantly streamlined website management.',
    },
    {
        link: 'https://xn--2e0bu9hmpna657do1zdja.kr/',
        img: daegu,
        title: 'Samsamhan Daegu Travel',
        stack: '#Next.js #TypeScript #Emotion #Tailwind',
        desc: 'As a website construction project to promote travel to Daegu, I was responsible for developing the entire main website.',
    },
    {
        link: 'http://nlize-co.com/index.html',
        img: nlize,
        title: 'Nlize',
        stack: '#HTML #CSS #JavaScript',

        desc: 'Introduction to Nlize This is a website construction project in which I was responsible for the entire development of the main website, and was implemented using only HTML, CSS, and JavaScript.',
    },
    {
        link: 'http://dokdomuseum.nahf.or.kr/',
        img: dokdo,
        title: 'Dokdo Experience Center',
        stack: '#Next.js #TypeScript #Emotion #Antd  ',
        desc: 'As a project to renew the aging existing Dokdo Experience Center webpage, I was responsible for developing the entire main website. Based on the published code, I rebuilt the website UI with React and implemented an identity authentication reservation function using the NICE API.',
    },
];

export default function Projects({}: Props) {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
            return ReactDOMServer.renderToStaticMarkup(<div className={className}>{index}</div>);
        },
        dynamicBullets: true,
    };

    return (
        <div
            className="h-screen relative flex flex-col text-left md:flex-row m-w-full justify-evenly mx-auto items-center z-0 overflow-hidden"
            //@ts-ignore
            css={css`
                .swiper-pagination {
                    width: 100% !important;
                    display: flex;
                    justify-content: space-between;
                    bottom: 0 !important;
                }
                .swiper-pagination-bullet {
                    width: 100% !important;
                    left: 0 !important;
                    height: 10px !important;
                    border-radius: 0 !important;
                    margin: 0 !important;
                    transform: none !important;
                    background: #fb3131;
                }
                .swiper-wrapper {
                    width: 100vw !important;
                }
            `}
        >
            <h3 className="absolute top-24 text-center uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                pagination={pagination}
                navigation={false}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                {projectList.map((e, i) => (
                    <SwiperSlide key={e.link}>
                        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                            <Link href={e.link} target="_blank" rel="noopener">
                                <motion.img
                                    initial={{ y: -100, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 1.2 }}
                                    viewport={{ once: true }}
                                    src={e.img.src}
                                    className="md:mb-0 flex-shrink-0 w-96 h-96 object-contain cursor-pointer"
                                />
                            </Link>
                            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                                <h4 className="text-4xl font-semibold text-center">
                                    <span className="underline decoration-[#fb3131]/50">
                                        Project {i + 1} of {projectList.length} :
                                    </span>{' '}
                                    {e.title}
                                </h4>

                                <div>
                                    <p className="whitespace-pre-wrap">{e.desc}</p>
                                    <p className="whitespace-pre-wrap font-semibold mt-2">{e.stack}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <div className="w-full absolute top-[30%] bg-[#fb3131]/10 left-0 h-[500px] -skew-y-12" /> */}
        </div>
    );
}
