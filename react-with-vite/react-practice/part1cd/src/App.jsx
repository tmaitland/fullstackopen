import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistics = (props) => { 
  return(
    <> 
    <p>{props.text}: {props.stat}</p>
  </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [average, setAverage] = useState(0);
  const [total, setTotal] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodClick = () => {
    const updatedClick = good + 1;
    setGood(updatedClick);
    const updatedTotal = updatedClick + bad + neutral
    setTotal(updatedTotal)
    const updatedAvg = (updatedClick + bad + neutral)/3
    setAverage(updatedAvg);
    const percentPositive = (updatedClick/updatedTotal) * 100 ;
    updatedClick === 0 ? setPositive(0) : setPositive(percentPositive);   
    
  }
  // console.log("good", good, "total", total)

  const handleBadClick = () => {
    const updatedClick = bad + 1;
    setBad(updatedClick);
    const updatedTotal = updatedClick + good + neutral
    setTotal(updatedTotal);
    const updatedAvg = (updatedClick + good + neutral)/3
    setAverage(updatedAvg);
    const percentPositive = (good/updatedTotal) * 100 ;
    updatedClick === 0 ? setPositive(0) : setPositive(percentPositive);   
    // console.log(badUpdate)
  }

  const handleNeutralClick = () => {
    const updatedClick = neutral + 1;
    setNeutral(updatedClick);
    const updatedTotal = updatedClick + bad + good;
    setTotal(updatedTotal);
    const updatedAvg = (updatedClick + good + bad)/3
    setAverage(updatedAvg);
    const percentPositive = (good/updatedTotal) * 100 ;
    updatedClick === 0 ? setPositive(0) : setPositive(percentPositive); 
    // console.log(neutral, neutralUpdate);
  }
  
  const percent = positive.toString();
  // console.log(percent)


  return (
    <div>
     <h1>Give Feedback</h1>
     <Button handleClick={handleGoodClick} text="good"></Button>
     <Button handleClick={handleNeutralClick} text="neutral"></Button>
     <Button handleClick={handleBadClick} text="bad"></Button>

     <h2>Statistics</h2>
     <p>good: {good}</p>
     <p>neutral: {neutral}</p>
     <p>bad: {bad}</p>
     <p>all: {total}</p>
     <Statistics text="average" stat={average} />
     <Statistics text="positive " stat={percent.concat("%")} />
    </div>
  )
}

export default App

// const History = (props) => {
//   if (props.allClicks.length === 0) {
//     return (
//       <div>
//         the app is used by pressing the buttons
//       </div>
//     )
//   }
//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }


// const App = () => {
  //   const [left, setLeft] = useState(0)
  //   const [right, setRight] = useState(0)
  //   const [allClicks, setAll] = useState([])
  //   const [total, setTotal] = useState(0)


  //   const handleLeftClick = () => {
  //     setAll(allClicks.concat('L'))
  //     const updatedLeft = left + 1
  //     setLeft(updatedLeft)
  //     setTotal(updatedLeft + right) 
  //   }


  //   const handleRightClick = () => {
  //     setAll(allClicks.concat('R'))
  //     const updatedRight = right + 1;
  //     setRight(updatedRight)
  //     setTotal(updatedRight + left) 
  //   }
  // // debugger

  //   return (
  //     <div>
  //       {left}
  //       <Button handleClick={handleLeftClick} text={"left"}/>
  //       <Button handleClick={handleRightClick} text={"right"} />
  //       {right}
  //     <History allClicks={allClicks}/>
  //       <p>Total: {total}</p>
  //     </div>
  //   )
  // }
