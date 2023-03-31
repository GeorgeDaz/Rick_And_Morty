const axios = require("axios");

const successH = (response, res) => {
  const { id, image, name, gender, species } = response.data;
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ id, name, gender, species, image }));
};

const errorH = (error, res) => {
  res.writeHead(500, { "Content-Type": "text/plain" });
  res.end(error.message);
};

// const URL_BASE = "https://be-a-rym.up.railway.app/api";
// const KEY = "1b73a06a2f44.1aab0572d3646cf79a31";

// axios(`${URL_BASE}/character/${detailId}?key=${KEY}`)

const getCharById = (res, id) => {
  const URL_BASE = "https://be-a-rym.up.railway.app/api";
  const KEY = "1b73a06a2f44.1aab0572d3646cf79a31";

  axios
    .get(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => successH(response, res))
    .catch((error) => errorH(error, res));
};

module.exports = getCharById;

// const getCharById = (res, id) => {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//       const char = {
//         name: response.data.name,
//         gender: response.data.gender,
//         scecies: response.data.species,
//         origin: response.data.image,
//         status: response.data.status,
//       };
//       res.writeHead(200, { "content-type": "aplication/json" });
//       res.end(JSON.stringify(char));
//       console.log(char);
//     })
//     .catch((error) => {
//       res.writeHead(500, { "content-type": "text/plain" });
//       res.end(error.message);
//     });
// };

// module.exports = getCharById;
