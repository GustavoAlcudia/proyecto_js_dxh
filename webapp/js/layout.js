// Crear layout principal
const layout = new dhx.Layout("layout_container", {
  type: "line",
  cols: [
    {
      id: "sidebar",
      width: 250,
      header: "Menú",
      collapsible: true,
      resizable: true,
      html: `
                <button id="btnUsuarios" class="dhx_btn dhx_btn--view_link" style="width:100%;margin:10px 0;">
                    Usuarios
                </button>
            `,
    },
    {
      id: "main",
      html: "<h2>Bienvenido</h2>",
    },
  ],
});

// Escuchar clic en Usuarios
document.addEventListener("click", function (e) {
  if (e.target.id === "btnUsuarios") {
    cargarPagina("usuarios.jsp");
  }
});

// Función para cargar contenidos en el panel principal
function cargarPagina(url) {
  fetch(url)
    .then((r) => r.text())
    .then((html) => {
      layout.getCell("main").setHTML(html);
    })
    .catch((err) => console.error("Error cargando página:", err));
}
