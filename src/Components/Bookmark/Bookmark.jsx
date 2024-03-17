import React from 'react';

const Bookmark = ({ bookMark }) => {
    const { Title } = bookMark;


    return (
        <div className='bg-purple-600 mt-5 p-4 ml-4 mr-10 rounded-lg items-center'>
            <p className='text-2xl text-center'>{Title}</p>
        </div>
    );
};

export default Bookmark;