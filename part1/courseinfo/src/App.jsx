const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return <p>{props.name} {props.exercises}</p>
}

const Content = (props) => {
  const content = props.content

  return (
    <>
      <Part name={content[0].name} exercises={content[0].exercises} />
      <Part name={content[1].name} exercises={content[1].exercises} />
      <Part name={content[2].name} exercises={content[2].exercises} />
    </>
  )
}

const Total = (props) => {
  return <p>Number of exercises {props.total}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  const content = [part1, part2, part3]

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App