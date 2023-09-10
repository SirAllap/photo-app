import { NavLink } from "react-router-dom";
import "./App.css";
import cameraI from './CameraI.jpg';
import cameraII from './CameraIII.jpg';
function App() {
  return (
    <div className="App">
      <h1 className="main-title">WELCOME</h1>
      <h2 className="title">Start searching for your favorite photos</h2>
      <NavLink to='/search' ><button className="main-button">Start Here!</button></NavLink>
      <div className="image-container">
        <img src={cameraI} className="image-1"></img>
        <img src={cameraII} className="image-2"></img>
      </div>
    </div>
  );
}

export default App;
