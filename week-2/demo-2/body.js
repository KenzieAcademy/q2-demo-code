class Body extends React.Component {
  state = { rate: 10 };

  increase = () => {
    if (this.state.rate < 20) {
      this.setState((state) => ({ rate: state.rate + 1 }));
    }
  };

  decrease = () => {
    if (this.state.rate > 0) {
      this.setState((state) => ({ rate: state.rate - 1 }));
    }
  };

  render = () => {
    const { age, species, image } = this.props.person;
    const { rate } = this.state;

    return (
      <div className="Body">
        <img src={image} />
        <h1>Age: {age}</h1>
        <h1>Species: {species}</h1>
        <p>Rating: {rate}</p>
        <div>
          <button onClick={this.increase}>+</button>
          <button onClick={this.decrease}>-</button>
        </div>
      </div>
    );
  };
}
