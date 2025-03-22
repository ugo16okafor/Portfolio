import Header from "./Header"
import Body from "./body"
import Technologies from "./Tech"


function App() {
  return(
    <div className="bg-gray-950">
      <div className="bg-gray-950 lg:mx-24">
        <Header/>
        <Body/>
        <Technologies />
      </div>
    </div>
  )
}

export default App
