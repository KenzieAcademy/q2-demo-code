// create actions here
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const TOGGLE_COLOR = "TOGGLE_COLOR";
export const CREATE = "CREATE";

export function reducer(state, action) {
  //copy the counterlist
  const newCounterList = [...state.counterList];
  // copy the clicked counter object from our state
  const clickedCounterObject = { ...newCounterList[action.payload] };
  switch (action.type) {
    case INCREMENT:
      clickedCounterObject.count = clickedCounterObject.count + 1;
      newCounterList[action.payload] = clickedCounterObject;
      return {
        // don't forget to spread the old state when returning the new state 
        // so that we don't clear out our other state properties
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
        // an example of updating a list of objects with a new object
        counterList: [
          ...state.counterList,
          { count: 0, id: state.counterList.length, color: "red" },
        ],
      };
    default:
      return state;
  }
}
