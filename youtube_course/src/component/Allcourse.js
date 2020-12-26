import React, { useState } from 'react';
import Course from './Course';

const Allcourse = () =>{
// Array of all Course. 
//React Hoock

    const [courses,setCourses]=useState([
        {title: "Java " , description: "It is a Java Courses."},
        {title: "python " , description: "It is python  Python Courses."},
        {title: "React Js" , description: "It is a React Js Courses."},
        {title: "Angular Js" , description: "It is a Angular Js Courses."},
        {title: "C++ " , description: "It is python  Python Courses."}
    ]);

    return(
        <div>
       <h1>All Courses.</h1>
       <p>List of all Courses are  follows as..</p>
      
       {
           courses.length > 0
           ? courses.map((item) => 
           <Course course={item} />)
           : "Not Available"
       }
       </div>
    );
};

export default Allcourse;