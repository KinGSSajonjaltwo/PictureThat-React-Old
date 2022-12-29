import React, { useState } from "react"
import './KeywordPage.css'

const KeywordPage = () => {
    const [index, setIndex] = useState(1);

    const onClick = (event) => {
        setIndex(prev=>(prev + 1));
    }

    return (
        <div className="v19_90">
            <div className="v19_91">
                <div className="v19_92" />
                <span className="v19_93">{index}/8</span>
            </div>
            <div className="v19_94" onClick={onClick}>
                <div className="v19_95" />
                <span className="v19_96">주먹왕 잼민이</span>
            </div>
        </div>
    );
}

export default KeywordPage;
