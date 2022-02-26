import Home from './pages/home/Home'

import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {

  return (
    <div className="App">
      <Router>
          <Home />                        
      </Router>
    </div>
  )
}