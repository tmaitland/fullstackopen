const Header = (props) => {
  return (
  <>
   <h1>{props.course}</h1>
  </>
  )
};
const Content = (props) => {
  return (
  <>
   <div>{props.parts}</div>
  </>
  )
};
const Total = (props) => {
  // console.log(props);
  return (
  <>
    <p>Number of exercises: {props.sum}</p>
  </>
  )
};

const App = () => {
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14
  const course = {
    name: 'Half Stack application development',
     parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
}
  // the reducer function is used to sum the exercises of all the parts
  let partNames = course.parts.map((part, id) => <p key={id}>{`${part.name} ${part.exercises}`}</p>);
  let totalSum = course.parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <div data-bind="html: name, exercises">
      <Header course={course.name} />
      {/* {parts.map((part, id)=> <Content key= {id} part={part.name} exercises={part.exercises} />)} */}
      <Content parts={partNames} />
      <Total sum={totalSum}/>
    </div>
  )
}

export default App