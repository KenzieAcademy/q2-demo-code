class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { rate: 10 };
    // this.increase = this.increase.bind(this)
  }

  componentDidMount() {
    console.log("Ran component did mount");
  }

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
    console.log(`Ran render method`, this);
    const { age, species, image } = this.props.person;
    // this.props.person = {age: 100, species: "Cool guy", image: "./header.webp"}
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
        {this.state.rate > 10 ? (
          <h1>Wow that rating is so high</h1>
        ) : (
          <h1>Wow that rating stinks</h1>
        )}
      </div>
    );
  };
}
