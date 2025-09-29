import { motion } from 'framer-motion';
import { FeatureCard } from './FeatureCard';
import { ProgramCard } from './ProgramCard';
import { featuresData } from '../data/features';
import { programsData } from '../data/programs';

import BottomBackgroundBlob from '../assets/bottom_blob_bg.svg';
import BottomForegroundBlob from '../assets/bottom_blob_fg.svg';
import BottomSubForegroundBlob from '../assets/bottom_blob_fg_sub.svg';

const blobAnimationVariants = {
    background: {
        y: [0, 8, 0],
        x: [0, 12, 0]
    },
    subForeground: {
        y: [0, 10, 0],
        x: [0, -8, 0]
    },
    foreground: {
        y: [0, 6, 0]
    }
};

const blobTransitions = {
    background: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'mirror' as const,
        ease: 'easeInOut' as const,
        delay: 1
    },
    subForeground: {
        duration: 5.5,
        repeat: Infinity,
        repeatType: 'mirror' as const,
        ease: 'easeInOut' as const,
        delay: 0.3
    },
    foreground: {
        duration: 7,
        repeat: Infinity,
        repeatType: 'mirror' as const,
        ease: 'easeInOut' as const,
        delay: 0.8
    }
};

export function BottomSection() {
    return (
        <motion.div className="relative -bottom-0 min-h-screen overflow-visible bg-blue-950 pt-16">
            {/* Bottom Blob Animations */}
            <motion.div className="absolute top-0 right-0 z-0 sm:max-h-32 max-h-20 w-screen transform overflow-hidden select-none">
                <motion.img
                    className="ml-auto"
                    src={BottomBackgroundBlob}
                    animate={blobAnimationVariants.background}
                    transition={blobTransitions.background}
                />
            </motion.div>

            <motion.div className="absolute top-0 left-0 z-1 sm:max-h-32 max-h-20 w-full transform overflow-hidden select-none">
                <motion.img
                    className="w-full"
                    src={BottomSubForegroundBlob}
                    animate={blobAnimationVariants.subForeground}
                    transition={blobTransitions.subForeground}
                />
            </motion.div>

            <motion.div className="absolute top-0 left-0 z-2 sm:max-h-32 max-h-20 w-full transform overflow-hidden select-none">
                <motion.img
                    className="w-full"
                    src={BottomForegroundBlob}
                    animate={blobAnimationVariants.foreground}
                    transition={blobTransitions.foreground}
                />
            </motion.div>

            {/* White Content Section */}
            <motion.div className="bg-white p-4 sm:p-8 md:p-16 lg:p-24">
                {/* Features Section */}
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
    );
}