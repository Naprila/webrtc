import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LandingPage from './components/LandingPage';
import RoomPage from './components/RoomPage';
import JoinRoom from './components/JoinRoom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/room" element={<RoomPage />} />
        <Route path="/join-room" element={<JoinRoom />} />
      </Routes>
    </Router>
  );
}

export default App;