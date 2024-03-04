
import './App.css';
import { Login } from './Components/Login';
import { MainContainer } from './Components/MainContainer';
import {Routes,Route} from 'react-router-dom'
import { Welcome } from './Components/Welcome';
import { ChatArea } from './Components/ChatArea';
import { Users_Groups } from './Components/Users_Groups';
import { CreateGroup } from './Components/CreateGroup';
import {Groups} from './Components/Groups';


function App() {
  return (
    <div className="App">
     {/* <MainContainer/> */}
     {/* <Login/> */}
     <Routes>
           <Route path='/' element={<Login/>}></Route>
           <Route path='app' element={<MainContainer/>}>
            <Route path='welcome' element={<Welcome/>}></Route>
            <Route path='chat' element={<ChatArea/>}></Route>
            <Route path='users' element={<Users_Groups/>}></Route>
            <Route path='create-groups' element={<CreateGroup/>}></Route>
            <Route path='groups' element={<Groups/>}></Route>
           </Route>
    
     </Routes>
    </div>
  );
}

export default App;
