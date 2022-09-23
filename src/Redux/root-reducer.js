import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "./Categories/Categories-reducer";
import productsReducer from "./Products/Products-reducer";
import recommendedReducer from "./Recommended/Recommended-reducer";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  recommended: recommendedReducer,
  products: productsReducer,
  categories: categoriesReducer
});

export default persistReducer(persistConfig, rootReducer);