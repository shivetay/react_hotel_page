import React from 'react';

import './Facilities.scss';

const Facilities = () => {
  return (
    <section className='Facilities'>
      <div className='Facilities__Card'>
        <div className='Facilities__Img'>
          <img
            src='https://images.unsplash.com/photo-1508253730651-e5ace80a7025?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
            alt='bar_preview'
          />
        </div>
        <div className='Facilities__Description'>
          <h2>Check our vide selection of drinks</h2>
        </div>
      </div>
      <div className='Facilities__Card'>
        <div className='Facilities__Img'>
          <img
            src='https://images.unsplash.com/photo-1518187135417-c9032b0d416a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
            alt='veiw_preview'
          />
        </div>
        <div className='Facilities__Description'>
          <h2>Crazy views outside</h2>
        </div>
      </div>
      <div className='Facilities__Card'>
        <div className='Facilities__Img'>
          <img
            src='https://images.unsplash.com/photo-1566805073441-d4a4b422bd96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            alt='hike_preveiw'
          />
        </div>
        <div className='Facilities__Description'>
          <h2>There is alwasy something to do here</h2>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
