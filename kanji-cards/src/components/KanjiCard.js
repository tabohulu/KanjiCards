import React from "react";

class KanjiCard extends React.Component {
  render() {
    return (
      <div className="ui green raised centered card">
        <div className="content">
          <div className="right floated">Chap:</div>
          No.
        </div>
        <div className="image">
          <img
            src="https://media.kanjialive.com/kanji_strokes/otozu(reru)_11.svg"
            alt="kanji for"
          />
        </div>
        <div className="content">
          <div className="header">Kanji English Meaning</div>
          <div className="description">Story</div>
        </div>
        <div className="extra content">
          <span className="right floated">Last Reviewed: </span>
          <span>
            <i className="user icon"></i>
            Confident
          </span>
        </div>
      </div>
    );
  }
}

export default KanjiCard;
