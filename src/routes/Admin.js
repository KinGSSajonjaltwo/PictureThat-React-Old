import { dbService } from "fBase";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react"

const Admin = () => {

    const [inputKeyword, setinputKeyword] = useState("");
    const [keywords, setKeywords] = useState([]);
    let maxId = 0;

    const calcMaxId = () => {
        console.log(keywords);
        keywords.forEach((keyword) => {
            console.log(keyword.id);
            if (maxId < keyword.id) {
                maxId = keyword.id;
                console.log(maxId);
            }
        })
    } 

    useEffect(() => {
        onSnapshot(collection(dbService, "keywords"), (snapshot) => {
            const tmpKeyword = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                }));
            setKeywords(tmpKeyword);
        })
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        calcMaxId();
        await addDoc(collection(dbService, "keywords"), {
            text: inputKeyword,
            id: maxId + 1,
        });
        setinputKeyword("");
    }

    const onChange = (event) => {
        const {
            target: {value},
        } = event;
        setinputKeyword(value);
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input value={inputKeyword} onChange={onChange} type="text" placeholder="Recommand Text!" maxLength={120} />
                <input type="submit" value="Add" />
            </form>
            <div>
                {keywords.map((keyword) => (
                    <div key={keyword.id}>
                        <h4>{keyword.id} : {keyword.text}</h4>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Admin;