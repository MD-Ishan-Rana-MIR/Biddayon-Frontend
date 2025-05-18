import React from 'react';
import Category from './Category';
import Favourite from './Favourite';
import NewsLatter from './NewsLatter';

const RelevantPosts = () => {
    return (
        <div className='md:space-y-8 sm:space-y-6 space-y-4'>
            <Category></Category>
            <Favourite></Favourite>
            <NewsLatter></NewsLatter>
        </div>
    );
};

export default RelevantPosts;