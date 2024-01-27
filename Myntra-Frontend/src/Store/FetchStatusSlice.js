import { createSlice} from "@reduxjs/toolkit"

const FetchStatusSlice=createSlice({
  name:"FetchStatus",
  initialState:{
     fetchDone:false,//"false-pending and true-Done"
     currentlyFetching:false
  },
  reducers:{
    markFetchDone:(state)=>{
    return state.fetchDone=true;
    },
    MarkFetchingStarted:(state)=>{
      return state.currentlyFetching=true;
    },
    MarkFetchingFinished:(state)=>{
      return state.currentlyFetching=false;
    }
  }
})
export const FetchStatusAction=FetchStatusSlice.actions;
export default FetchStatusSlice;