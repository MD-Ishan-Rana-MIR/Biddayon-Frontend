"use client";

import Contact from "./Contact";
import ContactPageBanner from "./ContactPageBanner";
import Support from "./Support";

const page = () => {
    return (
        <div className="md:space-y-32 sm:space-y-20 space-y-12">
            <ContactPageBanner></ContactPageBanner>
            <Contact></Contact>
            <Support></Support>
        </div>
    );
};

export default page;