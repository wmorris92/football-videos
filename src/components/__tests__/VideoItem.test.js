import React from 'react';
import { shallow } from 'enzyme';

import VideoItem from '../VideoItem';

describe('Component <VideoItem />', () => {

  function buildShallowComponent(title, url, time, withMedia) {
    const mediaObject = {
      oembed: {
        thumbnail_url: "image.jpg"
      }
    };
    if (withMedia) {
      return shallow(<VideoItem
          title={title}
          url={url}
          time={time}
          media={mediaObject}
        />);
    } else {
      return shallow(<VideoItem
          title={title}
          url={url}
          time={time}
        />);
    }
  }

  it('renders without crashing', () => {
    const wrapper = buildShallowComponent('test', 'test.com', '100000', false);
    expect(wrapper.length).toEqual(1);
  });

  describe('rendering without thumbnail', () => {
    it('displayes correct title text', () => {
      const wrapper = buildShallowComponent('test', 'test.com', '100000', false);
      expect(wrapper.contains(<text className="item-title">test</text>)).toEqual(true);
    });

    it('cuts titles of over 200 characters', () => {
      const longTitle = 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii';
      const longTitleCut = 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii...';
      const wrapper = buildShallowComponent(longTitle, 'test.com', '100000', false);;
      expect(wrapper.contains(<text className="item-title">{longTitleCut}</text>)).toEqual(true);
    });
  });

  describe('rendering with thumbnail', () => {
    it('displayes correct title text and img', () => {
      const wrapper = buildShallowComponent('test', 'test.com', '100000', true);
      expect(wrapper.contains(<text className="item-title">test</text>)).toEqual(true);
      expect(wrapper.contains(<img src="image.jpg" alt="" height="90px" width="123px"/>)).toEqual(true);
    });
  });

});
