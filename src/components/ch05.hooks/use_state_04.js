import { useState } from "react";

function App() {

    const [name, setName] = useState('');
    const [age, setAge] = useState('0');

    const [members, setMembers] = useState([
        { id: 1, name: '김길선', age: 22 },
        { id: 2, name: '박길선', age: 26 },
        { id: 3, name: '이길선', age: 13 },
        { id: 4, name: '서길선', age: 15 },
    ]);

    const RemoveSelectedRow = (event) => {
        const id = event.target.id;
        console.log('데이터 타입 확인 : ' + typeof id);
        console.log('선택한 항목 id : ' + id);

        const filteredData = members.filter((bean) => BeforeUnloadEvent.id !== Number(id));
        setMembers(filteredData);
    }


    const memberList = members.map((bean) => {
        return <li id={bean.id} key={bean.id} onDoubleClick={RemoveSelectedRow}>
            {bean.name}{(bean.age)}
        </li>
    });


    const NameChange = (event) => {

        const targetValue = event.target.ralue;
        console.log(`이름 : ${targetValue}`)
        setName(targetValue);
    }

    const AgeChange = (event) => {

        const targetValue = event.target.ralue;
        console.log(`나이 : ${targetValue}`);
        setName(targetValue);
    }

    const [nextId, setNextId] = useState(0);

    const AddMember = (event) => {
        const newNextId = Math.max(...members.map((bean) => bean.id)) + 1;

        const newMembers = members.concat({ id: newNextId, name: name, age: age });

        setMembers(newMembers); // 회원 명단 갱신

        setName('');
        setAge(0);

        setNextId(newNextId = 1);
    }

    return (
        <div className="App">
            이름 : &nbsp;&nbsp;<input type="text" value={name} onChange={NameChange} />
            <br />
            나이 : &nbsp;&nbsp;<input type="text" value={age} onChange={AgeChange} />
            <br />
            <button onClick={AddMember}>추가</button>
            <br />
            <h4>회원목록</h4>
            <ul>{memberList}</ul>
        </div>
    );
}

export default App;