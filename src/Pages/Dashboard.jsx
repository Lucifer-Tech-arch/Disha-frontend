import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
// Importing icons from react-icons
import { RxDashboard } from 'react-icons/rx';
import { PiStudent } from "react-icons/pi";
import { IoBookOutline, IoSettingsOutline, IoWarningOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineUsers } from "react-icons/hi2";
import { LiaDollarSignSolid } from "react-icons/lia";
import { FiUser, FiSearch, FiFilter } from "react-icons/fi";
import { MdOutlineWatchLater } from "react-icons/md";

// --- Reusable Components ---

// Sidebar Navigation Item Component (now a button for SPA navigation)
const NavItem = ({ icon, label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`flex items-center p-3 my-1 rounded-lg transition-colors duration-200 w-full text-left ${
            active
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'
        }`}
    >
        {icon}
        <span className="ml-4 text-sm font-medium">{label}</span>
    </button>
);

// Stat Card Component
const StatCard = ({ icon, value, title, subtext, iconBgColor }) => (
    <div className="bg-white p-5 rounded-xl border border-gray-200 flex flex-col items-start justify-between">
        <div className={`p-3 rounded-lg ${iconBgColor} mb-3`}>
            {icon}
        </div>
        <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <p className="text-xl font-bold text-gray-800 my-1">{value}</p>
            <p className="text-xs text-gray-400">{subtext}</p>
        </div>
    </div>
);

// Activity Item Component
const ActivityItem = ({ initial, name, action, time }) => (
    <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors duration-200 cursor-pointer">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
            {initial}
        </div>
        <div>
            <p className="text-sm text-gray-800">
                <span className="font-medium">{name}</span> {action}
            </p>
            <p className="flex items-center text-xs text-gray-500 mt-1">
                <MdOutlineWatchLater className="mr-1" /> {time}
            </p>
        </div>
    </div>
);

// --- Page Components ---

const DashboardContent = () => {
    const stats = [
        { icon: <HiOutlineUsers size={24} className="text-blue-500" />, value: '1,200', title: 'Total Students', subtext: 'vs last month', iconBgColor: 'bg-blue-100' },
        { icon: <IoBookOutline size={24} className="text-green-500" />, value: '45', title: 'Total Courses', subtext: 'vs last month', iconBgColor: 'bg-green-100' },
        { icon: <LiaDollarSignSolid size={24} className="text-purple-500" />, value: '$12,500', title: 'Total Income', subtext: 'vs last month', iconBgColor: 'bg-purple-100' },
        { icon: <FiUser size={24} className="text-orange-500" />, value: '2,400', title: 'Total Users', subtext: 'vs last month', iconBgColor: 'bg-orange-100' },
    ];
    const activities = [
        { initial: 'J', name: 'John Doe', action: 'completed the assessment', time: '2 mins ago' },
        { initial: 'J', name: 'Jane Smith', action: 'enrolled in a new course', time: '10 mins ago' },
        { initial: 'R', name: 'Robert Johnson', action: 'completed the assessment', time: '25 mins ago' },
        { initial: 'E', name: 'Emily Davis', action: 'updated profile', time: '1 hour ago' },
    ];
    return (
        <>
            <header className="flex items-center justify-between pb-6">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Welcome back, User!</h1>
                    <p className="text-sm text-gray-500 mt-1">Here's what's happening with your account today.</p>
                </div>
                <div className="flex items-center gap-4">
                    <button className="px-4 py-2 text-sm font-medium cursor-pointer text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">Export</button>
                    <button className="flex items-center gap-2 cursor-pointer px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] rounded-lg hover:bg-blue-700"><FaPlus />Add New</button>
                </div>
            </header>
            <section className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] rounded-full flex items-center justify-center text-white text-xl font-bold">U</div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900">Username</h3>
                            <p className="text-sm text-gray-500">No email provided</p>
                            <div className="flex items-center gap-4 mt-1 text-xs text-gray-500">
                                <span className="flex items-center gap-1.5"><LuCalendarDays className="text-gray-400" /> Joined on Invalid Date</span>
                                <span className="flex items-center gap-1.5"><IoWarningOutline className="text-yellow-500" /> Email Not Verified</span>
                            </div>
                        </div>
                    </div>
                    <button className="px-4 py-2 text-sm font-medium cursor-pointer text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">Edit Profile</button>
                </div>
                <div className="border-t border-gray-200 mt-6 pt-6">
                    <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Account Details</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div><p className="text-xs text-gray-400">Email</p><p className="text-sm font-medium text-gray-800">N/A</p></div>
                        <div><p className="text-xs text-gray-400">Phone</p><p className="text-sm font-medium text-gray-800">Not provided</p></div>
                        <div><p className="text-xs text-gray-400">Last Sign In</p><p className="text-sm font-medium text-gray-800">N/A</p></div>
                        <div><p className="text-xs text-gray-400">Account Status</p><p className="font-medium text-red-500 flex items-center gap-1.5 text-sm"><span className="h-2 w-2 rounded-full bg-red-500"></span>Inactive</p></div>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">{stats.map((stat, index) => (<StatCard key={index} {...stat} />))}</section>
            <section className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-gray-800">Recent Students</h2>
                    <button 
                        onClick={() => navigate('/students')}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                    >
                        View All
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
                <div className="space-y-2">{activities.map((activity, index) => (<ActivityItem key={index} {...activity} />))}</div>
            </section>
        </>
    );
};


// Placeholder pages
const PlaceholderPage = ({ title }) => (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        <p className="mt-2 text-gray-600">This is a placeholder page for {title}.</p>
    </div>
);


// --- Main App Component ---

const Dashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeView, setActiveView] = useState('Dashboard');

    // Update active view based on URL
    useEffect(() => {
        const path = location.pathname.split('/')[1];
        const activeItem = navItems.find(item => 
            path && item.id.toLowerCase() === path.toLowerCase()
        );
        if (activeItem) {
            setActiveView(activeItem.id);
        }
    }, [location]);

    const navItems = [
        { id: 'Dashboard', icon: <RxDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
        { id: 'Students', icon: <PiStudent size={20} />, label: 'Students', path: '/students' },
        { id: 'Courses', icon: <IoBookOutline size={20} />, label: 'Courses', path: '/courses' },
        { id: 'Calendar', icon: <LuCalendarDays size={20} />, label: 'Calendar', path: '/calendar' },
        { id: 'Settings', icon: <IoSettingsOutline size={20} />, label: 'Settings', path: '/settings' },
    ];

    const handleNavigation = (path) => {
        navigate(path);
    };

    const renderContent = () => {
        switch (activeView) {
            case 'Dashboard':
                return <DashboardContent />;
            case 'Courses':
                return <PlaceholderPage title="Courses" />;
            case 'Calendar':
                return <PlaceholderPage title="Calendar" />;
            case 'Settings':
                return <PlaceholderPage title="Settings" />;
            default:
                return <DashboardContent />;
        }
    };

    return (
        <div className="flex bg-gray-50 font-sans">
            <aside className="w-64 bg-white border-r border-l shadow-lg border-gray-200 p-4 fixed top-[80px] h-[calc(100vh-80px)]">
                <nav>
                    {navItems.map((item) => (
                        <NavItem
                            key={item.id}
                            icon={item.icon}
                            label={item.label}
                            active={activeView === item.id}
                            onClick={() => handleNavigation(item.path)}
                        />
                    ))}
                </nav>
            </aside>

            <main className="flex-1 p-8 ml-64 mt-[80px] h-[calc(100vh-80px)] overflow-y-auto">
                {renderContent()}
            </main>
        </div>
    );
};

export default Dashboard;