import { combineReducers, createStore } from "redux";
import dialogReduser from "./dialogReduser";
import profileReduser from "./profileReduser";


let redusers = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogReduser
})
let store = createStore(redusers)

export default store