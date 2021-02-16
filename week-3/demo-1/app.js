class App extends React.Component {
  state = { showLogin: true }

  toggleLogin = () => {
    this.setState(state => ({
      showLogin: !state.showLogin
    }))
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4 offset-sm-4 mt-4">
              <Layout>
                {
                  this.state.showLogin ? <Login /> : <Signup />
                }
              </Layout>
            </div>
          </div>
        </div>
        <button onClick={this.toggleLogin} className="btn btn-primary">Toggle Form</button>
        <Footer />
      </div>
    );
  }
}
