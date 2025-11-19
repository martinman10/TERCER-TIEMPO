  const famososPorTematica = {
  todos: famosos.map(f => f.nombre),
  
  Uruguay: ["Agustín Canobbio", , "Alfonso Espino","Álvaro Recoba", "Brian Rodríguez", "Bruno Arady", ]
};

window.famososPorTematica = famososPorTematica;

// =========================================================
// INSERCIÓN AL FINAL DE tematicas.js
// Esto permite que el servidor de Node.js pueda importar el objeto de temáticas
// =========================================================
module.exports = { famososPorTematica };
