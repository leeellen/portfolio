import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';

import hero from 'public/images/hero.png';

export default function Home() {
    return (
        <div
            className="scroll-smooth bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#fb3131]/80 
        "
        >
            <Head>
                <title>Ellen</title>
            </Head>

            <Header />

            <section id="hero" className="snap-start">
                <Hero />
            </section>

            <section id="about" className="snap-center">
                <About />
            </section>

            <section id="experience" className="snap-center">
                <Experience />
            </section>

            <section id="skills" className="snap-start">
                <Skills />
            </section>

            <section id="projects" className="snap-start">
                <Projects />
            </section>

            <section id="contactme" className="snap-center">
                <ContactMe />
            </section>

            <Link href="#hero">
                <footer className="sticky bottom-5 w-full cursor-pointer">
                    <div className="flex justify-center items-center">
                        <div className="w-11 h-11 bg-[#fb3131] rounded-full filter grayscale hover:grayscale-0 cursor-pointer flex justify-center items-center">
                            <Image src={hero} className="h-10 w-10 " alt="go to top button" />
                        </div>
                    </div>
                </footer>
            </Link>
        </div>
    );
}
