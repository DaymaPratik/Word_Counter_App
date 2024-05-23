import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    let [openList,setOpenList]=useState(false);
    let [dark,setDark]=useState(false);
    function openNavList() {
        setOpenList(!openList);
    }
    function changeModeFunct() {
        setDark(!dark);
        console.log(dark);
    }
    return (
       <div>
        <nav className="navbar  flex justify-between items-center px-[10px] min-[768px]:px-[20px] py-[10px] bg-purple-300
       ">
       <div className="nav-left  flex gap-2 min-[768px]:gap-5 items-center px-[10px] w-fit ">

       <h1 className="text-[20px] min-[400px]text-[25px] min-[768px]:text-[30px] font-bold min-[768px]:mr-[20px]">Word Counter</h1>
       
        <ul className="text-[20px] min-[768px]:text-[25px] font-semibold flex gap-2 min-[768px]:gap-5 items-center ">
       
            <li className="min-[600px]:hidden cursor-pointer  text-[20px] font-semibold  p-[5px] relative" onClick={openNavList} > {openList ? 
            <ul className="absolute bg-red-400 p-[20px]">
                <li className="cursor-pointer"> <Link to="/">Home</Link> </li>
                <li className="cursor-pointer"> <Link to="about">About</Link> </li>
                <li className="cursor-pointer"> <Link to="contact">Contact</Link> </li>
            </ul> : <p>X</p>}</li>
            <li className="cursor-pointer p-2 max-[600px]:hidden transition hover:text-white duration-200 ease-in hover:bg-black"> <Link to="/">Home</Link> </li>
            <li className="cursor-pointer p-2 max-[600px]:hidden transition hover:text-white duration-200 ease-in hover:bg-black"> <Link to="about">About</Link> </li>
            <li className="cursor-pointer p-2 max-[600px]:hidden transition hover:text-white duration-200 ease-in hover:bg-black"> <Link to="contact">Contact</Link> </li>
        </ul>
       </div>


       <div className="nav-right border-2 border-red-500">
        <button className="dark-mode-btn text-[15px] min-[768px]:text-[20px] py-2 px-4 transition hover:text-white duration-200 ease-in hover:bg-black" onClick={changeModeFunct}>
            {dark ? 'Light' : "Dark"}  
        </button>
       </div>
       </nav>
       </div>
    );
}

export default Navbar;
