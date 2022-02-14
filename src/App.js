import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import ColumnLayout from './layout/ColumnLayout';

const App=()=>{

  return(
      <Router>
        <ColumnLayout/>
      </Router>
  )
}

export default App
