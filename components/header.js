import React from "react";

const Header = () => {
    return (
        <header className="bg-[#795757] p-5 flex justify-between items-center text-white shadow-md">
            <h1 className="text-xl">Admin Panel</h1>
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Log Out</button>
        </header>
    );
};

export default Header;
