import './App.css'
import CoolDots from './components/cooldots/CoolDots'

function App() {
  return (
    <>
      <div className='title'>
        <h1>JavaScript Animations</h1>
      </div>

      <div className='example'>
        <h2>Cool dots</h2>
        <CoolDots sensitivity={15} sharpness={8} />
      </div>
    </>
  )
}

export default App
