
const initialState=[
   {
      id:0,
      name:"kajal",
      email:"kaja@gmail.com",
      phone:1234567654
   },
   {
      id:1,
      name:"sai",
      email:"test@gmail.com",
      phone:5446345676
   },
   {
      id:2,
      name:"kamal",
      email:"kamal@gmail.com",
      phone:7658967856
   }
]

const contactReducer=(state=initialState, action)=>{
   switch (action.type){
      case "ADD_CONTACT":
         state=[...state,action.payload];
         return state;
         case "UPDATE_CONTACT":
const updateState= state.map(contact=> 
   contact.id === action.payload.id? action.payload:contact
   );
   state =updateState;
   return state;
   case "DELETE_CONTACT":
   const filterDetail= state.filter(contact=> contact.id !== action.payload && contact);
   state=filterDetail;
   return state;
      default:
         return state;
   }
}

export default contactReducer;
