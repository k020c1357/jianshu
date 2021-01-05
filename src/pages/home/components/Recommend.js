import React, { PureComponent } from 'react';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        <RecommendItem imgUrl="https://villarental.capetown/wp-content/uploads/sites/39/2017/08/Villa-Clifton-Sunsets-Icon-Pic-300x200.jpg" />
        <RecommendItem imgUrl="https://villarental.capetown/wp-content/uploads/sites/39/2017/08/Villa-Clifton-Sunsets-Icon-Pic-300x200.jpg" />
      </RecommendWrapper>
    );
  }
}

export default Recommend;