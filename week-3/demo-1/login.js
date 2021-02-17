const { useState, useEffect } = React;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var myTimer = setInterval(() => {
    console.log("goodbye");
  }, 1000);

  // this is basically componentDidMount()
  useEffect(() => {
    console.log("Hello from useEffect (componentDidMount)");
  }, []);

  // componentDidUpdate()
  useEffect(() => {
    console.log("Hello from useEffect (componentDidUpdate)");
  });

  const myFun = () => {
    console.log("Hello from unmount");
    clearInterval(myTimer);
  }

  // componentWillUnmount()
  useEffect(() => {
    return myFun;
  });

  return (
    <div className="card-body">
      {console.log("Hello from render")}
      <h5 className="card-title">Login</h5>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput2" className="form-label">
          Password
        </label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="email"
          className="form-control"
          id="exampleFormControlInput2"
        />
      </div>
      <button type="button" className="btn btn-primary btn-sm">
        Log In
      </button>
    </div>
  );
};

// class Login extends React.Component {
//   state = {
//     email: "",
//     password: "",
//   };

//   componentDidMount(){
//       console.log("hello from component did mount")
//   }

//   render() {
//       console.log("hello from render")
//     return (
//       <div className="card-body">
//         <h5 className="card-title">Login</h5>
//         <div className="mb-3">
//           <label for="exampleFormControlInput1" className="form-label">
//             Email address
//           </label>
//           <input
//             onChange={(e) => this.setState({ email: e.target.value })}
//             value={this.state.email}
//             type="email"
//             className="form-control"
//             id="exampleFormControlInput1"
//             placeholder="name@example.com"
//           />
//         </div>
//         <div className="mb-3">
//           <label for="exampleFormControlInput2" className="form-label">
//             Password
//           </label>
//           <input
//             onChange={(e) => this.setState({ password: e.target.value })}
//             value={this.state.password}
//             type="email"
//             className="form-control"
//             id="exampleFormControlInput2"
//           />
//         </div>
//         <button type="button" className="btn btn-primary btn-sm">
//           Log In
//         </button>
//       </div>
//     );
//   }
// }
