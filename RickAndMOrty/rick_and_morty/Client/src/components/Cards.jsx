import styled from "styled-components";
import Card from './Card';
import { useDispatch } from "react-redux";
import { getFavorites } from "../Redux/Actions";
import { useEffect } from "react";

export const DivCards = styled.div`
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   justify-content: space-around;
   padding: 2em;
   border-radius: 15px;

`;

function Cards({ characters, onClose }) {
   // const dispatch = useDispatch();

   // useEffect(() => {
   //    dispatch(getFavorites());
   // }, []);
   return (
      <DivCards>
         {characters.map((char) => {
            return (<Card
               key={char.id}
               id={char.id}
               name={char.name}
               species={char.species}
               gender={char.gender}
               image={char.image}
               onClose={onClose} />
            );
         })}

      </DivCards>
   )
}

export default Cards; 