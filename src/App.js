import './App.css';
import Home from './Home';
import psg from "./psg.png"
function App () {
    return (
      <div className="App">
        <div style={{display:"flex",justifyContent:"center"}}>
          <img src={psg} alt='psg' style={{width:54,padding:12}}/>
          <div>
            <h1 style={{margin:0}}>PSG COLLEGE OF TECHNOLOGY</h1>
            <h2 style={{margin:0}}>Department of Computer Applications</h2>
          </div>
        </div>
        <h3>Course Planner</h3>
        <Home/>
        {/* <SubjectForm/>         */}
      </div>
             );
}

export default App;