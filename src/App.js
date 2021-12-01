import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Comments from './components/comments/Comments';
import MainVideo from './components/mainVideo/MainVideo';
import Suggestions from './components/suggestions/Suggestions';




function App() {
  return (
    <div className="row">
    <div className="col-md-8">
    <MainVideo/>
    <Comments/>
    </div>
    <Suggestions/>
    </div>
  );
}

export default App;
