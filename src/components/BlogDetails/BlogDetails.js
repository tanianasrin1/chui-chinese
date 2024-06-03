import React from 'react';
import DetailsEvent from './DetailsEvent/DetailsEvent';

const BlogDetails = ({data, recentBlog}) => {
    return (
        <div>
            <DetailsEvent data={data} recentBlog={recentBlog}/>
        </div>
    );
};

export default BlogDetails;