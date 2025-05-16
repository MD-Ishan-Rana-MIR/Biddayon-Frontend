"use client";
import AboutPageBanner from '@/pages/about-page/AboutPageBanner';
import Achievement from '@/pages/about-page/Achievement';
import Communication from '@/pages/about-page/Communication';
import MissionAndVission from '@/pages/about-page/MissionAndVission';
import OurTeam from '@/pages/about-page/OurTeam';

const page = () => {
    return (
        <div>
            <AboutPageBanner></AboutPageBanner>
            <MissionAndVission></MissionAndVission>
            <OurTeam></OurTeam>
            <Achievement></Achievement>
            <Communication></Communication>
        </div>
    );
};

export default page;