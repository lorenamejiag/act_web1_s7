const inventario = [
  { id: 1, nombre: "Laptop", precio: 1200, categoria: "Electrónicos", stock: 5 },
  { id: 2, nombre: "Mouse", precio: 25, categoria: "Electrónicos", stock: 15 },
  { id: 3, nombre: "Silla", precio: 150, categoria: "Muebles", stock: 8 },
  { id: 4, nombre: "Libro", precio: 20, categoria: "Educación", stock: 12 },
  { id: 5, nombre: "Celular", precio: 900, categoria: "Electrónicos", stock: 7 }
];

console.log("📦 Inventario:", inventario);

// Total productos
console.log("🔢 Total productos:", inventario.length);

// Valor total inventario con reduce
const valorTotal = inventario.reduce((acc, { precio, stock }) => acc + precio * stock, 0);
console.log("💰 Valor total del inventario:", valorTotal);
