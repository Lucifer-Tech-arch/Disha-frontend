import React from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';

const studentsData = [
    {
        initial: 'J',
        name: 'John Doe',
        email: 'john@example.com',
        course: 'Computer Science',
        status: 'Active',
    },
    {
        initial: 'J',
        name: 'Jane Smith',
        email: 'jane@example.com',
        course: 'Engineering',
        status: 'Active',
    },
    {
        initial: 'R',
        name: 'Robert Johnson',
        email: 'robert@example.com',
        course: 'Business',
        status: 'Inactive',
    },
    {
        initial: 'E',
        name: 'Emily Davis',
        email: 'emily@example.com',
        course: 'Medicine',
        status: 'Active',
    },
];

const StudentRow = ({ student }) => (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
        <td className="py-4 px-6">
            <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-blue-600 bg-blue-100`}>
                    {student.initial}
                </div>
                <span className="font-medium text-gray-800">{student.name}</span>
            </div>
        </td>
        <td className="py-4 px-6 text-gray-600">{student.email}</td>
        <td className="py-4 px-6 text-gray-600">{student.course}</td>
        <td className="py-4 px-6">
            <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                student.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
            }`}>
                {student.status}
            </span>
        </td>
        <td className="py-4 px-6">
            <a href="#" className="text-blue-600 hover:underline mr-4">Edit</a>
            <a href="#" className="text-red-600 hover:underline">Delete</a>
        </td>
    </tr>
);


const DashStudent = () => {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200">
            {/* Header */}
            <header className="flex items-center justify-between mb-6">
                <div className="relative">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search students..."
                        className="pl-10 pr-4 py-2 w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-100">
                    <FiFilter />
                    Filter
                </button>
            </header>

            {/* Students Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="text-xs text-gray-500 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="py-3 px-6">Name</th>
                            <th scope="col" className="py-3 px-6">Email</th>
                            <th scope="col" className="py-3 px-6">Course</th>
                            <th scope="col" className="py-3 px-6">Status</th>
                            <th scope="col" className="py-3 px-6">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentsData.map((student, index) => (
                            <StudentRow key={index} student={student} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashStudent;