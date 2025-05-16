"use client";
import AboutPageBanner from '@/app/(website-view)/about/AboutPageBanner';
import Achievement from '@/app/(website-view)/about/Achievement';
import Communication from '@/app/(website-view)/about/Communication';
import MissionAndVission from '@/app/(website-view)/about/MissionAndVission';
import OurTeam from '@/app/(website-view)/about/OurTeam';

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