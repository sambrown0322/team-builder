import React, { useState } from "react";

export default function MemberForm(props) {
  //   const [formValues, setFormValues] = useState({
  //     username: "",
  //     email: "",
  //     role: "",
  //   });
  const { values, update, submit } = props;
  console.log(values);

  const onChange = (evt) => {
    const name = evt.target.name;
    const value = evt.target.value;
    // setFormValues({ ...formValues, [name]: value });
    update(name, value);
  };
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="addMember">
        <h2>Add a Member</h2>
        <button disabled={!values.username || !values.email || !values.role}>
          Submit
        </button>
      </div>
      <div className="formInputs">
        <h4> General Infomation </h4>
        <label htmlFor="usernameInput">
          Username:
          <input
            id="usernameInput"
            name="username"
            type="text"
            placeholder="Enter username"
            maxLength="30"
            value={values.username}
            onChange={onChange}
          />
        </label>
        <label htmlFor="emailInput">
          Email:
          <input
            id="emailInput"
            name="email"
            type="email"
            placeholder="Enter Email"
            maxLength="30"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label>
          Role:
          <select name="role" value={values.role} onChange={onChange}>
            <option disabled value="">
              Select a role
            </option>
            <option value="Backend Engineer">Backend Engineer</option>
            <option value="Frontend Engineer">Frontend Engineer</option>
            <option value="UI designer">UI designer</option>
            <option value="UX designer">UX designer</option>
          </select>
        </label>
        {/* <label>
          Username:
          <input
            id="usernameInput"
            name="username"
            type="text"
            placeholder="Enter username"
            maxLength="30"
          />
        </label> */}
      </div>
    </form>
  );
}
