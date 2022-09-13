import React, { useState} from 'react'
import DatePicker from 'react-date-picker';
import './App.css';

function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <div className='parent'>
        <button className='btn'>Date Picker
        <DatePicker className='picker' value={value}/>
        </button>
      </div>
      

    </div>
  );
}

export default App;
