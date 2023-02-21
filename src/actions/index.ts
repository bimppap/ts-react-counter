import * as types from "./ActionType";

export interface ActionType {
  type: string;
  payload?: number[];
}

// 액션 생성함수를 선언합니다
export const increase = (): ActionType => ({
  type: types.INCREASE,
});

export const decrease = (): ActionType => ({
  type: types.DECREASE,
});

export const randomizeColor = (): ActionType => ({
  type: types.RANDOMIZE_COLOR,
  payload: [
    Math.floor(Math.random() * 55 + 200),
    Math.floor(Math.random() * 55 + 200),
    Math.floor(Math.random() * 55 + 200),
  ],
  // 액션에 부가적으로 필요한 값을 payload 라는 이름으로 통일합니다
  // 이는 FSA (https://github.com/redux-utilities/flux-standard-action) 라는 규칙인데
  // 이 규칙을 적용하면 액션들이 모두 비슷한 구조로 이루어져있게 되어 추후 다룰 때도 편하고
  // 읽기 쉽고, 액션 구조를 일반화함으로써 액션에 관련돤 라이브러리를 사용 할 수 있게 해줍니다.
  // 다만, 무조건 꼭 따를 필요는 없습니다.
});
