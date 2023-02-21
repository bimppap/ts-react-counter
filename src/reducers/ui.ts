import { ActionType } from "../actions";
import * as types from "../actions/ActionType";
import { ColorProps } from "../components/Color";

export function ui(state = new ColorProps(), action: ActionType): ColorProps {
  if (action.type === types.RANDOMIZE_COLOR) {
    return { colors: action.payload! };
  } else {
    return { colors: state.colors };
  }
}
