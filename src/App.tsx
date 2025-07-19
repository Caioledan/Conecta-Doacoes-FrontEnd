import './App.css'
import CTA from './components/CTA'
import Donation_Items from './components/Donation_Items'
import Header_main from './components/Header_main'
import Trade_items from './components/Trade_Items'

function App() {
 
  return (
    <div>
      < Header_main />
      <div className='flex items-center justify-center flex-col my-15 gap-5'>
        < Trade_items />
        < Donation_Items />
      </div>
      <CTA /> 
    </div>
  )
}

export default App
