import { Route, Routes } from "react-router";
import Conatact from "./Conatact";
import Mentor from "./Mentor";
import NotFound from "./NotFound";
import Animal from "./Animal";
import { Link, NavLink } from "react-router-dom";
import styles from './RouteApp.css'

function RouteApp(){
    return(
        <>
        <h1>Main Page</h1>
        {/* <h1>Welcome to kingdom</h1> */}
      
{/* // by using reloadDocument we can reload the page after clicking it */}
      <nav>
        <ul>
           <li>
            <NavLink to='/home' className={(props)=>{
                console.log(props, "NavLink");
                const{isActive} = props;

                return isActive ? `${styles.activeLink}` :" "
            }}>Home</NavLink>
           </li>


           <li>
            <NavLink to='/contacts' className={(props)=>{
                console.log(props, "NavLink");
                const{isActive} = props;

                return isActive ? `${styles.activeLink}` :" "
            }}>Contacts</NavLink>
           </li>
           <li>
            <NavLink to='/mentor' className={(props)=>{
                console.log(props, "NavLink");
                const{isActive} = props;

                return isActive ? `${styles.activeLink}` :" "
            }} reloadDocument>Mentor</NavLink>
           </li>
  
        {/* we can use link and navlink  */}

            <li><Link to="/mentor">Mentor</Link></li>
            <li><Link to="/contacts">Contact</Link></li>
            <li><Link to="/animal?type=dog">Animal Dog</Link></li>
            <li><Link to="animal?type=lion">Animal Lion</Link></li>
           
            
        </ul>
      </nav>

        <Routes>
        <Route path="*" element={<NotFound />}>
            {""}
            </Route>
            <Route path="/home" element={<>This is hOMe page</> }>
            {""}
            </Route>

            <Route path="/" element={<h1>Welcome to the Kingdom</h1>}>
            {""}
            </Route>

            <Route path="/contacts" element={<Conatact/>}>
            {""}
            </Route>

            <Route path="/animal" element={<Animal/>}>
            {""}
            </Route>

            <Route path="/mentor" element={<Mentor/>}>
            {""}
            </Route>

        </Routes>
        </>
    )
}
export default RouteApp;

//if we remove all link then route will work 
