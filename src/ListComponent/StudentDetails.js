import React from "react";
import styles from "./Student.module.css";
function main(props){
    const{name, grade, year}=props;

    return(
        <div className={styles.card}>
         <h3>Name: {name}</h3> 
         <h3>Grade: {grade}</h3>
         <h3>Year: {year}</h3>
         {/*below is condition rendering checking if grade is less than 9 then consider it fail else print pass*/}
         <div>{grade<9 ? 'Fail': 'Pass'}</div> 
        </div>
    )
}

export default main;