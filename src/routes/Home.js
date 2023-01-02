import React from "react"
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
    return (
        <section>
                <div>
                    <Link to="./keyword/" >
                        <button className ="link_button">
                            <div className="link">Poca1</div>
                        </button>
                    </Link>
                </div>
        </section>
    );
}

export default Home;