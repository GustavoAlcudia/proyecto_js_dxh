// Esperar un momento a que el div exista dentro del JSP cargado
setTimeout(() => {
  const grid = new dhx.Grid("usuarios_grid", {
    columns: [
      { id: "id", header: [{ text: "ID" }], width: 60 },
      { id: "nombre", header: [{ text: "Nombre" }], fillspace: true },
      { id: "email", header: [{ text: "Email" }], fillspace: true },
    ],
    autoWidth: true,
    selection: "row",
  });

  // Datos de ejemplo (puedes reemplazarlo por fetch a tu servlet)
  grid.data.parse([
    { id: 1, nombre: "Carlos", email: "carlos@example.com" },
    { id: 2, nombre: "Ana", email: "ana@example.com" },
    { id: 3, nombre: "Luis", email: "luis@example.com" },
  ]);
}, 200);
