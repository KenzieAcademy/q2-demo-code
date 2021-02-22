import cat from '../images/cat-circle.png';

function Cat(props) {
  return (
    <div>
      <img
        src={cat}
        alt="cat circle"
        onClick={props.incrementPurrs}
      />
    </div>
  );
}

export default Cat;
