import React,{useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [loginUser,setloginuser] = useState('')
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('user'))
        if(user){
            setloginuser(user)
        }
    },[])

    const logouthandler = ()=> {
        console.log("Logout Called")
        localStorage.removeItem('user')
        navigate('/login')
    }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            <h3 className="navbar-brand" to="/">
            {loginUser.name}'s Image Gallery
            </h3>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">{" "}
                {/* <p className="nav-link ">{loginUser && loginUser.name}</p>{" "} */}
                </li>
              <li className="nav-item">
                <button  className="btn btn-primary" 
                    onClick={logouthandler}
                >
                    Logout 
                </button>
                
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
