import { dbService } from "fBase";
import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import './KeywordPage.css'

const KeywordPage = () => {
    const [index, setIndex] = useState(1);
    const [randomKeyword, setRandomKeyword] = useState("...");
    const [keywords, setKeywords] = useState([]);
    const navigate = useNavigate();
    let count = 15;
    const [randomNumList, setRandomNumList] = useState([]);
    const mounted = useRef(false);

    const setRandomKeywordFromId = (id) => {
        console.log('start');
        keywords.forEach((keyword) => {
            console.log(keyword.id);
            if (keyword.id === id) {
                setRandomKeyword(keyword.text);
                console.log(randomKeyword);
                console.log(keyword.text);
            }
        }) // Happy
    }

    const getRandomNumList = () => {
        const numbers = Array(count).fill().map((item, index) => index + 1);
        const random = []; // 랜덤으로 추출된 숫자를 담을 배열
 
        for (let i = 0; i < 8; i++) { // numbers 배열에서 하나씩 추출되면서 제거되므로 numbers가 1개 있을 때까지 반복문을 돌린다.
            const num = Math.floor(Math.random() * numbers.length); // 첫번째 랜덤 숫자 범위 : 1 <= x <= 45이므로, Math.random() * (45 - 1 + 1) = Math.random() * 45
            const newArr = numbers.splice(num, 1); // numbers 배열에서 해당 랜덤 넘버 추출
            const value = newArr[0]; // numbers는 배열이므로 요소 값만 추출해 변수에 담는다.
            random.push(value); // 추출한 값을 random 배열에 담는다.
        }
        return random;
    }

    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
            onSnapshot(collection(dbService, "keywords"), (snapshot) => {
                const tmpKeyword = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data(),
                    }));
                setKeywords(tmpKeyword);
            }) // N
            if (randomNumList.length === 0) {
                setRandomNumList(getRandomNumList);
            }
        } else {
            console.log(keywords);
            setRandomKeywordFromId(randomNumList[index - 1]);
        }
    }, [index, randomNumList, keywords]);

    const onClick = (event) => {
        if (index >= 8) {
            navigate('/');
        }
        setIndex(prev=>(prev + 1));
    } // ew

    return (
        <div className="v19_90">
            <div className="v19_91">
                <div className="v19_92" />
                <span className="v19_93">{index}/8</span>
            </div>
            <div className="v19_94" onClick={onClick}>
                <div className="v19_95" />
                <span className="v19_96">{randomKeyword}</span>
            </div>
        </div>
    );
}
// Year
export default KeywordPage;
// !!!
