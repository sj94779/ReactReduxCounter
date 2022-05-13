import changeTheNumber from "./counter";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,
    // changeTheBackground,
});

export default rootReducer;