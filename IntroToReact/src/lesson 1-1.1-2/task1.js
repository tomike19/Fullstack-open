import React from 'react';
// import Header from '../lesson 1-1.1-2/header';
// import Content from '../lesson 1-1.1-2/Content';
// import Total from '../lesson 1-1.1-2/Total';
// import Part1 from './Part1';


const Task1 = () => {
  const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

arto.greet() 
//  const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

    return (
        <div>
            
{/* <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts}  /> */}
        </div>
    );
}

export default Task1;

