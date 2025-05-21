"use client";
import React from 'react';
import QuestionPageBanner from './QuestionPageBanner';
import FAndQCommunication from './FAndQCommunication';
import FAndQMainSection from './FAndQMainSection';

const page = () => {
    return (
        <div className="md:space-y-24 sm:space-y-16 space-y-14">
            <QuestionPageBanner></QuestionPageBanner>
            <FAndQMainSection></FAndQMainSection>
            <FAndQCommunication></FAndQCommunication>
        </div>
    );
};

export default page;