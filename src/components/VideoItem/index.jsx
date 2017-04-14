import React from 'react';
import './videoItem.css'
import comment from './comment.svg'

const CURRENT_TIME = Date.now();

const VideoItem = ({title, url, redditUrl, time, media}) => {
  return media ? itemWithThumbnail(title, url, redditUrl, time, media) : itemWithoutThumbnail(title, url, redditUrl, time);
};

function itemWithThumbnail(title, url, redditUrl, time, media) {
  return (
    <a href={url}>
      <div className="video-item video-item-with-thumbnail">
        <div className="thumbnail-item">
          <img src={media.oembed.thumbnail_url} alt="" height="90px" width="123px"/>
        </div>
        <div className="video-item-without-thumbnail">
          <text className="item-title">{formatTitle(title, true)}</text>
          <div className="item-baseline">
            <text className="item-time">{formatTimeOne(time)}</text>
            <a className="item-comments" href={redditUrl} target="_blank">
              <img src={comment} alt="Comment" />
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

function itemWithoutThumbnail(title, url, redditUrl, time) {
  return (
    <a href={url}>
      <div className="video-item video-item-without-thumbnail" >
        <text className="item-title">{formatTitle(title, false)}</text>
        <div>
          <a className="item-comments" href={redditUrl} target="_blank">
            <img src={comment} alt="Comment" />
          </a>
          <text className="item-time">{formatTimeOne(time)}</text>
        </div>
      </div>
    </a>
  );
};

function formatTitle(title, withThumbnail) {
  const titleLimit = withThumbnail ? 90 : 200;
  if (title.length > titleLimit) {
    return `${title.substr(0, titleLimit)}...`
  } else {
    return title
  }
};

function formatTimeOne(time) {
  let timeAgoInSec = Math.round((CURRENT_TIME / 1000) - time);
  let minutesAgo = Math.round(timeAgoInSec/60);
  if (minutesAgo < 60) {
    return (minutesAgo === 1) ? `${minutesAgo} minute ago` : `${minutesAgo} minutes ago`;
  }
  let hoursAgo = Math.round(minutesAgo/60)
  return (hoursAgo === 1) ? `${hoursAgo} hour ago` : `${hoursAgo} hours ago`;
};

export default VideoItem;
