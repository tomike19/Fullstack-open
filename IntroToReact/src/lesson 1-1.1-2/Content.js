import React from 'react';
import Part1 from './Part1';
import Part2 from './Part2';
import Part3 from './Part3';
 
const Content = ({part1,exercises1}) => {
    return (
        <div>
            
               <Part1 part1={part1}
                   exercises1={exercises1}
               />
                 <Part2 part2={part2}
                   exercise2={exercises}
               />
                <Part3 part3={part3}
                   exercise3={exercises}
               /> 
            
        </div>
    );
}
 

export default Content;