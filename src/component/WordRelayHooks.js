import React, { useState, useRef } from 'react';

const WordRelayHooks = () => {
  const [word, setWord] = useState('jina');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      inputRef.current.focus();
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h2>끝말잇기 Hooks 사용하여 만들기</h2>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        {/* value와 onChange는 세트, 같이 안쓸경우에는 defaultValue 넣음  */}
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button>입력</button>
      </form>
      <p>{result}</p>
    </>
  );
};

export default WordRelayHooks;
