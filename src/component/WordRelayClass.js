import React, { Component } from 'react';

class WordRelayClass extends Component {
  state = {
    word: 'jina',
    value: '',
    result: '',
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value: '',
      });
      this.input.focus();
    } else {
      this.setState({
        result: '땡',
        value: '',
      });
      this.input.focus();
    }
  };

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  input; // this.input을 생성

  onRefInput = (c) => {
    this.input = c;
  };

  render() {
    return (
      <>
        <h2>끝말잇기 Class 사용하여 만들기</h2>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          {/* value와 onChange는 세트, 같이 안쓸경우에는 defaultValue 넣음  */}
          <input
            ref={this.onRefInput}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>입력</button>
        </form>
        <p>{this.state.result}</p>
      </>
    );
  }
}

export default WordRelayClass;
