// 모든 액션 겍체들에 대한 타입을 준비해줍니다.

import { ActionType } from "../actions";
import { DECREASE, INCREASE } from "../actions/ActionType";
import { ValueProps } from "../components/Value";

export default function counter(
  state: ValueProps = new ValueProps(),
  action: ActionType
): ValueProps {
  switch (action.type) {
    case INCREASE: // case 라고 입력하고 Ctrl + Space 를 누르면 어떤 종류의 action.type들이 있는지 확인 할 수 있습니다.
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
}
