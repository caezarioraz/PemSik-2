import React, { useState } from "react";
import Swal from "sweetalert2";
import "tailwindcss/tailwind.css";

const App = () => {
  const [mahasiswa, setMahasiswa] = useState([
    { id: 1, nim: "A11.1980.12345", nama: "Vinsen" },
    { id: 2, nim: "A11.1980.12346", nama: "Budi" },
  ]);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMahasiswa, setSelectedMahasiswa] = useState(null);
  const [newMahasiswa, setNewMahasiswa] = useState({ nim: "", nama: "" });

  const openAddModal = () => setIsAddModalOpen(true);
  const closeAddModal = () => setIsAddModalOpen(false);

  const openEditModal = (mahasiswa) => {
    setSelectedMahasiswa(mahasiswa);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => setIsEditModalOpen(false);

  const handleAddMahasiswa = () => {
    setMahasiswa([...mahasiswa, { ...newMahasiswa, id: mahasiswa.length + 1 }]);
    setNewMahasiswa({ nim: "", nama: "" });
    closeAddModal();
  };

  const handleEditMahasiswa = () => {
    setMahasiswa(
      mahasiswa.map((m) =>
        m.id === selectedMahasiswa.id ? selectedMahasiswa : m
      )
    );
    closeEditModal();
  };

  const handleDeleteMahasiswa = (id) => {
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Data ini akan dihapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Tidak, batalkan!",
    }).then((result) => {
      if (result.isConfirmed) {
        setMahasiswa(mahasiswa.filter((m) => m.id !== id));
        Swal.fire("Dihapus!", "Data berhasil dihapus.", "success");
      }
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-[#795757] p-5 flex justify-between items-center text-white shadow-md">
        <h1 className="text-xl">Admin Panel</h1>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
          Log Out
        </button>
      </header>

      {/* Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-[#795757] text-white w-64 p-5 shadow-lg">
          <nav>
            <ul className="space-y-4">
              <li><a href="#" className="text-lg hover:underline">Dashboard</a></li>
              <li><a href="#" className="text-lg hover:underline">Mahasiswa</a></li>
              <li><a href="#" className="text-lg hover:underline">Settings</a></li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <div className="flex-1 bg-white p-5 shadow-lg">
          <h2 className="text-2xl mb-5">Daftar Mahasiswa</h2>
          <button
            onClick={openAddModal}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mb-5"
          >
            Tambah Mahasiswa
          </button>

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
              {mahasiswa.map((m, index) => (
                <tr key={m.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-3">{index + 1}</td>
                  <td className="border border-gray-300 p-3">{m.nim}</td>
                  <td className="border border-gray-300 p-3">{m.nama}</td>
                  <td className="border border-gray-300 p-3 space-x-2">
                    <button
                      onClick={() => openEditModal(m)}
                      className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteMahasiswa(m.id)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#FFF0D1] p-5 text-center text-gray-800 shadow-md">
        &copy; 2020 Sprei Gratis WOK
      </footer>

      {/* Modal Tambah Mahasiswa */}
      {isAddModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 w-96 rounded shadow-lg">
            <span
              className="text-gray-400 text-2xl float-right cursor-pointer"
              onClick={closeAddModal}
            >
              &times;
            </span>
            <h2 className="text-xl mb-4">Tambah Mahasiswa</h2>
            <form>
              <label className="block mb-2">NIM:</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full mb-4"
                value={newMahasiswa.nim}
                onChange={(e) =>
                  setNewMahasiswa({ ...newMahasiswa, nim: e.target.value })
                }
              />
              <label className="block mb-2">Nama:</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full mb-4"
                value={newMahasiswa.nama}
                onChange={(e) =>
                  setNewMahasiswa({ ...newMahasiswa, nama: e.target.value })
                }
              />
            </form>
            <div className="text-right space-x-2">
              <button
                onClick={closeAddModal}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddMahasiswa}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Edit Mahasiswa */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 w-96 rounded shadow-lg">
            <span
              className="text-gray-400 text-2xl float-right cursor-pointer"
              onClick={closeEditModal}
            >
              &times;
            </span>
            <h2 className="text-xl mb-4">Edit Mahasiswa</h2>
            <form>
              <label className="block mb-2">NIM:</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full mb-4"
                value={selectedMahasiswa?.nim}
                onChange={(e) =>
                  setSelectedMahasiswa({
                    ...selectedMahasiswa,
                    nim: e.target.value,
                  })
                }
              />
              <label className="block mb-2">Nama:</label>
              <input
                type="text"
                className="border border-gray-300 p-2 w-full mb-4"
                value={selectedMahasiswa?.nama}
                onChange={(e) =>
                  setSelectedMahasiswa({
                    ...selectedMahasiswa,
                    nama: e.target.value,
                  })
                }
              />
            </form>
            <div className="text-right space-x-2">
              <button
                onClick={closeEditModal}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleEditMahasiswa}
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
