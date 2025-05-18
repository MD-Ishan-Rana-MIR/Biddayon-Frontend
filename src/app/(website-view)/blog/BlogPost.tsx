"use client";
import RecentPosts from "./RecentPosts";
import RelevantPosts from "./RelevantPosts";

const BlogPost = () => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 sm:grid-cols-2 md:px-5 px-3 md:gap-12 gap-7">
            <RecentPosts></RecentPosts>
            <RelevantPosts></RelevantPosts>
        </div>
    );
};

export default BlogPost;