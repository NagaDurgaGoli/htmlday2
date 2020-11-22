import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionalClick from './components/FunctionalClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <ParentComponent />
      {/* <EventBind/> */}
      {/* <FunctionalClick/>
      <ClassClick/> */}
      {/* <Counter/> */}
      {/* <Message /> */}
      {/* {/* <Greet name="Riya" branchName="MCA"><p>This is Children Props</p></Greet>
      <Greet name="Sony" branchName="MBA"><button>Action</button></Greet> */}
      {/* <Greet name="Ratna" branchName="M.Sc" />

       <Welcome name="Riya" branchName="MCA"/>
      <Welcome name="Sony" branchName="MBA"/>
      <Welcome name="Ratna" branchName="M.Sc"/>  */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
