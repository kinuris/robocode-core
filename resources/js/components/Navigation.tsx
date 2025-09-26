import { motion } from 'framer-motion';
import RoboCodeLogo from '../assets/rcc_logo.svg';

interface NavigationProps {
    isMobileMenuOpen: boolean;
    setIsMobileMenuOpen: (open: boolean) => void;
}

export function Navigation({ isMobileMenuOpen, setIsMobileMenuOpen }: NavigationProps) {
    return (
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
    );
}