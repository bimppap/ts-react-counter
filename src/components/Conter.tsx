import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase, randomizeColor } from "../actions";
import { Control } from "../components/Control";
import { RootState } from "../reducers";
import { Color } from "./Color";
import { Value } from "./Value";

export function Counter() {
  // 상태를 조회합니다. 상태를 조회 할 때에는 state 의 타입을 RootState 로 지정해야합니다.
  const count = useSelector((state: RootState) => state.counter.count);
  const colors = useSelector((state: RootState) => state.ui.colors);
  const dispatch = useDispatch(); // 디스패치 함수를 가져옵니다

  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onRandomizeColor = () => {
    dispatch(randomizeColor());
  };

  return (
    <div style={Color({ colors })}>
      <Value count={count} />
      <Control
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onRandomizeColor={onRandomizeColor}
      />
    </div>
  );
}
