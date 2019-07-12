import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      apprenants: []
    };
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/apprenant">Home</Link>
            </li>
            <li>
              <Link to="/formateur">About</Link>
            </li>
            <li>
              <Link to="/module">Topics</Link>
            </li>
          </ul>

          <hr />
          <div className="main-route-place"> 
            <Route exact path="/" component={Apprenant} />
            <Route path="/apprenant" component={Apprenant} />
            <Route path="/formateur" component={Formateur} />
            <Route path="/module" component={Module} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

class Apprenant extends React.Component {
  constructor() {
    super();
    this.state = {
      apprenants: []
    };
  }
  componentDidMount() {
    fetch('https://localhost:8000/apprenant/liste_apprenants')
    .then(res => res.json())
    .then((data) => {
      this.setState({ apprenants: data.apprenants })
      console.log(this.state.apprenants)
    })
    .catch(console.log)
  }
  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <h1>Apprenants</h1>
          {this.state.apprenants.map((apprenant) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{apprenant.prenom} {apprenant.nom}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{apprenant.dateNaissance.date}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{apprenant.tel}</h6>
                <h6 className="card-subtitle mb-2 text-muted">{apprenant.email}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;