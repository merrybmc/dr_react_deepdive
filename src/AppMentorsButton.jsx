import React, { useState, useMemo, useCallback, memo } from 'react';

export default function AppMentorsButton() {
  const [person, setPerson] = useState({
    name: '병민',
    title: '개발자',
    mentors: [
      { name: '밥', title: '시니어개발자' },
      { name: '제임스', title: '시니어개발자' },
    ],
  });

  const handleUpdate = useCallback(() => {
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
  }, []);

  const handleTitleUpdate = useCallback(() => {
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
  }, []);

  const handleAdd = useCallback(() => {
    const name = prompt('추가할 멘토의 이름은 무엇인가요?');
    const title = prompt('추가할 멘토의 직업은 무엇인가요?');
    setPerson({ ...person, mentors: [...person.mentors, { name, title }] });
  }, []);

  const handleDelete = useCallback(() => {
    const name = prompt('삭제할 멘토의 이름은 무엇인가요?');
    setPerson({
      ...person,
      mentors: person.mentors.filter((data) => {
        return data.name !== name;
      }),
    });
  }, []);

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
      <Button text='멘토 이름 바꾸기' onClick={handleUpdate}></Button>
      <Button text='멘토 타이틀 바꾸기' onClick={handleTitleUpdate}></Button>
      <Button text='멘토 추가하기' onClick={handleAdd}></Button>
      <Button text='멘토 삭제하기' onClick={handleDelete}></Button>
    </div>
  );
}

const Button = memo(({ text, onClick }) => {
  console.log('Button', text, 're-redering');
  const result = useMemo(() => {
    calculateSomething();
  }, []);
  return (
    <button onClick={onClick} style={{ backgroundColor: 'black', color: 'white', borderRadius: '20px', margin: '0.4rem' }}>
      {text} {result}
    </button>
  );
});

function calculateSomething() {
  for (let i = 0; i < 10000; i++) {
    console.log('smile');
  }
  return 10;
}
