class Login extends React.Component {
  state = { email: '' };

  handleChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  render = () => {
    return (
      <div className="card-body">
        <h5 className="card-title">Login</h5>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input onChange={(e) => this.handleChange(e)} value={this.state.email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput2" className="form-label">Password</label>
          <input type="email" className="form-control" id="exampleFormControlInput2" />
        </div>
        <button type="button" className="btn btn-primary btn-sm">Log In</button>
      </div>
    );
  };
}
