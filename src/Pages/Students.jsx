import React, { useState } from 'react';
import { FiSearch, FiPlus, FiFilter, FiEye, FiEdit2, FiTrash2 } from 'react-icons/fi';

export default function Students() {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    
    // Sample student data
    const [students, setStudents] = useState([
        { 
            id: 1, 
            initial: 'J', 
            name: 'John Doe', 
            email: 'john@example.com', 
            course: 'Computer Science', 
            joinDate: '2023-01-15',
            progress: 75,
            status: 'Active' 
        },
        // ... other students data
    ]);

    const filteredStudents = students.filter(student => {
        const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           student.course.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (activeFilter === 'all') return matchesSearch;
        return matchesSearch && student.status.toLowerCase() === activeFilter.toLowerCase();
    });

    const StudentRow = ({ student }) => (
        <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-4 px-6">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-blue-600 bg-blue-100">
                        {student.initial}
                    </div>
                    <div>
                        <div className="font-medium text-gray-800">{student.name}</div>
                        <div className="text-xs text-gray-500">Joined {student.joinDate}</div>
                    </div>
                </div>
            </td>
            <td className="py-4 px-6 text-gray-600">{student.email}</td>
            <td className="py-4 px-6">
                <span className="text-gray-600">{student.course}</span>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                    <div 
                        className="bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] h-1.5 rounded-full" 
                        style={{ width: `${student.progress}%` }}
                    ></div>
                </div>
                <div className="text-xs text-gray-500 mt-1">{student.progress}% Complete</div>
            </td>
            <td className="py-4 px-6">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    student.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                }`}>
                    {student.status}
                </span>
            </td>
            <td className="py-4 px-6 space-x-2">
                <button className="text-blue-600 hover:text-blue-800 p-2 rounded-full hover:bg-blue-50">
                    <FiEye className="w-4 h-4" />
                </button>
                <button className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-gray-100">
                    <FiEdit2 className="w-4 h-4" />
                </button>
                <button className="text-red-600 hover:text-red-800 p-2 rounded-full hover:bg-red-50">
                    <FiTrash2 className="w-4 h-4" />
                </button>
            </td>
        </tr>
    );

    return (
        <div className="bg-white p-6 mt-[20px] rounded-xl border border-gray-200">
            <header className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Students</h1>
                    <p className="text-sm text-gray-500">Manage your students and their progress</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Search students..." 
                            className="pl-10 pr-4 py-2 w-full sm:w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-2">
                        <select 
                            className="px-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={activeFilter}
                            onChange={(e) => setActiveFilter(e.target.value)}
                        >
                            <option value="all">All Students</option>
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                        <button 
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium cursor-pointer text-white bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] rounded-lg hover:bg-blue-700"
                            onClick={() => setIsAddModalOpen(true)}
                        >
                            <FiPlus className="w-4 h-4" />
                            Add Student
                        </button>
                    </div>
                </div>
            </header>

            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">Student</th>
                            <th scope="col" className="py-3 px-6">Contact</th>
                            <th scope="col" className="py-3 px-6">Course & Progress</th>
                            <th scope="col" className="py-3 px-6">Status</th>
                            <th scope="col" className="py-3 px-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.length > 0 ? (
                            filteredStudents.map((student) => (
                                <StudentRow key={student.id} student={student} />
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="py-8 text-center text-gray-500">
                                    No students found matching your criteria
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Add Student Modal */}
            {isAddModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-xl p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Add New Student</h3>
                            <button 
                                onClick={() => setIsAddModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input 
                                    type="email" 
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Course</label>
                                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option>Select a course</option>
                                    <option>Computer Science</option>
                                    <option>Engineering</option>
                                    <option>Business</option>
                                    <option>Medicine</option>
                                </select>
                            </div>
                            <div className="flex justify-end space-x-3 pt-4">
                                <button 
                                    type="button" 
                                    onClick={() => setIsAddModalOpen(false)}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="button" 
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                                >
                                    Add Student
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
