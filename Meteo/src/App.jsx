import './App.css'
import CitySwitch from './otherComponents/CitySwitch'
import Details from './otherComponents/Details'
import { StyledForm } from './components/ComponentForm/StyledForm'
import { StyledMajorCity } from './components/ComponentMajorCity/StyledMajorCity'
function App() {
  return (
    <div className='App'>
      <div className='container'>
        <StyledMajorCity />
        <CitySwitch />
        <Details />
        <StyledForm />
      </div>
    </div>
  )
}

export default App
