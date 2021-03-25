import React, { Fragment } from 'react';

const ReservationForm = () => {
  const renderForm = () => {
    return (
      <form>
        <div className='input-field'>
          <select
            className='browser-default'
            name='projectType'
            // value={projectType}
            // onChange={this.onChange}
          >
            <option value='0'>* Select Project Type Status</option>
            <option value='Front-end'>Front-end</option>
            <option value='Back-end'>Back-end</option>
            <option value='MERN'>MERN</option>
            <option value='Vanila JS'>Vanila JS</option>
            <option value='html'>HTML/CSS</option>
          </select>
          <small className='form-text'>How many people?</small>
        </div>
        <div className='input-field'>
          <select
            className='browser-default'
            name='projectType'
            // value={projectType}
            // onChange={this.onChange}
          >
            <option value='0'>* Select Project Type Status</option>
            <option value='Front-end'>Front-end</option>
            <option value='Back-end'>Back-end</option>
            <option value='MERN'>MERN</option>
            <option value='Vanila JS'>Vanila JS</option>
            <option value='html'>HTML/CSS</option>
          </select>
          <small className='form-text'>How many beds?</small>
        </div>
      </form>
    );
  };
  return (
    <Fragment>
      <h1>Book your room</h1>
      {renderForm()}
    </Fragment>
  );
};

export default ReservationForm;
