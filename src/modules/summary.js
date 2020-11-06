// 액션 타입
const GET_SUMMARY = "GET_SUMMARY";

// 액션 생성 함수

export const getSummary = () => ({ type: GET_SUMMARY });

// 초기 상태
const initialState = {
  header: `불쑥 끼어든 차량에, 하루 전 수능 끝난 고등학생 '전신 마비'`,
  content: `수능 끝나고 대학갈 생각에 부풀어 있던 한 고등학생이 갑자기 끼어든
        차량으로 전신 마비가 되었습니다. 수술비를 모으고 있습니다. 여러분의
        도움이 필요합니다.`,
};

// 리듀서 선언

export default function summary(state = initialState, action) {
  switch (action.type) {
    case GET_SUMMARY:
      return state;

    default:
      return state;
  }
}
