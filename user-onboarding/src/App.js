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

  }])

  return (
    <div>
      <Form />
      <UserTable memberList={memberList} />
    </div>
  );
}

export default App;
