import { createSlice} from "@reduxjs/toolkit"

const wishlistSlice=createSlice({
  name:"WishList",
  initialState:[],
  reducers:{
    addToWishlist:(state,action)=>{
      state.push(action.payload)
    },
    removeFromWishlist:(state,action)=>{
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
export const wishListAction=wishlistSlice.actions;
export default wishlistSlice;