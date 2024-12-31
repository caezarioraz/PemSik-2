import React from "react";
import Swal from "sweetalert2";

const Table = ({ students, onEdit, onDelete }) => {
    const handleDelete = (student) => {
        Swal.fire({
            title: "Apakah Anda yakin?",
            text: "Data ini tidak dapat dikembalikan!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Ya, Hapus!"
        }).then((result) => {
            if (result.isConfirmed) {
                onDelete(student);
                Swal.fire("Dihapus!", "Data telah dihapus.", "success");
            }
        });
    };

    return (
        <table className="w-full border-collapse mb-5">
            <thead>
                <tr>
                    <th className="border border-gray-300 p-3 text-left bg-gray-100">No.</th>
                    <th className="border border-gray-300 p-3 text-left bg-gray-100">NIM</th>
                    <th className="border border-gray-300 p-3 text-left bg-gray-100">Nama</th>
                    <th className="border border-gray-300 p-3 text-left bg-gray-100">Aksi</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                    <tr key={student.id} className="hover:bg-gray-100">
                        <td className="border border-gray-300 p-3">{index + 1}.</td>
                        <td className="border border-gray-300 p-3">{student.nim}</td>
                        <td className="border border-gray-300 p-3">{student.nama}</td>
                        <td className="border border-gray-300 p-3 space-x-2">
                            <button onClick={() => onEdit(student)} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded">Edit</button>
                            <button onClick={() => handleDelete(student)} className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded">Hapus</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
