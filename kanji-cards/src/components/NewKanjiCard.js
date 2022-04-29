import React from "react";

class NewKanjiCard extends React.Component {
  render() {
    return (
      <div className="ui form">
        <div className="three fields">
          <div className=" field">
            <label>No:</label>
            <input type="number" placeholder="000" />
          </div>
          <div className=" field">
            <label>Chapter:</label>
            <input type="number" placeholder="000" />
          </div>
          <div className=" field">
            <label>Character</label>
            <input type="text" placeholder="字" />
          </div>
        </div>
        <div className=" field">
          <label>Meaning</label>
          <input type="text" placeholder="Character" />
        </div>
        <div className=" three fields">
          <div className="field">
            <label>P. Elems:</label>
            <input type="text" placeholder="" />
          </div>
          <div className="field">
            <label>As P. Elem:</label>
            <input type="text" placeholder="" />
          </div>
          <div className="field">
            <label>Confidence</label>
            <select className="ui fluid search dropdown">
              <option value="1">Not Confident</option>
              <option value="2">Slightly Confident</option>
              <option value="3">Confident</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label>Story</label>
          <textarea rows="4"></textarea>
        </div>
      </div>
    );
  }
}

export default NewKanjiCard;
