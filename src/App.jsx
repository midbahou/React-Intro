
import './App.css'
import Article from './components/Article'
import Footer from './components/Footer'
import Learner from './components/Learner'
import NavBar from './components/NavBar'
import PerScholasLogo from './components/PerScholasLogo'

import learnerData from './data/learners'

function App() {

  return (
    <div>
      <PerScholasLogo />
      <NavBar />
      <hr />
      <h1>First React App</h1>
      <hr />

      <Footer />
      <hr />
      <h1>Fashion Blog</h1>

      <Learner 
      name = "Max"
      age = "30"
      lastLogin = "01/23/2023"
      />
      <hr />

      {/* using the data file */}
    <Learner 
    name = {learnerData[0].name}
    age = {learnerData[0].age}
    lastLogin = {learnerData[0].lastLogin}
    />
<hr />
<Learner 
    name = {learnerData[1].name}
    age = {learnerData[1].age}
    lastLogin = {learnerData[1].lastLogin}
    />
    <hr />

{/* using loops so we can loop inside all the elements inside the data file */}

{
  learnerData.map((item, index) => {
    return (
    <Learner 
    key = {index}
    name = {item.name}
    age = {item.age}
    lastLogin = {item.lastLogin}
    />
  )
  })
}


      {/* <Article 
      title = "First Blog"
      content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem veritatis fugit, nemo quasi labore esse rerum hic aliquam voluptas perferendis corrupti libero quas voluptatem voluptates animi, quo asperiores. Neque, saepe?"
      date = "02/25/2025"
      /> */}
    </div>
  )
}

export default App
