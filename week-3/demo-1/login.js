const { useState } = React;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="card-body">
      <h5 className="card-title">Login</h5>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">Email address</label>
        <input onChange={(e) => handleChange(e)} value={email} type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput2" className="form-label">Password</label>
        <input onChange={(e) => setPassword(e.target.value)} value={password} type="email" className="form-control" id="exampleFormControlInput2" />
      </div>
      <button type="button" className="btn btn-primary btn-sm">Log In</button>
    </div>
  );
}
