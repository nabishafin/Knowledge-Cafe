import { key } from 'localforage';
import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";



const Blog = ({ blog, handleAddToBooksMArk, handleMarkAsRead }) => {
    // console.log(blog);
    const {
        Title,
        Cover,
        Author_img,
        Author,
        Reading_Time,
        Posted_Date,
        Hashtags,
        ID
    } = blog;

    return (
        <div className='mt-16'>
            <img className='w-3/4' src={Cover} />
            <div className='flex justify-between mt-5'>
                <div className='flex justify-between'>
                    <div>
                        <img className='w-12 rounded-3xl ml-2' src={Author_img} alt="" />
                    </div>
                    <div className='ml-6 mt-2'>
                        <h2 className='text-lg font-bold'>{Author}</h2>
                        <span className='font-bold text-purple-600 '>{Posted_Date}</span>
                    </div>
                </div>
                <div>
                    <span className='mr-10'>{Reading_Time} min read</span>
                    <button className='mr-8' onClick={() => handleAddToBooksMArk(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-2xl font-bold mt-3'>Blog : {Title}</h2>
            <p className='mt-3'>
                {
                    Hashtags.map((hash, idx) =>

                        <span> <a href="">#{hash}</a></span>)

                }</p>
            <div>
                <button onClick={() => handleMarkAsRead(Reading_Time, ID)} className='underline text-purple-600 font-bold mt-2'>Mark as Read</button>
            </div>
        </div>

    );
};

Blog.prototypes = {
    blog: PropTypes.object.isRequired
}


export default Blog;