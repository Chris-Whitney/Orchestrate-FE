import React from "react";
import "../Styling/CreateGroup.css";

const CreateGroup = ({ handleClose }) => {
  return (
    <div className='popup-box'>
      <div className='box'>
        <span className='close-icon' onClick={handleClose}>
          x
        </span>
        {
          <>
            <form>
              <h1>New Group</h1>
              <div>
                <label htmlFor=''>Name of the Group : </label>
                <input type='text' />
              </div>

              <div>
                <label htmlFor=''>Your avatar: </label>
                <input type='text' />
              </div>
              <div>
                <label htmlFor=''>Main Contact :</label>
                <input type='text' />
              </div>
              <div>
                <label htmlFor=''>Email :</label>
                <input type='email' />
              </div>
              <button>create</button>
            </form>
          </>
        }
      </div>
    </div>
  );
};

export default CreateGroup;
