import React, { Component } from 'react';

class App extends Component {
  state = {
    apprenants: []
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
                <h6 className="card-subtitle mb-2 text-muted">{apprenant.dateNaissance.date.toLocaleDateString()}</h6>
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