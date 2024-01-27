import { createSlice} from "@reduxjs/toolkit"
import { DEFAULT_ITEMS } from "../data/items";
const bagSlice=createSlice({
  name:"bag",
  initialState:[],
  reducers:{
    addToBag:(state,action)=>{
      state.push(action.payload)
    },
    removeFromBag:(state,action)=>{
      // console.log(action.payload)
      let index=state.indexOf(action.payload);
      // console.log(index);
     state.splice(index,1);
    // return  state.filter(itemId=>{
    //   itemId!==action.payload
    //  })
    }
  }
})
export const bagAction=bagSlice.actions;
export default bagSlice;
