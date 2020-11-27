import './App.css';
import MyApp from './myApp';

function App({work}) {
  return (
   <div>
     <h1>Remote Job <u>In sha ALLAH</u></h1>
     <h2>HTML</h2>
     <h2>CSS</h2>
     <h2>Javascript</h2>
     <h2>Git</h2>
     <h2>Reactjs</h2>

     <MyApp salary="$4000" freelancing="$3000" techwork = {work} />
   </div>
  );
}

export default App;
