import React, { useState } from 'react';

export default function AppMentors() {
  const [person, setPerson] = useState({
    name: '병민',
    title: '개발자',
    mentors: [
      { name: '밥', title: '시니어개발자' },
      { name: '제임스', title: '시니어개발자' },
    ],
  });
  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는</p>
      <ul>
        {person.mentors.map((data, index) => (
          <li key={index}>
            {data.name} ({data.title})
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          const originalName = prompt('누구의 이름을 바꾸고 싶은가요?');
          const name = prompt('이름을 무엇으로 바꾸고 싶은가요?');
          setPerson({
            ...person,
            mentors: person.mentors.map((data) => {
              if (data.name === originalName) {
                return { ...data, name };
              } else {
                return data;
              }
            }),
          });
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const originalName = prompt('누구의 직업을 바꾸고 싶은가요?');
          const title = prompt('직업을 무엇으로 바꾸고 싶은가요?');
          setPerson({
            ...person,
            mentors: person.mentors.map((data) => {
              if (data.name === originalName) {
                return { ...data, title };
              } else {
                return data;
              }
            }),
          });
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
