import styled from "styled-components";
import Card from './Card';


export const DivCards = styled.div `
   display: flex;
   flex-wrap: wrap;
   flex-direction: row;
   justify-content: space-around;
   padding: 2em;
   border-radius: 15px;

`;

function Cards(props) {
   const { characters } = props;
   return (
   <DivCards>
      {characters.map((char)=>{
         return <Card id={char.id} name={char.name} species={char.species} gender= {char.gender} image={char.image} onClose={() => window.alert('Emulamos que se cierra la card')} />
      })}

   </DivCards>
)}

export default Cards; 