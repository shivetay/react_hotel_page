import React from 'react';
import { Link } from 'react-router-dom';

import './Offer.scss';

import photo1 from '../../../Images/offer_1.jpg';
import photo2 from '../../../Images/offer2.jpg';

import photo3 from '../../../Images/offer3.jpg';

function Offer() {
  return (
    <section className='Offer'>
      <div className='Offer__Card'>
        <div className='Offer__Content'>
          <div className='Offer__Image'>
            <img src={photo1} alt='card_show' />
          </div>
          <div className='Offer__Content-text'>
            <h3>Card 1</h3>
            <p>Card 1 text</p>
            <Link to='/'>
              <button>Rooms</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='Offer__Card'>
        <div className='Offer__Content'>
          <div className='Offer__Image'>
            <img src={photo2} alt='card_show' />
          </div>
          <div className='Offer__Content-text'>
            <h3>Card 2</h3>
            <p>Card 2 text</p>
            <Link to='/'>
              <button>Rooms</button>
            </Link>
          </div>
        </div>
      </div>
      <div className='Offer__Card'>
        <div className='Offer__Content'>
          <div className='Offer__Image'>
            <img src={photo3} alt='card_show' />
          </div>
          <div className='Offer__Content-text'>
            <h3>Card 3</h3>
            <p>Card 3 text</p>
            <Link to='/'>
              <button>Rooms</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offer;
