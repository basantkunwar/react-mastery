import React from 'react';
import profile from '../asset/images/profile.jpeg';
export default function Profile() {
    const name="basant";
    const profession="Computer Engineering Student";
    const district="Baitadi, Nepal";
    const age=20;
    const skills="react learning and laravel";
  
    return (
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6">

    <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition duration-300">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32"></div>

        {/* Profile Image */}
        <div className="flex justify-center -mt-16">
            <img
                src={profile}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
            />
        </div>

        {/* Profile Info */}
        <div className="text-center px-8 py-6">

            <h1 className="text-3xl font-bold text-gray-800">
                {name}
            </h1>

            <p className="text-blue-600 font-medium mt-1">
                {profession}
            </p>

            <div className="mt-6 space-y-3 text-left">

                <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">📍 District</span>
                    <span>{district}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">🎂 Age</span>
                    <span>{age} Years</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                    <span className="font-semibold">💻 Skills</span>
                    <span>{skills}</span>
                </div>

            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-8">

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-lg transition">
                    Contact
                </button>

                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-2 rounded-full transition">
                    Portfolio
                </button>

            </div>

        </div>

    </div>

</div>
    );
}