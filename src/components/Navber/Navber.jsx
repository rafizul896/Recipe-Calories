import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between items-center mt-3">
                <div className="">
                    <a className="text-2xl md:text-3xl font-bold text-[#120B2B]">Recipe Calories</a>
                </div>
                <div className="list-none gap-8 hidden lg:flex text-[#150B2BB3]">
                    <li><a href="">Home</a></li>
                    <li><a href="">Recipes</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Search</a></li>
                </div>
                <div className="flex-none gap-3">
                    <div className="form-control relative hidden md:block">
                        <input type="text" placeholder="Search" className="input pl-10 rounded-full text-[#150B2BB3] bg-[#150B2B14]" />
                        <div className="absolute top-[30%] left-4 text-xl cursor-pointer"><IoSearchOutline /></div>
                    </div>
                    <div className="dropdown dropdown-end cursor-pointer">
                        <div tabIndex={0} role="" className="border p-2 md:p-3 rounded-full text-lg md:text-2xl bg-[#0BE58A]">
                            <CgProfile />
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;