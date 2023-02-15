import PropTypes from 'prop-types';

/*
const MyComponent = ({ name, favoriteNumber, children }) => {
  // console.log(props);
  // component의 속성들을 객체로 반환함. 그래서 props.name으로 사용할 수 있는 거임.

  return (
    <div>
      안녕하세요, 제 이름은 {name}입니다. <br />
      한글로 '{children}'라고 적습니다.
      <br />
      가장 좋아하는 숫자는 {favoriteNumber} 입니다.
    </div>
  );
};
*/

/* class형 component 만들어보기 */
import { Component } from 'react';

class MyComponent extends Component {
  // class형에서는 defaultProps와 propTypes를 내부에 지정할 수 있다.
  // 외부에다가 작성할 때는 함수형과 동일한 방법으로 작성.
  static defaultProps = {
    name: 'react',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다. <br />
        한글로 '{children}'라고 적습니다.
        <br />
        가장 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

// 속성의 기본값 설정
// MyComponent.defaultProps = {
//   name: 'react',
// };

// 속성의 type 설정
// MyComponent.propTypes = {
//   name: PropTypes.string,
//   favoriteNumber: PropTypes.number.isRequired,
// };

export default MyComponent;
