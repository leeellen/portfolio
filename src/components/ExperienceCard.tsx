import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Experiencetype } from './Experience';

type Props = {
    experienceData: Experiencetype;
};

export default function ExperienceCard({ experienceData }: Props) {
    return (
        <article className=" h-full flex flex-col rounded-lg items-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-auto scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#fb3131]/80 ">
            <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src={experienceData.icon.src}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center mb-5"
            />

            <div className="w-full px-0 md:px-10">
                <h4 className="text-4xl font-light ">{experienceData.title}</h4>
                <p className="font-bold text-2xl mt-1">{experienceData.company}</p>
                <div className="flex space-x-2 my-2">
                    {experienceData.skills.map((e) => (
                        <Image src={e} key={e.src} alt="skill" className="w-10 h-10" />
                    ))}
                </div>
                <p className="uppercase py-5 text-gray-300">
                    {experienceData.start} ~ {experienceData.end}
                </p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {experienceData.role.map((e) => (
                        <li key={e}>{e}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}
