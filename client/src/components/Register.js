import './Register.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [instructor, setInstructor] = useState('');
  const [logo, setLogo] = useState('');
  const navigate=useNavigate();
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', {
        title,
        description,
        date,
        time,
        location,
        instructor,
        logo,
      });
      alert(response.data.message);
      navigate('/Search')
    } catch (error) {
      alert('Error registering workshop: ' + (error.response ? error.response.data.error : error.message));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setLogo(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="imageHome">
        {/*Navigation bar */}
        <ul class="nav justify-content-end">
          <li class="nav-item">
          <Link to='/Login'><a class="nav-link active" aria-current="page" href="#">Login</a></Link>
          </li>
          <li class="nav-item">
              <Link to='/Search'><a class="nav-link" href="#">Search</a></Link>
          </li>
          <li class="nav-item">
          <Link to='/Register'><a class="nav-link" href="#">Register</a></Link>
          </li> 
          <li class="nav-item">
          <Link to='/Profile'><a class="nav-link" href="#">Profile</a></Link>
          </li>  
        </ul>
        <h1 className="artsync" style={{fontSize:'100px'}}>ArtSync</h1>
        <h3 className="artsync">Craft your Artistic journey</h3>
      </div>
      <br></br>
      <div className="register">
        <h1 className='RegisterWorkshop'>Register Your Workshop</h1>
        <div className="regFields">
          <label>Title</label><br></br><input type="text" className="reginputfields" onChange={(e) => setTitle(e.target.value)} /><br></br>
          <label>Description</label><br></br><input type="textarea" className="reginputfields" onChange={(e) => setDescription(e.target.value)} /><br></br>
          <label>Date</label><br></br><input type="date" className="reginputfields" onChange={(e) => setDate(e.target.value)} /><br></br>
          <label>Time</label><br></br><input type="time" className="reginputfields" onChange={(e) => setTime(e.target.value)} /><br></br>
          <label>Location</label><br></br><input type="text" className="reginputfields" onChange={(e) => setLocation(e.target.value)} /><br></br>
          <label>Instructor</label><br></br><input type="text" className="reginputfields" onChange={(e) => setInstructor(e.target.value)} /><br></br>
          <label>Upload your company logo</label>
          <input type="file" id="img" className='file' name="img" accept="image/*" style={{marginLeft:'85px',paddingTop:'3px'}} onChange={handleFileChange} /><br></br>
          <button className='SubmitButton' onClick={handleSubmit}>Submit</button>
        </div>
      </div><br></br><br></br><br></br>
    </div>
  );
}

export default Register;

/*
import './Register.css';
import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [instructor, setInstructor] = useState('');
  const [logo, setLogo] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', {
        title,
        description,
        date,
        time,
        location,
        instructor,
        logo,
      });
      alert(response.data.message);
    } catch (error) {
      alert('Error registering workshop: ' + (error.response ? error.response.data.error : error.message));
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setLogo(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <div className="register">
        <h1 className='RegisterWorkshop'>Register Your Workshop</h1>
        <div className="regFields">
          <label>Title</label><br></br><input type="text" className="reginputfields" onChange={(e) => setTitle(e.target.value)} /><br></br>
          <label>Description</label><br></br><input type="textarea" className="reginputfields" onChange={(e) => setDescription(e.target.value)} /><br></br>
          <label>Date</label><br></br><input type="date" className="reginputfields" onChange={(e) => setDate(e.target.value)} /><br></br>
          <label>Time</label><br></br><input type="time" className="reginputfields" onChange={(e) => setTime(e.target.value)} /><br></br>
          <label>Location</label><br></br><input type="text" className="reginputfields" onChange={(e) => setLocation(e.target.value)} /><br></br>
          <label>Instructor</label><br></br><input type="text" className="reginputfields" onChange={(e) => setInstructor(e.target.value)} /><br></br>
          <label>Upload your company logo</label>
          <input type="file" id="img" className='file' name="img" accept="image/*" style={{marginLeft:'85px',paddingTop:'3px'}} onChange={handleFileChange} /><br></br>
          <button className='SubmitButton' onClick={handleSubmit}>Submit</button>
        </div>
      </div><br></br><br></br><br></br>
    </div>
  );
}

export default Register;
*/