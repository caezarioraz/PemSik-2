import React from "react";

const Sidebar = () => {
    return (
        <aside className="bg-[#795757] text-white w-64 p-5 shadow-lg">
            <nav>
                <ul className="space-y-4">
                    <li><a href="#" className="text-lg hover:underline">Dashboard</a></li>
                    <li><a href="#" className="text-lg hover:underline">Mahasiswa</a></li>
                    <li><a href="#" className="text-lg hover:underline">Settings</a></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
