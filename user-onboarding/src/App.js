import React, { useState } from 'react';
import './App.css';

import Form from './components/Form'
import UserTable from './components/UserTable'

function App() {

  const [memberList, setMemberList] = useState([{
    id: 1,
    name: "Frank Mir",
    team: "Gravedigger",
    role: "Driver",
    email: "frank@gravedigger.com"
  },
  {
    id: 2,
    name: "John Beluci",
    team: "Avenger",
    role: "Crew",
    email: "johnb@avengerracing.com"

  },
  {
    id: 3,
    name: "Joe Saginaw",
    team: "Megalodon",
    role: "Media",
    email: "saggyjoe@truckmagazine.com"

  }])

  const addMember = person => {
    const newMember = {
      id: memberList.length + 1,
      name: person.name,
      team: person.team,
      role: person.role,
      email: person.email,
    };
    setMemberList([...memberList, newMember])
  }

  return (
    <div>
      <Form addMember={addMember} />
      <UserTable memberList={memberList} />
    </div>
  );
}

export default App;
