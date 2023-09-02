// import HelloComponent from "./HelloComponent";
// import IncrementDecrement from "./IncrementDecrementCounter/IncrementDecrement";
// import ByeComponent from "./ByeComponent";
// import Parent from "./ParentChild/Parent";
// import Child from "./ParentChild/Child";
// import StudentDetails from"./ListComponent/StudentDetails";
// import MultipleState from './MultipleState';
// import ParentCommunication from "./ParentChild/CommunicationChildToChild/ParentCommunication";
// import Forms from "./Formsfilling/forms";
// import PokeAPi from "./PokemonApi/PokeApi";
// import Count from "./useStateReact/useStatetry";
// import React { useState } from "react";
import Hello from "./classComponentIntro/IncDecComponent";







function App(){
     
  // const studentData = [
  //   {id:1, name: "surbhi", grade: 9.8, year: 2019}, //here we are using id to give unique property to each student so that it will not render again n again
  //   {id:2, name: "monika", grade:8.0, year: 2010},
  //   {id:3, name:"shivali", grade:7.5, year:2008},
  //   {id:4, name:"harshit", grade:10, year:2007},
  // ]

  


    // const [name, setName] = useState("user");



    // const changenameHandler = ()=>{
    //     setName("Monika")
    // } 

    return (
    <>
    {/* <h1>This is app js</h1> */}
    {/* <HelloComponent name={"surbhi"} standard={"9th"}/> */}
    {/* <ByeComponent name={name}/> */}
    {/* <IncrementDecrement /> */}


    {/* button that changes name  in bye component*/ }
    {/* <button onClick={changenameHandler}>Change Name</button> */} 

    {/* <Parent name={"surbhi"}>
      <Child />
    </Parent> */}

    {/* <StudentDetails name={"surbhi"} grade={"9.8"} year={"2018"} />
<StudentDetails name={"monika"} grade={"8.0"} year={"2010"}/>
<StudentDetails name={"harshit"} grade={"8.0"} year={"2012"}/> */}

{/* {studentData.map(student => {
    const{name, grade, year, id}=student;

    return <StudentDetails key={id} name={name} grade={grade} year={year}/>
  })} */}
 

  {/* <MultipleState /> */}

  {/* <ParentCommunication /> */}

  {/* <Forms /> */}
  {/* <Count /> */}

  {/* <PokeAPi /> */}


  <Hello />




   {/*Key props should be unique for each child in the list
   key props is used for the performance only by react 
   we can use index as key but it is not advisable because if order change then indexing will change and 
   it will have bad impact on performance  
   READ AN ARTICE iNDEX IS A KEY IS AN ANTI-PATTERN BY ROBIN POKORNY*/}

   {/*parent talk to child via the props...*/}

   


    </>
    )
    
}
export default App;
