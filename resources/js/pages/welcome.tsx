import { Head } from '@inertiajs/react';
import { motion } from 'framer-motion';

import Blob1 from '../../js/assets/blob_1.svg';
import Blob2 from '../../js/assets/blob_2.svg';
import Blob3 from '../../js/assets/blob_3.svg';
import Blob4 from '../../js/assets/blob_4.svg';
import LeftBackgroundBlob from '../../js/assets/left_blob_bg.svg';
import LeftForegroundBlob from '../../js/assets/left_blog_fg.svg';
import RoboCodeLogo from '../../js/assets/rcc_logo.svg';
import RightBackgroundBlob from '../../js/assets/right_blob_bg.svg';
import RightForegroundBlob from '../../js/assets/right_blob_fg.svg';

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
            <motion.main className="min-h-screen min-w-screen bg-blue-950">
                {Blobs()}
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

                    <motion.a className="rounded-full bg-yellow-400 px-4 py-2 font-bold text-blue-950">
                        Learn More
                    </motion.a>
                </motion.div>
            </motion.main>
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
