const estudiantes = [
  { nombre: "Ana", edad: 20, notas: [80, 90, 70] },
  { nombre: "Luis", edad: 22, notas: [60, 65, 55] },
  { nombre: "Marta", edad: 19, notas: [100, 95, 90] }
];

// Nombres
const nombres = estudiantes.map(e => e.nombre);
console.log("👩‍🎓 Nombres:", nombres);

// Promedios
const promedios = estudiantes.map(e => {
  const suma = e.notas.reduce((a, n) => a + n, 0);
  return suma / e.notas.length;
});
console.log("📊 Promedios:", promedios);

// Estado aprobado/reprobado
const conEstado = estudiantes.map(e => {
  const promedio = e.notas.reduce((a, n) => a + n, 0) / e.notas.length;
  return { ...e, estado: promedio >= 70 ? "Aprobado" : "Reprobado" };
});
console.log("✅ Con estado:", conEstado);
