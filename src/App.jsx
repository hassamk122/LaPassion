




import Home from "../src/Pages/Home.jsx"
import { Routes,Route } from "react-router-dom"
import Navigation from "./Components/Navigation.jsx"
import Header from "./Components/Header.jsx"
import CalculateBMI from "./Pages/CalculateBMI.jsx"
import UsefulResources from "./Pages/UsefulResources.jsx"
import DietPlans from "./Pages/DietPlans.jsx"
import WorkoutPlans from "./Pages/WorkoutPlans.jsx"
import QuoteOftheDay from "./Pages/QuoteOftheDay.jsx"
import Footer from "./Components/Footer.jsx"
import NotFound from "./Pages/NotFound.jsx"
import FitnessExercises from "./Pages/GeneralFitnessExercises.jsx"
import WeightGainingExercises from "./Pages/WeightGainingExercises.jsx"
import WeightLosingExercises from "./Pages/WeightLosingExercises.jsx"
function App() {

  return (
    <>
    <div className="min-h-screen w-full bg-dark-purple dark:bg-white scroll-smooth">
        <Header />
        <div className="flex items-center justify-center flex-col">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/BmiCalculator" element={<CalculateBMI/>}/>
            <Route path="/UsefulResources" element={<UsefulResources/>}/>
            <Route path="/DietPlans" element={<DietPlans/>}/>
            <Route path="/WorkoutPlans" element={<WorkoutPlans/>}/>
            <Route  path="/WorkoutPlans/FitnessExercise" element={<FitnessExercises/>}/>
            <Route  path="/WorkoutPlans/WeightGainingExercise" element={<WeightGainingExercises/>}/>
            <Route  path="/WorkoutPlans/WeightLosingExercise" element={<WeightLosingExercises/>}/>
            <Route path="/QuoteOftheDay" element={<QuoteOftheDay/>}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer/>
        </div>
        </div>
    </>
  )
}

export default App
