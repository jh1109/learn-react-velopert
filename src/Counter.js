import { Component } from 'react';

class Counter extends Component {
  // constructor 함수를 이용해서 초기값 설정
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0
  //   };
  // }
  /* constructor의 목적
    - this.state의 초기값 설정
      -> 초기 상태 값을 지정할 수 있는 유일한 공간이다. 따라서 setState()를 정의할 수 없다. */

  // constructor 없이 state를 정의하는 방법
  state = {
    number: 0,
    fixedNumber: 0
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={()=>{
            // console.log(number);
            // this.setState({number: number+1});
            // console.log(number);
            // this.setState({number: this.state.number+1});
            // console.log(number);
            // 여전히 1씩 증가한다.
            /* 한 번 클릭하면 UI에는 1로 보이지만 콘솔창에는 여전히 모두 0으로 뜬다.
              setState()는 렌더링을 시켜주는 역할이다. +1된 값을 새로 렌더링 시킨다.
              하지만 바로 number 값이 바뀌지는 않는다.
              그럼 두번째 값은 왜 1이 추가 안되느냐?
              setState는 비교를 한다. 렌더링 한 값과 또 변한 값을.
              렌더링을 1로 했는데 number 값이 최종 바뀐게 아니기 때문에 두번째 setState도 1이다.
              두 값을 비교했을 때 다르지 않으므로 setState는 렌더링 하지 않는다.
              만약 setState값을 다르게 하면 마지막 setState 값을 기준으로 렌더링 된다.
              클릭을 한번 더 해보면 그때 콘솔창에 number가 1로 뜨는 것을 확인할 수 있다.
            */

            // 두개의 동작을 추가하고 싶다면, 객체 대신 함수를 인자로 넣어주자.
            /*
            this.setState(prevState => {
              return {
                number: prevState.number + 1
              };
            });
            this.setState(prevState => ({
              number: prevState.number + 1
            }));
            */

            //this.setState() 이후 특정 작업을 하고 싶을 때
            this.setState(
              {
                number: number +1
              },
              () => {
                console.log('방금 setState가 호출되었습니다.');
                console.log(this.state);
                console.log(number); // 상태에서는 number: 1이 나오지만 여전히 number는 0. 상태 != 값
              }
            );
          }}>+1</button>
      </div>
    );
  }
}

export default Counter;
