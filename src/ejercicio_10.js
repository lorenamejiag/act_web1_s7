// 🔟 Métodos de Objeto
const producto = {
  id: 1,
  nombre: "Laptop",
  precio: 1200,
  categoria: "Electrónicos"
};

console.log("Keys:", Object.keys(producto));
console.log("Values:", Object.values(producto));
console.log("Entries:", Object.entries(producto));

Object.entries(producto).forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});
