// 9️⃣ Desestructuración de Objetos
const persona = {
  nombre: "Carlos",
  edad: 30,
  direccion: { ciudad: "Bogotá", pais: "Colombia" },
  contacto: { email: "carlos@mail.com", telefono: "123456" }
};

// Básica
const { nombre, edad } = persona;
console.log("Nombre:", nombre, "Edad:", edad);

// Renombrado
const { nombre: nombreCompleto } = persona;
console.log("Renombrado:", nombreCompleto);

// Valores por defecto
const { profesion = "Sin definir" } = persona;
console.log("Profesión:", profesion);

// Anidada
const { direccion: { ciudad, pais } } = persona;
console.log("Ciudad:", ciudad, "País:", pais);

// Rest operator
const { contacto, ...otros } = persona;
console.log("Contacto:", contacto, "Otros:", otros);
