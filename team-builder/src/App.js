import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import Member from "./Components/Member";
import MemberForm from "./Components/MemberForm";
import "./App.css";

const initialFormValues = {
  username: "",
  email: "",
  role: "",
};
const fakeAxiosPost = (url, { username, email, role }) => {
  const newMember = { id: uuid(), username, email, role };
  return Promise.resolve({ status: 200, success: true, data: newMember });
};
// const fakeAxiosGet = () => {
//   return Promise.resolve({
//     status: 200,
//     success: true,
//     data: initialFriendsList,
//   });
// };
function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue };
    setFormValues(updatedFormValues);
  };
  const submitForm = () => {
    const formNewMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    };
    if (!formNewMember.username || !formNewMember.email || !formNewMember.role)
      return;

    fakeAxiosPost("fakeapi.com", formNewMember).then((res) => {
      const memberFromApi = res.data;
      setMembers([memberFromApi, ...members]);
      setFormValues(initialFormValues);
    });
  };

  // useEffect(() => {
  //   fakeAxiosGet("fakeapi.com").then((res) => setMembers(res.data));
  // });
  return (
    <div className="App">
      <header>
        <h1>Members App</h1>
      </header>
      <MemberForm values={formValues} update={updateForm} submit={submitForm} />
      {members.map((member) => {
        return <Member key={member.id} details={member} />;
      })}
    </div>
  );
}

export default App;
