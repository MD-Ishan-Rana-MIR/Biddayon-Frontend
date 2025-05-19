"use client";

import Contact from "./Contact";
import ContactPageBanner from "./ContactPageBanner";
import Support from "./Support";

const page = () => {
    return (
        <div className="md:space-y-24 sm:space-y-16 space-y-14">
            <ContactPageBanner></ContactPageBanner>
            <Contact></Contact>
            <Support></Support>
        </div>
    );
};

export default page;