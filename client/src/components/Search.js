
  import './Search.css';
  import React, { useState, useEffect } from 'react';
  import { Link } from 'react-router-dom';
  import axios from 'axios';
  
  function Search() {
    const [workshops, setWorkshops] = useState([]);
    const [editingWorkshop, setEditingWorkshop] = useState(null);
    const [editedWorkshop, setEditedWorkshop] = useState({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      instructor: '',
      logo: ''
    });
  
    useEffect(() => {
      fetchWorkshops();
    }, []);
  
    const fetchWorkshops = async () => {
      try {
        const response = await axios.get('http://localhost:5000/workshops');
        setWorkshops(response.data);
      } catch (error) {
        console.error('Error fetching workshops:', error);
      }
    };
  
    const handleDelete = async (title) => {
      try {
        await axios.delete(`http://localhost:5000/workshops/${title}`);
        alert('Workshop deleted successfully');
        fetchWorkshops(); // Refresh the workshops list
      } catch (error) {
        console.error('Error deleting workshop:', error);
      }
    };
  
    const handleEdit = (workshop) => {
      setEditingWorkshop(workshop.title);
      setEditedWorkshop({ ...workshop });
    };
  
    const handleEditChange = (e) => {
      const { name, value } = e.target;
      setEditedWorkshop((prev) => ({
        ...prev,
        [name]: value
      }));
    };
  
    const handleEditSubmit = async () => {
      try {
        await axios.put(`http://localhost:5000/workshops/${editingWorkshop}`, editedWorkshop);
        alert('Workshop updated successfully');
        setEditingWorkshop(null);
        fetchWorkshops(); // Refresh the workshops list
      } catch (error) {
        console.error('Error updating workshop:', error);
      }
    };
  
    return (
      <div style={{ fontFamily: 'cursive' }}>
        <div className="imageHome">
        {/*Navigation bar */}
        <ul class="nav justify-content-end">
          <li class="nav-item">
          <Link to='/Login'><a class="nav-link active" aria-current="page" href="#">Login</a></Link>
          </li>
          <li class="nav-item">
              <Link to='/'><a class="nav-link" href="#">Home</a></Link>
          </li>
          <li class="nav-item">
          <Link to='/Register'><a class="nav-link" href="#">Register</a></Link>
          </li> 
           
        </ul>
        <h1 className="artsync" style={{fontSize:'100px'}}>ArtSync</h1>
        <h3 className="artsync">Craft your Artistic journey</h3>
      </div>
      <br></br>
       {/*} <div className='workshopSearch'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XF0IHHYiNtZa0zVTcCDveP9rBhodtLOPlQ&s" style={{height:'300px'}}></img>
          <p><b>Company : </b>BeeMehandi</p>
          <p><b>Description :</b> Mehandi</p> 
          <p><b>Date :</b> 25/06/2024</p>
          <p><b>Time :</b> 10.30AM</p>
          <p><b>Location :</b> Madurai</p>
          <p><b>Instructor :</b> Aswini</p>
        </div>

        <div className='workshopSearch'>
        <img src="https://us.123rf.com/450wm/fantrazy/fantrazy2006/fantrazy200600024/148982079-planet-symbol-sign-of-jupiter-symbol-illustration-of-astrology-planet-jupiter-zodiac-and-astrology.jpg?ver=6" style={{height:'300px'}}></img>
          <p><b>Company : </b>Jupiter</p>
          <p><b>Description :</b> Photography</p>
          <p><b>Date :</b> 27/06/2024</p>
          <p><b>Time :</b> 10.30AM</p>
          <p><b>Location :</b> Madurai</p>
          <p><b>Instructor :</b> Santhosh</p>
        </div>*/}

        {workshops.map((workshop) => (
          <div key={workshop.title} className="workshopSearch">
            <img src={workshop.logo} style={{ height: '300px' }} alt={`${workshop.title} logo`} />
            <p style={{ paddingTop: '20px' }}>
              <b>Company: </b>
              {workshop.title}
            </p>
            <p>
              <b>Description: </b>
              {workshop.description}
            </p>
            <p>
              <b>Date: </b>
              {workshop.date}
            </p>
            <p>
              <b>Time: </b>
              {workshop.time}
            </p>
            <p>
              <b>Location: </b>
              {workshop.location}
            </p>
            <p>
              <b>Instructor: </b>
              {workshop.instructor}
            </p>
            <button onClick={() => handleDelete(workshop.title)} className='Searchbutton'>Delete</button>
            <button onClick={() => handleEdit(workshop)} className='Searchbutton'>Edit</button>
          </div>
        ))}
        {editingWorkshop && (
          <div className="editForm">
            <h2>Edit Workshop</h2>
            <label>Title</label><br />
            <input
              type="text"
              name="title"
              value={editedWorkshop.title}
              onChange={handleEditChange}
              disabled
            /><br /><br />
            <label>Description</label><br />
            <input
              type="textarea"
              name="description"
              value={editedWorkshop.description}
              onChange={handleEditChange}
            /><br /><br />
            <label>Date</label><br />
            <input
              type="date"
              name="date"
              value={editedWorkshop.date}
              onChange={handleEditChange}
            /><br /><br />
            <label>Time</label><br />
            <input
              type="time"
              name="time"
              value={editedWorkshop.time}
              onChange={handleEditChange}
            /><br /><br />
            <label>Location</label><br />
            <input
              type="text"
              name="location"
              value={editedWorkshop.location}
              onChange={handleEditChange}
            /><br /><br />
            <label>Instructor</label><br />
            <input
              type="text"
              name="instructor"
              value={editedWorkshop.instructor}
              onChange={handleEditChange}
            /><br /><br />
            <label>Logo URL</label><br />
            <input
              type="text"
              name="logo"
              value={editedWorkshop.logo}
              onChange={handleEditChange}
            /><br /><br />
            <button onClick={handleEditSubmit} className='Searchbutton'>Save</button>
            <button onClick={() => setEditingWorkshop(null)} className='Searchbutton'>Cancel</button>
          </div>
        )}
      </div>
    );
  }
  
  export default Search;
  