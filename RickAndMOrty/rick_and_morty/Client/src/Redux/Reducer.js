
const initialState = {
    myFavorites: []
}


const Reducer = (state=initialState, action) => {
    switch (action.type){
        case 'AGREGAR_PERSONAJE':
            return {...state, myFavorites: [...state.myFavorites, action.payload]}

        
        case 'ELIMINAR_PERSONAJE':
            return {
                ...state,
            myFavorites: state.myFavorites.filter(
                (personaje) => personaje.id !== action.payload
            )   
        
            }
    

        default: return { ...state}
         
        
    }
}

export default Reducer;