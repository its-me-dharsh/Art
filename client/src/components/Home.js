import './Home.css'
import React from 'react';
import { Link } from 'react-router-dom';
function Home() {

    return (
    <div style={{fontFamily:"cursive"}}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      
      <div className="imageHome">
        {/*Navigation bar */}
        <ul class="nav justify-content-end">
        <li class="nav-item">
          <Link to='/SignUp'><a class="nav-link active" aria-current="page" href="#">SignUp</a></Link>
          </li>
          <li class="nav-item">
          <Link to='/Login'><a class="nav-link active" aria-current="page" href="#">Login</a></Link>
          </li>
          <li class="nav-item">
              <Link to='/Search'><a class="nav-link" href="#">Search</a></Link>
          </li>
          <li class="nav-item">
          <Link to='/Register'><a class="nav-link" href="#">Register</a></Link>
          </li> 
         
        </ul>
        <h1 className="artsync" style={{fontSize:'100px'}}>ArtSync</h1>
        <h3 className="artsync">Craft your Artistic journey</h3>
      </div>
      <br></br>

      <div>
        <h3 className="quote">"Empowering creativity with seamless workshop scheduling."</h3>
      </div>
      <div className="cards">
      
          <div className="card1" style={{marginLeft:'65px'}}><div className="cardimage"><img src="https://www.chromegeek.com/wp-content/uploads/2017/02/Wolf-Looking-At-Ice-Planet.jpg"></img> </div><h5>Drawing</h5></div>
          <div className="card1"><div className="cardimage"><img src="https://cdn.dribbble.com/users/13076963/screenshots/19740206/media/bcb1ed29d29b684719147c460bed1b27.png?resize=400x300&vertical=center"></img> </div><h5>Pencil shading</h5></div>
          <div className="card1"><div className="cardimage"><img src="https://img.freepik.com/free-vector/luxury-mandala-decoration-with-border-line-design_1017-39577.jpg"></img> </div><h5>Mehandi</h5></div>
          <div className="card1"><div className="cardimage"><img src="https://www.designmantic.com/blog/wp-content/uploads/2020/01/Photography-Logos.png"></img> </div><h5>Photography</h5></div>
          <div className="card1"><div className="cardimage"><img src="https://cdn.textstudio.com/output/sample/normal/5/7/9/4/craft-logo-275-14975.png"></img> </div><h5>Crafts</h5></div>
          <div className="card1" style={{marginRight:'65px'}}>
            <div className="cardimage"><img src="https://t4.ftcdn.net/jpg/00/16/46/97/360_F_16469749_ql8mYL0ji6D5FIFn4pBYs3a6QCiJ0Fth.jpg"></img></div>
          <h5>Music</h5> </div>
      </div>
      
      
      <h3 className="quote">"Art washes away from the soul the dust of everyday life."</h3>
      <div>
      <div>
        <div className="imagediv" style={{width:'40%',float:'left'}}>
          <img src="https://img.freepik.com/free-photo/abstract-nature-painted-with-watercolor-autumn-leaves-backdrop-generated-by-ai_188544-9806.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1718668800&semt=ais_user" style={{borderRadius:'20px'}}></img>
            <div class="overlay">
              <div class="text">Immerse Yourself in the Artistic Realm with ArtSync.</div>
            </div>
        </div>

        <div className="content"  style={{width:'50%',float:'right'}}>
          <h3 className="textcontent">Why Choose us?</h3>
            <p>ArtSync simplifies the art of workshop scheduling with a user-friendly 
                platform designed for artists and instructors. Enjoy effortless organization, seamless communication, 
                and community engagement—all in one place. Whether you're planning your next class or exploring new artistic 
                opportunities, ArtSync is your trusted companion in nurturing creativity and connecting with like-minded 
                individuals.</p>
        </div>

      </div>

      <div>
      <div className="content"  style={{width:'50%',float:'left'}}>
          <h3 className="textcontent">We focus on?</h3>
            <p>At ArtSync, we focus on collaborating artists and instructors alike with a seamless and intuitive platform for 
              scheduling and managing art workshops. Our mission is to foster creativity by providing tools that simplify 
              organization and enhance community engagement. Whether you're a seasoned artist looking to expand your reach or a 
              beginner eager to explore new techniques, ArtSync is here to support your journey. Join us in celebrating art, 
              collaboration, and the joy of creating together.</p>
        </div>

        <div className="imagediv"  style={{width:'40%',float:'right'}}>
          <img src="https://img.freepik.com/premium-photo/creative-expression-healthy-lifestyle-engaging-creative-activities-contributes-healthy_985342-14284.jpg" style={{borderRadius:'20px'}}></img>
            <div class="overlay1">
              <div class="text">Revitalize Your Creativity with ArtSync.</div>
            </div>
        </div>
      </div>
      <p>Creativity is nothing but a mind set free</p>
      </div>
      <div>
      <div className="workshops">
        <div className="workshop">
          <img src="https://www.logodesign.net/images/home-industry/art-logo-4.jpg" style={{height:'300px'}}></img>
          <p style={{paddingTop:'20px'}}><b>Company : </b>Fabelle Art</p>
          <p><b>Description :</b> Drawing</p>
        </div> 
        <div className="workshop">
          <img src="https://us.123rf.com/450wm/fantrazy/fantrazy2006/fantrazy200600024/148982079-planet-symbol-sign-of-jupiter-symbol-illustration-of-astrology-planet-jupiter-zodiac-and-astrology.jpg?ver=6" style={{height:'300px'}}></img>
          <p style={{paddingTop:'20px'}}><b>Company : </b>Jupiter</p>
          <p><b>Description :</b> Photography</p>
        </div> 
        <div className="workshop">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2XF0IHHYiNtZa0zVTcCDveP9rBhodtLOPlQ&s" style={{height:'300px'}}></img>
          <p style={{paddingTop:'20px'}}><b>Company : </b>BeeMehandi</p>
          <p><b>Description :</b> Mehandi</p>
        </div> 
      </div>
      <div style={{float:'right',width:'20%',height: '450px'}}>
        <Link to='/Search'><button className='FindMoreButton'>Find more</button></Link>
      </div>
      </div>
      <br></br>
     
    </div>

      
    );
  }
  
  export default Home;
  