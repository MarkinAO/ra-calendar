import './App.css'
import CalendarHeader from './CalendarHeader'
import CalendarBody from './CalendarBody'

function App(data) {
  const { userDate } = data;  
  return (
    <>
      <div className="ui-datepicker">
        <CalendarHeader userDate={ userDate } />
        <CalendarBody userDate={ userDate } />
      </div>
    </>
  )
}

export default App
