import React, { useState, useEffect } from "react";

const EditStudentModal = ({ isOpen, onClose, student, onSave }) => {
    const [nim, setNim] = useState("");
    const [nama, setNama] = useState("");

    useEffect(() => {
        if (student) {
            setNim(student.nim);
            setNama(student.nama);
        }
    }, [student]);

    const handleSave = () => {
        onSave({ ...student, nim, nama });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 w-96 rounded shadow-lg">
                <h2 className="text-xl mb-4">Edit Mahasiswa</h2>
                <form>
                    <label for="nim" className="block mb-2">NIM:</label>
                    <input type="text" value={nim} onChange={(e) => setNim(e.target.value)} className="border border-gray-300 p-2 w-full mb-4"/>

                    <label for="nama" className="block mb-2">Nama:</label>
                    <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} className="border border-gray-300 p-2 w-full mb-4"/>
                </form>
                <div className="text-right space-x-2">
                    <button onClick={onClose} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Cancel</button>
                    <button onClick={handleSave} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Save</button>
                </div>
            </div>
        </div>
    );
};

export default EditStudentModal;
