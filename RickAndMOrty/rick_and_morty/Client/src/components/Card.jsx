import styled from "styled-components";
import { Link } from "react-router-dom";
import { agregarPersonaje, eliminarPersonaje } from "../Redux/Actions";
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { removeFavorite, getFavorites } from "../Redux/Actions";
import axios from "axios";
import React from "react";


export const DivCard = styled.div`
      background-color: rgba(151, 141, 141, 0.75);
      width: fit-content;
      padding: 1em;
      border-radius: 10px;
      box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
      /* text-shadow: 6px 4px 7px rgba(0,0,0,0.6); */
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      position: relative;
      
      `;
export const Botones = styled.button`
      border:0px;
      background-color: rgb(198, 15, 15);
      height: fit-content;
      border-radius: 15px;
      transition: 0.5s;    
      color: white;
      margin-bottom: 20px;
      position: absolute;
      right: 10px;
      `;
export const DivChar = styled.div`
      margin-top: 30px;
      font-size: 7px;
      text-align: center;
`
export const Imagen = styled.img`
      width: 100px;
      border-radius: 10px;
`


const Card = ({ id, name, species, gender, image, onClose }) => {

      const [isFav, setIsFav] = useState({ status: false, });
      // const dispatch = useDispatch();

      // const addFavorite = (character) => {
      //       axios
      //             .post("http://localhost:3001/rickandmorty/fav", character)
      //             .then((res) => console.log("ok"));
      // };

      // const removeFavorite = async (id) => {
      //       await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      //       dispatch(getFavorites());
      //       alert("Eliminado con éxito");
      // };

      // const handleFavorite = () => {
      //       if (isFav) {
      //             setIsFav(false);
      //             removeFavorite(id);
      //       } else {
      //             setIsFav(true);
      //             //
      //             addFavorite({
      //                   id,
      //                   name,
      //                   species,
      //                   gender,
      //                   image,
      //             });
      //       }
      // };

      // useEffect(() => {
      //       myFavorites.forEach((fav) => {
      //             if (fav.id === id) {
      //                   setIsFav(true);
      //             }
      //       });
      // }, [myFavorites]);

      return (
            <DivCard>
                  {/* {isFav ? (
                        <button onClick={handleFavorite}>❤️</button>
                  ) : (
                        <button onClick={handleFavorite}>🤍</button>
                  )} */}
                  <Botones onClick={() => onClose(id)}>X</Botones>
                  {/* onClick={() => onClose(id) */}
                  <DivChar>
                        <Imagen src={image} alt={''} />
                        {/* <h2>Nombre: {name}</h2> */}
                        <Link to={`/detail/${id}`}> <h2> {name}</h2> </Link>
                        <h2>Especie: {species}</h2>
                        <h2>Género: {gender}</h2>
                  </DivChar>
            </DivCard>
      );
}

// const mapDispatchToProps = (dispatch) => {
//       return {
//             removeFavorite: (id) => {
//                   dispatch(removeFavorite(id));
//             },
//       };
// };

// const mapStateToProps = (state) => {
//       return {
//             myFavorites: state.myFavorites,
//       };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Card);

const mapDispatchToProps = (dispatch) => {
      return {
            agregarPersonaje: () => {
                  dispatch(agregarPersonaje())
            },
            eliminarPersonaje: () => {
                  dispatch(eliminarPersonaje())
            }

      }
}

export default connect(null, mapDispatchToProps)(Card);
