const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.title} {props.count}</p>
    </>
  )
}

const Content = (props) => {
  const content = props.content

  return (
    <>
      <Part title={content[0].title} count={content[0].count} />
      <Part title={content[1].title} count={content[1].count} />
      <Part title={content[2].title} count={content[2].count} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const content = [
    {title: part1, count: exercises1},
    {title: part2, count: exercises2},
    {title: part3, count: exercises3}
  ]

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App