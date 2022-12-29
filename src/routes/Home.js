import React from "react"
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
    return (
        <div className="bodyScreen">
            <Link to="/keyword">
                <div className="buttonPos1">
                    <div className="buttonStyle">
                    </div>
                    <span className="buttonText">키워드</span>
                </div>
            </Link>
            <div className="buttonPos2">
                <div className="buttonStyle">
                </div>
                <span className="buttonText">사진</span>
            </div>
        </div> 
    );
}

export default Home;