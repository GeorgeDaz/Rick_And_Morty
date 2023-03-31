import axios from "axios";

export const agregarPersonaje = (id) => {
  return {
    type: "AGREGAR_PERSONAJE",
    payload: id,
  };
};

export const eliminarPersonaje = (id) => {
  return {
    type: "ELIMINAR_PERSONAJE",
    payload: id,
  };
};

export const getFavorites = () => {
  return async function (dispatch) {
    const URL_BASE = "http://localhost:3001";
    const response = await axios.get(`${URL_BASE}/rickandmorty/fav`);
    dispatch({ type: "GET_FAVORITES", payload: response.data });
  };
};

export const removeFavorite = (id) => {
  return { type: "REMOVE_FAVORITE", payload: id };
};
