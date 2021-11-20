import { configureStore } from "@reduxjs/toolkit";

import UISlice from "./UISlice";
import CartSlice from "./CartSlice";

const store = configureStore({
  reducer: { ui: UISlice.reducer, cart: CartSlice.reducer },
});

export default store;
