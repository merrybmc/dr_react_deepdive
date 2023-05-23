import React, { useState } from 'react';

export default function AppForm() {
  const [info, setInfo] = useState({ name: '', email: '' });

  const handleSubmit = (event) => {
    console.log(event);
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(info);

    // 페이지 새로고침 방지
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInfo({ ...info, [name]: value });
    console.log(info);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름:</label>
      <input type='text' id='name' name='name' value={info.name} onChange={handleChange} />
      <br />
      <label htmlFor='email'>이메일:</label>
      <input type='email' id='email' name='email' value={info.email} onChange={handleChange} />
      <button>Submit</button>
    </form>
  );
}
