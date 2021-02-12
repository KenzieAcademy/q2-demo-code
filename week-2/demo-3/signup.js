class Signup extends React.Component {
  state = {};

  render = () => {

    return (
      <div className="card-body">
        <h5 className="card-title">Signup</h5>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Name</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput2" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput3" className="form-label">Password</label>
          <input type="email" className="form-control" id="exampleFormControlInput3" />
        </div>
        <button type="button" className="btn btn-primary btn-sm">Sign Up</button>
      </div>
    );
  };
}
