import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { FeatureCard } from '../components/FeatureCard';
import { ProgramCard } from '../components/ProgramCard';
import { featuresData } from '../data/features';
import { programsData } from '../data/programs';

import Blob1 from '../../js/assets/blob_1.svg';
import Blob2 from '../../js/assets/blob_2.svg';
import Blob3 from '../../js/assets/blob_3.svg';
import Blob4 from '../../js/assets/blob_4.svg';

import BottomBackgroundBlob from '../../js/assets/bottom_blob_bg.svg';
import BottomForegroundBlob from '../../js/assets/bottom_blob_fg.svg';
import BottomSubForegroundBlob from '../../js/assets/bottom_blob_fg_sub.svg';

import LeftBackgroundBlob from '../../js/assets/left_blob_bg.svg';
import LeftForegroundBlob from '../../js/assets/left_blog_fg.svg';
import RoboCodeLogo from '../../js/assets/rcc_logo.svg';

import RightBackgroundBlob from '../../js/assets/right_blob_bg.svg';
import RightForegroundBlob from '../../js/assets/right_blob_fg.svg';

export default function Welcome() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin=""
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&family=Molle&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>

            {/* Navigation Bar */}
            <motion.nav className="fixed top-0 z-50 w-full bg-transparent">
                {/* Desktop Navigation */}
                <motion.div className="hidden md:flex w-full justify-center">
                    <motion.div className="flex items-center gap-10 border-b border-white/20 pt-6 pb-5">
                        <motion.img src={RoboCodeLogo} className="mr-20 h-12" />
                        <motion.a>Product</motion.a>
                        <motion.a>Pricing</motion.a>
                        <motion.a>Resources</motion.a>
                        <motion.a>Company</motion.a>
                        <motion.a>Contact</motion.a>
                        <motion.div className="ml-20">
                            <motion.a>Login</motion.a>
                            <motion.a className="ml-4 rounded-full bg-red-500 px-3 py-2">
                                Get Started
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Mobile Navigation */}
                <motion.div className="md:hidden flex items-center justify-between px-4 py-4 border-b border-white/20">
                    <motion.img src={RoboCodeLogo} className="h-8" />
                    <motion.button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </motion.button>
                </motion.div>

                {/* Mobile Menu Dropdown */}
                <motion.div 
                    className={`md:hidden bg-blue-950/95 backdrop-blur-sm ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -20 }}
                    transition={{ duration: 0.2 }}
                >
                    <motion.div className="flex flex-col space-y-4 px-4 py-6">
                        <motion.a className="text-white py-2">Product</motion.a>
                        <motion.a className="text-white py-2">Pricing</motion.a>
                        <motion.a className="text-white py-2">Resources</motion.a>
                        <motion.a className="text-white py-2">Company</motion.a>
                        <motion.a className="text-white py-2">Contact</motion.a>
                        <motion.a className="text-white py-2">Login</motion.a>
                        <motion.a className="rounded-full bg-red-500 px-4 py-2 text-white text-center">
                            Get Started
                        </motion.a>
                    </motion.div>
                </motion.div>
            </motion.nav>

            {/* Whole top part */}
            <motion.main className="min-h-[100vh] min-w-screen bg-blue-950 flex items-center">
                <motion.div className="w-full px-6 sm:px-8 md:px-16 lg:px-32 xl:px-48 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[52px] leading-tight font-bold text-white text-center sm:text-left"
                        style={{ fontFamily: 'Fredoka' }}
                    >
                        Building Future
                        <br /> Innovators Through
                        <br /> Robotics & Coding
                    </motion.h1>
                    <motion.p className="my-6 sm:my-8 md:my-10 text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed text-center sm:text-left max-w-2xl">
                        Robo Code Club empowers students to explore technology,
                        solve problems, and create real-world solutions
                        through hands-on robotics and coding programs.
                    </motion.p>

                    <motion.div className="flex justify-center sm:justify-start">
                        <motion.button
                            className="rounded-full bg-yellow-400 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-blue-950 transition-all duration-100 hover:bg-yellow-300 text-base sm:text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                        >
                            Learn More
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
                    {Blobs()}
                </motion.div>
            </motion.main>

            {/* Whole bottom part */}
            <motion.div className="relative -bottom-0 min-h-screen overflow-visible bg-blue-950 pt-16">
                <motion.div className="absolute top-0 right-0 z-0 sm:max-h-32 max-h-20 w-screen transform overflow-hidden select-none">
                    <motion.img
                        className="ml-auto"
                        src={BottomBackgroundBlob}
                        animate={{
                            y: [0, 8, 0],
                            x: [0, 12, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'easeInOut',
                            delay: 1,
                        }}
                    />
                </motion.div>

                <motion.div className="absolute top-0 left-0 z-1 sm:max-h-32 max-h-20 w-screen transform overflow-hidden select-none">
                    <motion.img
                        className="w-full"
                        src={BottomSubForegroundBlob}
                        animate={{
                            y: [0, 10, 0],
                            x: [0, -8, 0],
                        }}
                        transition={{
                            duration: 5.5,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'easeInOut',
                            delay: 0.3,
                        }}
                    />
                </motion.div>

                <motion.div className="absolute top-0 left-0 z-2 sm:max-h-32 max-h-20 w-full transform overflow-hidden select-none">
                    <motion.img
                        className="w-full"
                        src={BottomForegroundBlob}
                        animate={{
                            y: [0, 6, 0],
                        }}
                        transition={{
                            duration: 7,
                            repeat: Infinity,
                            repeatType: 'mirror',
                            ease: 'easeInOut',
                            delay: 0.8,
                        }}
                    />
                </motion.div>

                {/* White part */}
                <motion.div className="bg-white p-4 sm:p-8 md:p-16 lg:p-24">
                    <motion.div className="flex flex-col lg:flex-row w-full gap-8 lg:gap-24">
                        <motion.div className="w-full lg:w-1/2">
                            <motion.p
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-bold text-blue-950"
                                style={{ fontFamily: 'Fredoka' }}
                            >
                                We keep learning
                                <br />
                                Fun and Enjoyable
                            </motion.p>
                            <motion.p className="mt-4 lg:mt-6 text-blue-950 text-sm sm:text-base">
                                At Robo Code Club, we make robotics and coding
                                fun, practical, and accessible for students.
                                Through hands-on activities, projects, and
                                challenges, we teach learners how to:
                            </motion.p>
                        </motion.div>
                        <motion.div className="w-full lg:w-1/2">
                            <motion.ul>
                                {featuresData.map((feature, index) => (
                                    <FeatureCard
                                        key={index}
                                        title={feature.title}
                                        description={feature.description}
                                        icon={feature.icon}
                                        isFirst={index === 0}
                                        isLast={index === featuresData.length - 1}
                                    />
                                ))}
                            </motion.ul>
                        </motion.div>
                    </motion.div>

                    {/* Programs Section */}
                    <motion.div className="mt-8 sm:mt-12 md:mt-16 flex w-full flex-col items-center justify-center">
                        <motion.p className="rounded-full bg-red-100 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-red-700">
                            PROGRAMS
                        </motion.p>
                        <motion.h1
                            className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 text-center px-4"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Explore Programs we Offer
                        </motion.h1>
                        <motion.p className="mt-3 sm:mt-4 text-center text-gray-400 text-sm sm:text-base px-4 max-w-2xl">
                            We offer robotics and coding programs designed for
                            different levels of learners. Each program is hands-on, engaging, and
                            builds real-world skills.
                        </motion.p>

                        <motion.div className="mt-6 sm:mt-8 flex flex-col sm:flex-row w-full max-w-4xl px-4 gap-4">
                            {programsData.map((program, index) => (
                                <ProgramCard
                                    key={index}
                                    title={program.title}
                                    description={program.description}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
}

function Blobs() {
    return (
        <>
            <motion.img
                src={LeftForegroundBlob}
                alt="RoboCode Foreground Blob"
                className="pointer-events-none absolute left-0 z-1 select-none hidden sm:block"
                animate={{
                    y: [0, -10, 0],
                    x: [0, -15, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                }}
            />
            <motion.img
                src={LeftBackgroundBlob}
                alt="RoboCode Background Blob"
                className="pointer-events-none absolute left-0 z-0 select-none hidden sm:block"
                animate={{
                    y: [0, 15, 0],
                    x: [0, -10, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: 0.5,
                }}
            />
            <motion.img
                src={RightBackgroundBlob}
                alt="RoboCode Background Blob"
                className="pointer-events-none absolute right-0 z-0 select-none hidden sm:block"
                animate={{
                    y: [0, -12, 0],
                    x: [0, 10, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: 0.2,
                }}
            />
            <motion.img
                src={RightForegroundBlob}
                alt="RoboCode Foreground Blob"
                className="pointer-events-none absolute right-0 z-1 select-none hidden sm:block"
                animate={{
                    y: [0, 18, 0],
                    x: [0, 15, 0],
                }}
                transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                    delay: 0.8,
                }}
            />

            <motion.img
                src={Blob4}
                className="absolute bottom-16 left-4 sm:left-16 md:left-32 lg:left-96 w-8 sm:w-12 md:w-16 lg:w-auto"
                animate={{
                    rotate: [0, 0, 0, 0, 0, 0, 0, 0, 360, 180],
                    x: [0, 3, -2, 4, 0, 2, -1, 3, -2, 0],
                    y: [0, -2, 3, -1, 0, 2, -3, 1, -1, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />
            <motion.img
                src={Blob3}
                className="absolute bottom-32 sm:bottom-48 md:bottom-64 left-2 sm:left-8 md:left-16 lg:left-32 w-6 sm:w-10 md:w-12 lg:w-auto"
                animate={{
                    rotate: [0, 0, 0, 0, 0, 0, 0, 180, 360, 180],
                    x: [0, -3, 2, -2, 0, 1, -2, 3, -1, 0],
                    y: [0, 4, -3, 2, 0, -2, 3, -2, 1, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2.5,
                }}
            />
            <motion.img
                src={Blob2}
                className="absolute top-32 sm:top-40 md:top-48 right-4 sm:right-16 md:right-32 lg:right-96 w-8 sm:w-12 md:w-16 lg:w-auto"
                animate={{
                    rotate: [0, 0, 0, 0, 0, 0, 0, 540, 180, 360],
                    x: [0, 4, -3, 2, 0, -3, 4, -2, 1, 0],
                    y: [0, -4, 5, -2, 0, 3, -4, 2, -1, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 5,
                }}
            />
            <motion.img
                src={Blob1}
                className="absolute right-4 sm:right-12 md:right-24 lg:right-48 bottom-24 sm:bottom-32 md:bottom-48 w-6 sm:w-10 md:w-12 lg:w-auto"
                animate={{
                    rotate: [0, 0, 0, 0, 0, 0, 0, 360, 180, 720],
                    x: [0, -5, 3, -2, 0, 3, -4, 2, -2, 0],
                    y: [0, 3, -4, 2, 0, -3, 4, -1, 2, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 7.5,
                }}
            />
        </>
    );
}
