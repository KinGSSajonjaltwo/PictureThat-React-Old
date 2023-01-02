import React from "react"
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
    return (
        <section>
                <div>
                    <button className ="link_button">
                        <Link className = "link" to="./keyword/" >Poca1</Link>
                    </button>
                </div>
        </section>
    );
}

export default Home;