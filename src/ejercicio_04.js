const ventas = [
  { producto: "Laptop", cantidad: 2, precio: 1200, fecha: "2025-09-01" },
  { producto: "Mouse", cantidad: 10, precio: 25, fecha: "2025-09-02" },
  { producto: "Celular", cantidad: 3, precio: 900, fecha: "2025-09-03" }
];

// Total ingresos
const ingresos = ventas.reduce((acc, { cantidad, precio }) => acc + cantidad * precio, 0);
console.log("💵 Total ingresos:", ingresos);

// Producto más vendido
const masVendido = ventas.reduce((max, venta) => venta.cantidad > max.cantidad ? venta : max);
console.log("🏆 Más vendido:", masVendido);

// Promedio de venta
const promedio = ingresos / ventas.length;
console.log("📐 Promedio por transacción:", promedio);
