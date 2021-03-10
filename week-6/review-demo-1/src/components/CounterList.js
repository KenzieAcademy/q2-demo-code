import Counter from "./Counter";

export default function CounterList(props) {
  return props.counterList.map((counterObj, index) => {
    return (
      <Counter
        count={counterObj.count}
        color={counterObj.color}
        dispatch={props.dispatch}
        key={index}
        id={index}
      />
    );
  });
}
