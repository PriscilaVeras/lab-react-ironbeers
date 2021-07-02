import React from 'react';

import { Component } from 'react';
import axios from 'axios';

class SingleBeer extends Component {
  state = {
    id: '',
    image_url: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: '',
  };

  componentDidMount = async () => {
    try {
      const beerId = this.props.match.params.beerId;

      const response = await axios.get(
        `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
      );

      console.log(response);

      this.setState({ ...response.data });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <div className="card mb-3" style={{ maxWidth: '100vw' }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src={this.state.image_url}
                className="card-img-top"
                style={{ width: '3rem' }}
              />
              <div class="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{this.state.name} </h5>
                  <h6> {this.state.tagline}</h6>
                  <p className="card-text">
                    Created By: {this.state.contributed_by}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBeer;
