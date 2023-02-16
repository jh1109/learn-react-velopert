import { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: ''
  }
  // constructor(props) {
  //   super(props);
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // 임의 메서드를 화살표 함수로 작성하면 constructor에서 바인딩을 하지 않아도 됨.
  handleChange = (e) => {
    this.setState({message: e.target.value});
  }
  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message: ''
    });
  }
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input  
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요."
          value={this.state.message}
          onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;