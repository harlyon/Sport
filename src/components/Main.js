import React, { Component } from 'react';
import Navigation from './Navigation';
import axios from "axios";
import { Container } from "reactstrap";

class Main extends Component {
  state = {
    sportsList: ''
  }

  componentDidMount() {
    this.getAllSports();
  }


  getAllSports = () => {
    axios.get('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
      .then(res => {
        this.setState({ sportsList: res.data.sports });
        console.log(res.data.sports);
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
                  <div key={item.idSport} className="col-md-4" style={{ marginBottom: "2rem" }}>
                    <div className="news_box">
                      <img className="news_box-img" src={item.strSportThumb} alt="sports" />
                      <div className="news_text">
                      <p className="news_subtitle">
                        <span>{item.strSportDescription.lenght < 90 ? `${item.strSportDescription}` : `${item.strSportDescription.substring(0,85)}.........`}</span>
                        </p>
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