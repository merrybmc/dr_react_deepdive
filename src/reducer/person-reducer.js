export default function personReducer(person, action) {
  const { prev, current } = action;
  switch (action.type) {
    case 'updatedName': {
      // const prev = action.prev;
      // const current = action.current;
      // 구조분해 할당
      return {
        ...person,
        mentors: person.mentors.map((data) => {
          if (data.name === prev) {
            return { ...data, name: current };
          } else {
            return data;
          }
        }),
      };
    }

    case 'updateTitle': {
      return {
        ...person,
        mentors: person.mentors.map((data) => {
          if (data.name === prev) {
            return { ...data, current };
          } else {
            return data;
          }
        }),
      };
    }

    case 'added': {
      return { ...person, mentors: [...person.mentors, { prev, current }] };
    }

    case 'deleted': {
      return {
        ...person,
        mentors: person.mentors.filter((data) => {
          return data.name !== prev;
        }),
      };
    }

    default: {
      throw Error(`알 수 없는 액션 타입 : ${action.type}`);
    }
  }
}
