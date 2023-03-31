import styled from "styled-components";
import { useState } from "react";

export const SearchInput = styled.input `
      border: 0px;
      border-radius: 15px 0px 0px 15px;
      height: 3em;
      padding-left: 10px;
      outline: 0;
`

export const BotonSearch = styled.button `
   border: 0px;
   border-radius:0px 15px 15px 0px;
   background-color: #e0e0e0;
   height: 3em;
`
export const Barra = styled.div `
   display: flex;
   flex-direction: row;

`
const SearchBar = (props) => {
   const [id, setId] = useState("");
 
   const handleChange = (event) => {
     setId(event.target.value);
   };
 
   return (
     <Barra>
       <SearchInput type="text" onChange={handleChange} />
       <BotonSearch onClick={() => {props.onSearch(id);}}> Agregar </BotonSearch>
     </Barra>
   );
 };

export default SearchBar;
