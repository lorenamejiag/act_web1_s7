const inventario = [
  { id: 1, nombre: "Laptop", precio: 1200, categoria: "Electrónicos", stock: 5 },
  { id: 2, nombre: "Mouse", precio: 25, categoria: "Electrónicos", stock: 15 },
  { id: 3, nombre: "Silla", precio: 150, categoria: "Muebles", stock: 8 },
  { id: 4, nombre: "Libro", precio: 20, categoria: "Educación", stock: 12 },
  { id: 5, nombre: "Celular", precio: 900, categoria: "Electrónicos", stock: 7 }
];

const electronicos = inventario.filter(p => p.categoria === "Electrónicos");
console.log("⚡ Electrónicos:", electronicos);

const pocoStock = inventario.filter(p => p.stock < 10);
console.log("📉 Stock menor a 10:", pocoStock);

const caros = inventario.filter(p => p.precio > 500);
console.log("💸 Precio mayor a 500:", caros);
