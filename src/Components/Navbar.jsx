import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { FiHome, FiUser } from "react-icons/fi";
import { LuBrain, LuSchool } from "react-icons/lu";
import { SlGraph } from "react-icons/sl";
import '../index.css'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()

    const gradientBorder = "bg-gradient-to-r from-[#2A65F5] to-[#19D7B5]"

    // NavItem: horizontal layout
    const NavItem = ({ to, Icon, label, onClick }) => (
        <NavLink to={to} onClick={onClick} className="relative">
            {({ isActive }) => (
                <div className="flex flex-col items-center cursor-pointer">
                    <div className={`flex items-center justify-center gap-2 py-1`}>
                        {/* Icon always visible */}
                        <Icon className="text-[#2A65F5]" />

                        {/* Text gradient when active */}
                        <span className={`${isActive ? 'bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent font-semibold' : 'text-gray-600'}`}>
                            {label}
                        </span>
                    </div>

                    {/* Bottom gradient border for active link */}
                    {isActive && <div className={`w-full h-[2px] ${gradientBorder} rounded-full mt-1`}></div>}
                </div>
            )}
        </NavLink>
    )

    return (
        <div className='flex items-center justify-between py-2 px-4 w-full fixed top-0 left-0 z-50 bg-white shadow-md'>
            <div className='flex items-center gap-2'>
                <Link to='/'><img src={Logo} className='w-14' alt="Logo" /></Link>
                <div>
                <h1 className='text-2xl font-bold bg-gradient-to-r from-[#2A65F5] font-sans to-[#19D7B5] bg-clip-text text-transparent'>DISHA</h1>
                <p className='text-xs font-sans'>Smart Career Guidence</p>
                </div>
            </div>
            

            {/* Desktop Nav */}
            <ul className='hidden sm:flex gap-5 text-sm'>
                <NavItem to="/" Icon={FiHome} label="Home" />
                <NavItem to="/assessment" Icon={LuBrain} label="Assessment" />
                <NavItem to="/colleges" Icon={LuSchool} label="Colleges" />
                <NavItem to="/careerpaths" Icon={SlGraph} label="Career Paths" />
                <NavItem to="/dashboard" Icon={FiUser} label="Dashboard" />
            </ul>

            {/* Right side (Login + Dropdown) */}
            <div className='flex items-center gap-6'>
                <div className="group relative">
                    <Link to="/login">
                    <div className='flex justify-center items-center'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="25px"
                            className="cursor-pointer"
                            viewBox="0 -960 960 960"
                            width="25px"
                            fill="gray"
                        >
                            <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" />
                        </svg>
                        <p className='ml-2 text-gray-600'>Login</p>
                        </div>
                    </Link>

                    <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 rounded">
                            <p onClick={() => navigate('/profile')} className="cursor-pointer bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent hover:opacity-75">My Profile</p>
                            <p className="cursor-pointer bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent flex items-center hover:opacity-75">Logout</p>
                        </div>
                    </div>
                </div>
                <svg onClick={() => setVisible(true)} xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#c2410c" className='mb-2 cursor-pointer sm:hidden '><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg>
            </div>

            {/* Sidebar menu for small screen */}
            <div className={`fixed top-0 right-0 bottom-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${visible ? "translate-x-0" : "translate-x-full"}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" className='h-4 rotate-180' fill="bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent">
                            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                        </svg>
                        <p className='bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] bg-clip-text text-transparent'>Back</p>
                    </div>

                    {/* Sidebar links */}
                    <NavItem to="/" Icon={FiHome} label="Home" onClick={() => setVisible(false)} />
                    <NavItem to="/assessment" Icon={LuBrain} label="Assessment" onClick={() => setVisible(false)} />
                    <NavItem to="/colleges" Icon={LuSchool} label="Colleges" onClick={() => setVisible(false)} />
                    <NavItem to="/careerpaths" Icon={SlGraph} label="Career Paths" onClick={() => setVisible(false)} />
                    <NavItem to="/dashboard" Icon={FiUser} label="Dashboard" onClick={() => setVisible(false)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
