import profile from '../../assets/images/logo (2).png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-8'>
            <div>
                <h1 className='text-4xl font-bold'>Recipe</h1>
            </div>
            <div>
                <ul className='flex space-x-4'>
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className='flex space-x-4'>
                <input type="text"  placeholder="Search" className=" bg-gray-100 rounded-3xl p-2" />
                <img className='bg-green-300 rounded-full p-2' src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;