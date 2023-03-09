import styled from "styled-components";


export const DivCard = styled.div `
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
export const Botones = styled.button `
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
export const DivChar = styled.div `
      margin-top: 30px;
      font-size: 7px;
      text-align: center;
`

export const Imagen = styled.img `
      width: 100px;
      border-radius: 10px;
`

function Card({name, species, gender, image, onClose}) {
   return (
      <DivCard>
            <Botones onClick={onClose}>X</Botones>
         <DivChar>
            <Imagen src={image} alt={''} />
            <h2>Nombre: {name}</h2>
            <h2>Especie: {species}</h2>
            <h2>Género: {gender}</h2>
         </DivChar>
      </DivCard>
   );
}
export default Card;
