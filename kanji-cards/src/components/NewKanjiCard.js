import React from "react";

class NewKanjiCard extends React.Component {
  state = {
    formProps: {
      number: "null",
      chapter: "null",
      character: "",
      meaning: "null",
      p_elems: [],
      as_p_elem: "",
      confidence: 1,
      story: "",
    },
  };
  onSaved = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.formProps);
  };

  onFormInputChanged = (e) => {
    console.log(e.target.id);
    let newState = this.state.formProps;
    let input = e.target.value.includes(",")
      ? e.target.value.split(",")
      : e.target.value;

    newState[`${e.target.id}`] = input;
    this.setState({ formProps: newState });
  };

  render() {
    return (
      <form className="ui form">
        <div className="three fields">
          <div className=" field">
            <label>No:</label>
            <input
              id="number"
              type="number"
              onChange={this.onFormInputChanged}
              value={this.state.number}
              placeholder="000"
            />
          </div>
          <div className=" field">
            <label>Chapter:</label>
            <input
              onChange={this.onFormInputChanged}
              id="chapter"
              type="number"
              value={this.state.chapter}
              placeholder="000"
            />
          </div>
          <div className=" field">
            <label>Character</label>
            <input
              onChange={this.onFormInputChanged}
              id="character"
              type="text"
              value={this.state.character}
              placeholder="字"
            />
          </div>
        </div>
        <div className=" field">
          <label>Meaning</label>
          <input
            onChange={this.onFormInputChanged}
            id="meaning"
            type="text"
            value={this.state.meaning}
            placeholder="Character"
          />
        </div>
        <div className=" three fields">
          <div className="field">
            <label>P. Elems:</label>
            <input
              onChange={this.onFormInputChanged}
              id="p_elems"
              type="text"
              value={this.state.p_elems}
              placeholder=""
            />
          </div>
          <div className="field">
            <label>As P. Elem:</label>
            <input
              onChange={this.onFormInputChanged}
              id="as_p_elem"
              type="text"
              value={this.state.as_p_elem}
              placeholder=""
            />
          </div>
          <div className="field">
            <label>Confidence</label>
            <select
              onChange={this.onFormInputChanged}
              id="confidence"
              className="ui fluid search dropdown"
              value={this.state.confidence}
            >
              <option value="1">Not Confident</option>
              <option value="2">Slightly Confident</option>
              <option value="3">Confident</option>
            </select>
          </div>
        </div>

        <div className="field">
          <label>Story</label>
          <textarea onChange={this.onFormInputChanged} id="story" rows="4">
            {this.state.story}
          </textarea>
        </div>

        <input
          onClick={this.onSaved}
          className="ui button blue"
          type="submit"
          value="Save"
        />
      </form>
    );
  }
}

export default NewKanjiCard;
