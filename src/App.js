import React, {useState} from 'react';


// fun, class

const App = () => {

    // 함수, 상수, 변수, 상태 등등....

    const [name, setName] = useState("teddy")

    const updateName = () => {
        setName("retin")

    }



    // 화면 템플릿
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={()=> updateName()}>변경</button>
        </div>
    );
};

export default App;