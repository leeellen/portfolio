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
                <p className="text-base leading-7">
                    누구나 이해가 쉽고 잘 읽히는 코드의 작성을 추구하는 프론트엔드 개발자 이은지입니다.
                    <br /> 조금 더 저를 소개하자면 세가지를 두려워하지 않고 즐기는 개발자로 말씀드리고 싶습니다.
                    <br />
                    <span className="text-lg font-semibold underline decoration-[#fb3131]/50">
                        &quot;새로운 기술 + 새로운 도전 + 모르는 것을 창피해하지 않고 알아내는 것&quot;
                    </span>
                    <br />
                    프로젝트 경험으로는 약 2년의 기간 동안 서비스 어드민을 처음부터 구축한 경험이 있으며, 쇼핑몰, 이벤트
                    플렛폼 등 다양한 프로젝트 진행 경험이 있습니다.
                    <br />
                    최근에는 웹 환경에서 3D 환경을 구축하는 것에 흥미가 생겨 Babylon.js를 공부하고 있습니다.
                </p>
            </div>
        </motion.div>
    );
}
