// // src/App.jsx
import React from 'react';
import TambahProduk from './components/TambahProduk';
import ProdukList from './components/ProdukList';
function App() {
return (
<div>
<h1>Aplikasi E-Commerce Sederhana</h1>
<TambahProduk />
<ProdukList />
</div>
);
}
export default App;



// DARI GPT
// import React, { useState, useEffect } from 'react';
// import TambahProduk from './components/TambahProduk';
// import ProdukList from './components/ProdukList';
// import axios from 'axios';

// function App() {
//   const [produk, setProduk] = useState([]);

//   // Fetch daftar produk dari server saat pertama kali dimuat
//   useEffect(() => {
//     axios.get('http://localhost:3001/produk')
//       .then((res) => setProduk(res.data))
//       .catch((err) => console.error("Error fetching produk:", err));
//   }, []);

//   // Fungsi untuk menambahkan produk baru ke state
//   const handleProdukTambah = (produkBaru) => {
//     setProduk([...produk, produkBaru]);
//   };

//   return (
//     <div>
//       <h1>Aplikasi E-Commerce Sederhana</h1>
//       <TambahProduk onProdukTambah={handleProdukTambah} />
//       <ProdukList produk={produk} />
//     </div>
//   );
// }

// export default App;
