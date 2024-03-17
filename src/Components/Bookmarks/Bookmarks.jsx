import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ booksMark, time }) => {

    return (
        <div className="md:w-1/3 bg-slate-300">
            <div className="text-3xl font-bold text-center bg-black text-white p-2 rounded-sm mb-2">
                <p>Total Reading Time : <span className="text-purple-600">{time}</span></p>
            </div>
            <p className="text-3xl font-bold text-center bg-black text-white p-2 rounded-sm">BookMarked Blogs : <span className="text-purple-600">{booksMark.length}</span></p>
            {
                booksMark.map((bookmark, idx) =>
                    <Bookmark
                        bookMark={bookmark}
                        key={idx}
                    ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;