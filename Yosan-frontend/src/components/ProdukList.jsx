// import "/src/components/style.css";
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function ProdukList() {
//     const [produk, setProduk] = useState([]);
//     const [editData, setEditData] = useState(null);
//     const [modalVisible, setModalVisible] = useState(false);

//     // Fetch data dari API
//     useEffect(() => {
//         axios.get('http://localhost:3001/produk')
//             .then((response) => {
//                 console.log("Data Produk:", response.data);
//                 setProduk(response.data);
//             })
//             .catch((error) => console.error("Error fetching produk:", error));
//     }, []);

//     // Handle Delete Produk
//     const handleDelete = (id) => {
//         axios.delete(`http://localhost:3001/produk/${id}`)
//             .then(() => {
//                 setProduk(produk.filter((p) => p.id !== id));
//             })
//             .catch(err => console.error("Error deleting produk:", err));
//     };

//     // Handle Edit Produk
//     const handleEditClick = (item) => {
//         setEditData(item);
//         setModalVisible(true);
//     };

//     const handleEditSubmit = (e) => {
//         e.preventDefault();
//         axios.put(`http://localhost:3001/produk/${editData.id}`, editData)
//             .then(() => {
//                 setProduk(produk.map((p) => (p.id === editData.id ? editData : p)));
//                 setModalVisible(false);
//                 setEditData(null);
//             })
//             .catch(err => console.error("Error updating produk:", err));
//     };

//     return (
//         <div className="container">
//             <h2>Daftar Produk</h2>
//             <ul className="produk-list">
//                 {produk.map((item) => (
//                     <li key={item.id} className="produk-item">
//                         <strong>{item.nama}</strong> - Rp{item.harga}
//                         <div>
//                             <button className="edit-btn" onClick={() => handleEditClick(item)}>Edit</button>
//                             <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>

//             {/* Modal Edit Produk */}
//             {modalVisible && (
//                 <div className="modal">
//                     <h3>Edit Produk</h3>
//                     <form onSubmit={handleEditSubmit}>
//                         <label>Nama Produk:</label>
//                         <input
//                             type="text"
//                             value={editData.nama}
//                             onChange={(e) => setEditData({ ...editData, nama: e.target.value })}
//                             required
//                         />

//                         <label>Harga:</label>
//                         <input
//                             type="number"
//                             value={editData.harga}
//                             onChange={(e) => setEditData({ ...editData, harga: e.target.value })}
//                             required
//                         />

//                         <button type="submit">Simpan</button>
//                         <button onClick={() => setModalVisible(false)}>Batal</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ProdukList;

import "/src/components/style.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

function ProdukList() {
    const [produk, setProduk] = useState([]);
    const [editData, setEditData] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    // Fetch data dari API
    useEffect(() => {
        axios.get('http://localhost:3001/produk')
            .then((response) => {
                console.log("Data Produk:", response.data);
                setProduk(response.data);
            })
            .catch((error) => console.error("Error fetching produk:", error));
    }, []);

    // Handle Delete Produk dengan Konfirmasi
    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus produk ini?");
        if (confirmDelete) {
            axios.delete(`http://localhost:3001/produk/${id}`)
                .then(() => {
                    setProduk(produk.filter((p) => p.id !== id));
                    alert("Produk berhasil dihapus!");
                })
                .catch(err => console.error("Error deleting produk:", err));
        }
    };

    // Handle Edit Produk
    const handleEditClick = (item) => {
        setEditData(item);
        setModalVisible(true);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3001/produk/${editData.id}`, editData)
            .then(() => {
                setProduk(produk.map((p) => (p.id === editData.id ? editData : p)));
                setModalVisible(false);
                setEditData(null);
            })
            .catch(err => console.error("Error updating produk:", err));
    };

    return (
        <div className="container">
            <h2>Daftar Produk</h2>
            <ul className="produk-list">
                {produk.map((item) => (
                    <li key={item.id} className="produk-item">
                        <strong>{item.nama}</strong> - Rp{item.harga}
                        <div>
                            <button className="edit-btn" onClick={() => handleEditClick(item)}>Edit</button>
                            <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>

            {/* Modal Edit Produk */}
            {modalVisible && (
                <div className="modal">
                    <h3>Edit Produk</h3>
                    <form onSubmit={handleEditSubmit}>
                        <label>Nama Produk:</label>
                        <input
                            type="text"
                            value={editData.nama}
                            onChange={(e) => setEditData({ ...editData, nama: e.target.value })}
                            required
                        />

                        <label>Harga:</label>
                        <input
                            type="number"
                            value={editData.harga}
                            onChange={(e) => setEditData({ ...editData, harga: e.target.value })}
                            required
                        />

                        <button type="submit">Simpan</button>
                        <button onClick={() => setModalVisible(false)}>Batal</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ProdukList;
