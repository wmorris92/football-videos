import React from 'react';
import { shallow } from 'enzyme';

import VideoItem from '../VideoItem';

describe('Component <VideoItem />', () => {

  it('renders without exploding', () => {
    const wrapper = shallow(<VideoItem
        title="test"
        url="test.com"
        time="100000"
      />);
      console.log(wrapper.contains(<div className="video-item video-item-without-thumbnail" />));
    expect(wrapper.contains(<div className="video-item video-item-without-thumbnail" />)).to.equal(true);
  });

});
