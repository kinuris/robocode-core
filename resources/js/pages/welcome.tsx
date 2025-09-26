import { useState } from 'react';

import { BottomSection } from '../components/BottomSection';
import { DocumentHead } from '../components/DocumentHead';
import { HeroSection } from '../components/HeroSection';
import { Navigation } from '../components/Navigation';

export default function Welcome() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <DocumentHead />
            <Navigation
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <HeroSection />
            <BottomSection />
        </>
    );
}
