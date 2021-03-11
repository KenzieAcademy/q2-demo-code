export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const TOGGLE_COLOR = "TOGGLE_COLOR";
export const CREATE = "CREATE";

export function reducer(state, action) {
  const newCounterList = [...state.counterList];
  const clickedCounterObject = { ...newCounterList[action.payload] };
  switch (action.type) {
    case INCREMENT:
      clickedCounterObject.count = clickedCounterObject.count + 1;
      newCounterList[action.payload] = clickedCounterObject;
      return {
        ...state,
        counterList: newCounterList,
      };
    case DECREMENT:
      clickedCounterObject.count = clickedCounterObject.count - 1;
      newCounterList[action.payload] = clickedCounterObject;
      return {
        ...state,
        counterList: newCounterList,
      };
    case TOGGLE_COLOR:
      clickedCounterObject.color =
        clickedCounterObject.color === "red" ? "black" : "red";
      newCounterList[action.payload] = clickedCounterObject;
      return {
        ...state,
        counterList: newCounterList,
      };
    case CREATE:
      return {
        ...state,
        counterList: [
          ...state.counterList,
          { count: 0, id: state.counterList.length, color: "red" },
        ],
      };
    default:
      return state;
  }
}
