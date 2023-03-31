const http = require("http");
const getCharById = require("./controllers/getCharById");
const getCharDetail = require("./controllers/getCharDetail");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    if (url.includes("onsearch")) {
      const id = url.split("/").at(-1);
      getCharById(res, id);
    }

    if (url.includes("detail")) {
      const id = url.split("/").at(-1);
      getCharDetail(res, id);
    }
  })
  .listen(3001, "localhost");

// const http = require("http");
// const getCharById = require("./controllers/getCharById");

// const server = http.createServer(async (req, res) => {
//   if (req.url.includes("/rickandmorty/character")) {
//     const id = req.url.split("/").pop();
//     if (id) {
//       res.setHeader("Access-Control-Allow-Origin", "*");
//       try {
//         const character = await getCharById(res, id);
//         res.statusCode = 200;
//         res.setHeader("Content-Type", "application/json");
//         res.end(JSON.stringify(character));
//       } catch (err) {
//         res.statusCode = 500;
//         res.setHeader("Content-Type", "text/plain");
//         res.end(err.message);
//       }
//     } else {
//       res.statusCode = 404;
//       res.end("Personaje no encontrado");
//     }
//   } else {
//     res.statusCode = 200;
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.end();
//   }
// });

// server.listen(3001, () => {
//   console.log("Servidor corriendo en http://localhost:3001/");
// });
//***************************************************************************************! */
// const http = require("http");
// // const data = require("./utils/data");
// const getCharById = require("./controllers/getCharById");

// const server = http.createServer((req, res) => {
//   if (req.url.includes("/rickandmorty/character")) {
//     const id = req.url.split("/").pop();
//     id = parseInt(id);
//     // const character = data.find((char) => char.id === parseInt(id));

//     if (id) {
//       res.setHeader("Access-Control-Allow-Origin", "*");
//       const character = getCharById(res, id);
//       res.end(JSON.stringify(character));
//     } else {
//       res.statusCode = 404;
//       res.end("Personaje no encontrado");
//     }
//   } else {
//     res.statusCode = 200;
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.end();
//   }
// });

// server.listen(3001, () => {
//   console.log("Servidor corriendo en http://localhost:3001/");
// });
