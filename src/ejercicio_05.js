const usuarios = [
  { id: 1, nombre: "Ana", email: "ana@mail.com", activo: true },
  { id: 2, nombre: "Luis", email: "luis@mail.com", activo: false },
  { id: 3, nombre: "Marta", email: "marta@mail.com", activo: true }
];

console.log("🔎 Buscar por email:", usuarios.find(u => u.email === "ana@mail.com"));
console.log("📍 Posición por id:", usuarios.findIndex(u => u.id === 2));
console.log("⚠️ ¿Hay inactivos?:", usuarios.some(u => !u.activo));
console.log("✅ ¿Todos tienen email válido?:", usuarios.every(u => u.email.includes("@")));
