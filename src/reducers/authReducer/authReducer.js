import { produce } from "immer";
import { LOGOUT_SUCCESS, LOGIN_SUCCESS } from "types/auth";

const initialState: any = {};

export default (state = initialState, action = {}) =>
  produce(state, (draft) => {
    const { payload } = action;
    switch (action.type) {
      case LOGIN_SUCCESS:
        draft = payload;
      case LOGOUT_SUCCESS:
        draft = initialState;
      default:
        break;
    }
    return draft;
  });
