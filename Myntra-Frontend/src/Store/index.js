import {configureStore, createSlice} from "@reduxjs/toolkit"
import itemsSlice from "./ItemSlice";
import FetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./bagSlice";
import wishlistSlice from "./wishListSlice";


const myntraStore=configureStore({reducer:{items:itemsSlice.reducer,FetchStatus:FetchStatusSlice.reducer,bag:bagSlice.reducer,WishList:wishlistSlice.reducer},})
export default myntraStore;