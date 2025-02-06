
import HomeScreen from "../Components/HomeScreen.jsx"
import About from "../Components/About.jsx"
function Home() {
  return (
    <div className="min-h-screen w-full bg-dark-purple dark:bg-white">
        <div className="flex items-center justify-center flex-col">
          <HomeScreen/>
         <About/>
        </div>
      </div>
  )
}


export default Home;