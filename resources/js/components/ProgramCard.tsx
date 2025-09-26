import { motion } from 'framer-motion';

interface ProgramCardProps {
    title: string;
    description: string;
}

export function ProgramCard({ title, description }: ProgramCardProps) {
    return (
        <motion.div className="flex-1 rounded-lg border border-gray-200 p-3 sm:p-4">
            <motion.p className="text-center font-semibold text-blue-950 text-sm sm:text-base">
                {title}
            </motion.p>
            <motion.p className="mt-2 text-center text-gray-400 text-xs sm:text-sm">
                {description}
            </motion.p>
        </motion.div>
    );
}