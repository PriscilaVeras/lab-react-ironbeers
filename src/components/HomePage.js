import React from 'react';
import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import newBeer from '../assets/new-beer.png';
import randomBeer from '../assets/random-beer.png';

function HomePage() {
  return (
    <div className="container mt-5 ">
      <div className="allBeers">
        <Link to={'/beers'} style={{ textDecoration: 'none', color: 'black' }}>
          <img src={beers} className="img-fluid" />
          <h2>All Beers</h2>{' '}
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ornare nisi ac nulla euismod cursus. Morbi in tortor nec velit
          vestibulum hendrerit in sollicitudin tortor. Nam ac tristique arcu.
          Sed pharetra, augue finibus consectetur pellentesque, nunc tellus
          ornare tellus, sit amet pulvinar est erat ut diam. Sed sagittis
          fermentum laoreet. Cras malesuada libero non feugiat ornare.
          Pellentesque facilisis pulvinar ex, id consectetur dui pharetra sed.
          Proin accumsan tortor quis elit lacinia tristique. Pellentesque
          sodales dui in urna feugiat, eu sollicitudin velit consectetur.
        </p>
      </div>
      <div className="randomBeer">
        <Link>
          <img src={randomBeer} className="img-fluid" />
        </Link>
        <h2>Random Beer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ornare nisi ac nulla euismod cursus. Morbi in tortor nec velit
          vestibulum hendrerit in sollicitudin tortor. Nam ac tristique arcu.
          Sed pharetra, augue finibus consectetur pellentesque, nunc tellus
          ornare tellus, sit amet pulvinar est erat ut diam. Sed sagittis
          fermentum laoreet. Cras malesuada libero non feugiat ornare.
          Pellentesque facilisis pulvinar ex, id consectetur dui pharetra sed.
          Proin accumsan tortor quis elit lacinia tristique. Pellentesque
          sodales dui in urna feugiat, eu sollicitudin velit consectetur.
        </p>
      </div>
      <div className="newBeer">
        <Link>
          <img src={newBeer} className="img-fluid" />
        </Link>
        <h2>New Beer</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          ornare nisi ac nulla euismod cursus. Morbi in tortor nec velit
          vestibulum hendrerit in sollicitudin tortor. Nam ac tristique arcu.
          Sed pharetra, augue finibus consectetur pellentesque, nunc tellus
          ornare tellus, sit amet pulvinar est erat ut diam. Sed sagittis
          fermentum laoreet. Cras malesuada libero non feugiat ornare.
          Pellentesque facilisis pulvinar ex, id consectetur dui pharetra sed.
          Proin accumsan tortor quis elit lacinia tristique. Pellentesque
          sodales dui in urna feugiat, eu sollicitudin velit consectetur.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
