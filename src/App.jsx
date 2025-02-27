
import './App.css'
import Article from './components/Article'
import Footer from './components/Footer'
import Learner from './components/Learner'
import NavBar from './components/NavBar'
import PerScholasLogo from './components/PerScholasLogo'
import ShowCount from './components/ShowCount'

import learnerData from './data/learners'
import { useState } from 'react'

import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  // let count = 0
  // console.log(count);
  // const updateCount = (num) => count = num;

  return (
    // pass the children to here
    <Container>

      <h1>Fashion Blog</h1>

      <ShowCount count={count} />

      {/* using loops so we can loop inside all the elements inside the data file */}

      {
        learnerData.map((item, index) => {
          return (
            <Learner
              key={index}
              {...item}
              setCount={setCount}
              style={{ backgroundColor: "white", color: "black" }}

            // name={item.name}
            // age={item.age}
            // lastLogin={item.lastLogin}
            // // updateCount = {updateCount}
            // setCount={setCount}
            />
          )
        })
      }



      {/* <PerScholasLogo />
<NavBar />
<hr />
<h1>First React App</h1>
<hr />

<Footer />
<hr /> */}
      {/* <Learner
        name="Max"
        age="30"
        lastLogin="01/23/2023"
      />
      <hr />

      {/* using the data file */}
      {/* <Learner
        name={learnerData[0].name}
        age={learnerData[0].age}
        lastLogin={learnerData[0].lastLogin}
      /> */}
      <hr />
      {/* <Learner
        name={learnerData[1].name}
        age={learnerData[1].age}
        lastLogin={learnerData[1].lastLogin}
      /> */}
      <hr />
      {/* <Article 
      title = "First Blog"
      content = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem veritatis fugit, nemo quasi labore esse rerum hic aliquam voluptas perferendis corrupti libero quas voluptatem voluptates animi, quo asperiores. Neque, saepe?"
      date = "02/25/2025"
      /> */}
    </Container>
  )
}

export default App
