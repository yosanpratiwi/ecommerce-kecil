// import "/src/components/style.css";
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function ProdukList() {
//     const [produk, setProduk] = useState([]);
//     const [editData, setEditData] = useState(null);
//     const [modalVisible, setModalVisible] = useState(false);
    
//     useEffect(() => {
//         axios.get('http://localhost:3001/produk')
//         .then((response) => setProduk(response.data))
//         .catch((error) => console.error(error));
//     }, []);
    
//     const handleDelete = (id) => {
//         axios.delete(`http://localhost:3001/produk/${id}`)
//         .then(() => {
//             setProduk(produk.filter((p) => p.id !== id));
//         })
//         .catch(err => console.error(err));
//     };
    
//     const handleEditClick = (item) => {
//         setEditData(item);
//         setModalVisible(true);
//     };
    
//     const handleEditSubmit = (e) => {
//         e.preventDefault();
//         axios.put(`http://localhost:3001/produk/${editData.id}`, editData)
//         .then(() => {
//             setProduk(produk.map((p) => (p.id === editData.id ? editData : p)));
//             setModalVisible(false);
//             setEditData(null);
//         })
//         .catch(err => console.error(err));
//     };
    
//     return (
//         <div>
//             <h2>Daftar Produk</h2>
//             <ul>
//                 {produk.map((item) => (
//                     <li key={item.id}>
//                         {item.nama} - Rp{item.harga}
//                         <button onClick={() => handleEditClick(item)}>Edit</button>
//                         <button onClick={() => handleDelete(item.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//             {modalVisible && (
//                 <div className="modal">
//                     <h3>Edit Produk</h3>
//                     <form onSubmit={handleEditSubmit}>
//                         <label>Nama:</label>
//                         <input type="text" value={editData.nama} onChange={(e) => setEditData({...editData, nama: e.target.value})} required />
//                         <label>Harga:</label>
//                         <input type="number" value={editData.harga} onChange={(e) => setEditData({...editData, harga: e.target.value})} required />
//                         <button type="submit">Simpan</button>
//                         <button onClick={() => setModalVisible(false)}>Batal</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ProdukList;


// import "/src/components/style.css";
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function ProdukList() {
//     const [produk, setProduk] = useState([]);
//     const [editData, setEditData] = useState(null);
//     const [modalVisible, setModalVisible] = useState(false);
    
//     // Fetch data produk saat komponen dimuat
//     useEffect(() => {
//         console.log("Fetching data produk...");
//         axios.get('http://localhost:3001/produk')
//         .then((response) => {
//             console.log("Data produk diterima:", response.data);
//             setProduk(response.data);
//         })
//         .catch((error) => console.error("Error fetching produk:", error));
//     }, []);
    
//     // Hapus produk
//     const handleDelete = (id) => {
//         console.log(`Menghapus produk dengan ID: ${id}`);
//         axios.delete(`http://localhost:3001/produk/${id}`)
//         .then(() => {
//             console.log(`Produk dengan ID: ${id} berhasil dihapus`);
//             setProduk(produk.filter((p) => p.id !== id));
//         })
//         .catch(err => console.error("Error deleting produk:", err));
//     };
    
//     // Klik tombol edit
//     const handleEditClick = (item) => {
//         console.log("Mengedit produk:", item);
//         setEditData(item);
//         setModalVisible(true);
//     };
    
//     // Submit perubahan edit
//     const handleEditSubmit = (e) => {
//         e.preventDefault();
//         console.log("Mengirim update produk:", editData);
//         axios.put(`http://localhost:3001/produk/${editData.id}`, editData)
//         .then(() => {
//             console.log("Produk berhasil diperbarui:", editData);
//             setProduk(produk.map((p) => (p.id === editData.id ? editData : p)));
//             setModalVisible(false);
//             setEditData(null);
//         })
//         .catch(err => console.error("Error updating produk:", err));
//     };
    
//     return (
//         <div>
//             <h2>Daftar Produk</h2>
//             <ul>
//                 {produk.map((item) => (
//                     <li key={item.id}>
//                         {item.nama} - Rp{item.harga}
//                         <button onClick={() => handleEditClick(item)}>Edit</button>
//                         <button onClick={() => handleDelete(item.id)}>Delete</button>
//                     </li>
//                 ))}
//             </ul>
//             {modalVisible && (
//                 <div className="modal">
//                     <h3>Edit Produk</h3>
//                     <form onSubmit={handleEditSubmit}>
//                         <label>Nama:</label>
//                         <input 
//                             type="text" 
//                             value={editData.nama} 
//                             onChange={(e) => {
//                                 console.log("Nama produk diubah:", e.target.value);
//                                 setEditData({...editData, nama: e.target.value});
//                             }} 
//                             required 
//                         />
//                         <label>Harga:</label>
//                         <input 
//                             type="number" 
//                             value={editData.harga} 
//                             onChange={(e) => {
//                                 console.log("Harga produk diubah:", e.target.value);
//                                 setEditData({...editData, harga: e.target.value});
//                             }} 
//                             required 
//                         />
//                         <button type="submit">Simpan</button>
//                         <button onClick={() => {
//                             console.log("Edit dibatalkan");
//                             setModalVisible(false);
//                         }}>Batal</button>
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

    // Handle Delete Produk
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/produk/${id}`)
            .then(() => {
                setProduk(produk.filter((p) => p.id !== id));
            })
            .catch(err => console.error("Error deleting produk:", err));
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

