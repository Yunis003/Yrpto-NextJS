import Header from "./Components/Header";
import LeftAside from "./Components/LeftAside";
import CenterSide from "./Components/CenterSide";
import RightAside from "./Components/RightAside";
import './styles.css'
function App() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <LeftAside />
        <CenterSide />
        <RightAside />
      </main>
    </div>
    
  )
}

export default App
