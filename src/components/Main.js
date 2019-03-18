import React, { Component } from 'react';
import Navigation from './Navigation';
import axios from "axios";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

class Main extends Component {
  state = {
    sportsList: []
  }

  componentDidMount() {
    this.getAllSports();
  }


  getAllSports = () => {
    axios.get('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
      .then(res => {
        this.setState({ sportsList: res.data.leagues });
        // console.log(res.data.leagues);
    })
  }
  render() {
    return (
      <div>
        <Navigation />
        <Container>
          <div className="text-center main">
            <h1>All Sports</h1>
            <h4>Sports Arena is an application which showcases all informations on sports latest updates, leagues information and fixtures ............
            </h4>
          </div>
          <div className="row">
            {
              this.state.sportsList && this.state.sportsList.map(item => {
                return (
                  <div key={item.idLeague} className="col-md-4" style={{ marginBottom: "2rem" }}>
                    <div className="box">
                      <h5 className="box-img">{item.strLeague}</h5>
                      <div className="text">
                      <h6 className="subtitle"><Link to={`/${item.idLeague}`}>{item.strSport}</Link></h6>
                        </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </Container>

      </div>
    );
  }
}

export default Main;