import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='bg-purple-600 flex justify-between  p-3'>
            <div className='text-3xl font-bold'>
                <h1 className='mt-2 ml-6'>knowledge-Cafe</h1>
            </div>
            <div className='mr-4'>
                <img src={profile} alt="" />
            </div>

        </div>
    );
};

export default Header;