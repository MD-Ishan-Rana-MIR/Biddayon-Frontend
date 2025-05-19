"use client";
import BecomeAWriter from "./BecomeAWriter";
import BlogPageBanner from "./BlogPageBanner";
import BlogPost from "./BlogPost";


const page = () => {
    return (
        <div className="md:space-y-24 sm:space-y-20 space-y-16">
            <BlogPageBanner></BlogPageBanner>
            <BlogPost></BlogPost>
            <BecomeAWriter></BecomeAWriter>
        </div>
    );
};

export default page;