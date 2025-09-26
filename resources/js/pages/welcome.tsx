import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

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

import Target from '../../js/assets/target.svg';

export default function Welcome() {
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
            <motion.nav className="fixed top-0 z-50 flex w-full justify-center bg-transparent">
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
            </motion.nav>

            {/* Whole top part */}
            <motion.main className="min-h-[max(600px,100vh+50px)] min-w-screen bg-blue-950">
                <motion.div className="px-48 pt-36">
                    <motion.h1
                        className="text-[52px] leading-tight font-bold"
                        style={{ fontFamily: 'Fredoka' }}
                    >
                        Building Future
                        <br /> Innovators Through
                        <br /> Robotics & Coding
                    </motion.h1>
                    <motion.p className="my-8 text-gray-500">
                        Robo Code Club empowers students to explore technology,
                        <br /> solve problems, and create real-world solutions
                        through
                        <br /> hands-on robotics and coding programs.
                    </motion.p>

                    <motion.button
                        className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-blue-950 transition-all duration-100 hover:bg-yellow-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                    >
                        Learn More
                    </motion.button>
                </motion.div>

                <motion.div className="pointer-events-none absolute top-0 left-0 h-full w-full">
                    {Blobs()}
                </motion.div>
            </motion.main>

            {/* Whole bottom part */}
            <motion.div className="relative -bottom-0 min-h-screen overflow-visible bg-blue-950 pt-16">
                <motion.div className="absolute top-0 right-0 z-0 max-h-32 w-screen transform overflow-hidden select-none">
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

                <motion.div className="absolute top-0 left-0 z-1 max-h-32 w-screen transform overflow-hidden select-none">
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

                <motion.div className="absolute top-0 left-0 z-2 max-h-32 w-full transform overflow-hidden select-none">
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
                <motion.div className="bg-white p-24">
                    <motion.div className="flex w-full gap-24">
                        <motion.div className="w-1/2">
                            <motion.p
                                className="text-6xl leading-tight font-bold text-blue-950"
                                style={{ fontFamily: 'Fredoka' }}
                            >
                                We keep learning
                                <br />
                                Fun and Enjoyable
                            </motion.p>
                            <motion.p className="mt-6 text-blue-950">
                                At Robo Code Club, we make robotics and coding
                                fun, practical, and accessible for students.
                                Through hands-on activities, projects, and
                                challenges, we teach learners how to:
                            </motion.p>
                        </motion.div>
                        <motion.div className="w-1/2">
                            <motion.ul>
                                {/* Build and Program Robots */}
                                <motion.li>
                                    <motion.div className="flex list-none items-center gap-5">
                                        <motion.div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-300 shadow">
                                            <motion.img
                                                className="w-4"
                                                src={Target}
                                            />
                                        </motion.div>
                                        <motion.p className="text-2xl font-semibold text-blue-950">
                                            Build and Program Robots
                                        </motion.p>
                                    </motion.div>
                                    <motion.p className="mb-4 ml-15 text-gray-500">
                                        Learn to bring machines to life step by
                                        step.
                                    </motion.p>
                                </motion.li>

                                <hr className="h-[1px] border-none bg-black/10" />

                                {/* Think Like Innovators */}
                                <motion.li className="mt-6">
                                    <motion.div className="flex list-none items-center gap-5">
                                        <motion.div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-300 shadow">
                                            <motion.img
                                                className="w-4"
                                                src={Target}
                                            />
                                        </motion.div>
                                        <motion.p className="text-2xl font-semibold text-blue-950">
                                            Think Like Innvators
                                        </motion.p>
                                    </motion.div>
                                    <motion.p className="mb-4 ml-15 text-gray-400">
                                        Develop problem-solving, critical
                                        thinking, and teamwork skills.
                                    </motion.p>
                                </motion.li>

                                <hr className="h-[1px] border-none bg-black/10" />

                                {/* Apply Tech to the Real World */}
                                <motion.li className="mt-6">
                                    <motion.div className="flex list-none items-center gap-5">
                                        <motion.div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-300 shadow">
                                            <motion.img
                                                className="w-4"
                                                src={Target}
                                            />
                                        </motion.div>
                                        <motion.p className="text-2xl font-semibold text-blue-950">
                                            Apply Tech to the Real World
                                        </motion.p>
                                    </motion.div>
                                    <motion.p className="mb-4 ml-15 text-gray-400">
                                        Explore how robotics and AI can solve
                                        everyday challenges.
                                    </motion.p>
                                </motion.li>

                                <hr className="h-[1px] border-none bg-black/10" />

                                {/* Prepare for the Future */}
                                <motion.li className="mt-6">
                                    <motion.div className="flex list-none items-center gap-5">
                                        <motion.div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-300 shadow">
                                            <motion.img
                                                className="w-4"
                                                src={Target}
                                            />
                                        </motion.div>
                                        <motion.p className="text-2xl font-semibold text-blue-950">
                                            Prepare for the Future
                                        </motion.p>
                                    </motion.div>
                                    <motion.p className="mb-4 ml-15 text-gray-400">
                                        Gain skills for STEM education,
                                        competitions, and careers.
                                    </motion.p>
                                </motion.li>

                                <hr className="h-[1px] border-none bg-black/10" />
                            </motion.ul>
                        </motion.div>
                    </motion.div>

                    {/* Programs Section */}
                    <motion.div className="mt-16 flex w-full flex-col items-center justify-center">
                        <motion.p className="rounded-full bg-red-100 px-4 py-2 text-sm text-red-700">
                            PROGRAMS
                        </motion.p>
                        <motion.h1
                            className="mt-6 text-5xl font-bold text-blue-950"
                            style={{ fontFamily: 'Fredoka' }}
                        >
                            Explore Programs we Offer
                        </motion.h1>
                        <motion.p className="mt-4 text-center text-gray-400">
                            We offer robotics and coding programs designed for
                            different levels of learners.
                            <br /> Each program is hands-on, engaging, and
                            builds real-world skills.
                        </motion.p>

                        <motion.div className="mt-8 flex w-[min(75%,750px)] gap-4">
                            {/* Card 1 */}
                            <motion.div className="flex-1 rounded-lg border border-gray-200 p-3">
                                <motion.p className="text-center font-semibold text-blue-950">
                                    Beginner Robotics
                                </motion.p>
                                <motion.p className="mt-2 text-center text-gray-400">
                                    Learn the basics of building and programming
                                    robots using simple drag-and-drop coding.
                                </motion.p>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div className="flex-1 rounded-lg border border-gray-200 p-3">
                                <motion.p className="text-center font-semibold text-blue-950">
                                    Intermediate Robotics & Coding
                                </motion.p>
                                <motion.p className="mt-2 text-center text-gray-400">
                                    Level up with bigger projects, sensors, and
                                    problem-solving challenges.
                                </motion.p>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div className="flex-1 rounded-lg border border-gray-200 p-3">
                                <motion.p className="text-center font-semibold text-blue-950">
                                    Advanced & Specialized Tracks
                                </motion.p>
                                <motion.p className="mt-2 text-center text-gray-400">
                                    Explore AI, automation, and advanced
                                    robotics concepts for future innovators.
                                </motion.p>
                            </motion.div>
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
                className="pointer-events-none absolute left-0 z-1 select-none"
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
                className="pointer-events-none absolute left-0 z-0 select-none"
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
                className="pointer-events-none absolute right-0 z-0 select-none"
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
                className="pointer-events-none absolute right-0 z-1 select-none"
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
                className="absolute bottom-16 left-96"
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
                className="absolute bottom-64 left-32"
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
                className="absolute top-48 right-96"
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
                className="absolute right-48 bottom-48"
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
