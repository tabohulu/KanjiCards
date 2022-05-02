import React from "react";

class KanjiCard extends React.Component {
  state = {
    formProps: {
      number: 0,
      chapter: 0,
      character: "一",
      meaning: "",
      p_elems: [],
      as_p_elem: "",
      confidence: 1,
      story: "",
    },
    img_src: "",
    confidences: ["Not Confident", "Slightly Confident", "Confident"],
    confidence_colors: ["red", "yellow", "green"],
  };

  componentDidMount() {
    this.setState({ formProps: this.props.formProps });
  }
  render() {
    return (
      <div
        className={`ui ${
          this.state.confidence_colors[this.state.formProps.confidence - 1]
        } raised centered card`}
      >
        <div className="content">
          <div className="right floated">
            Chap:{this.state.formProps.chapter}
          </div>
          No.{this.state.formProps.number}
        </div>
        <div className="image">
          <div
            className=""
            style={{
              fontSize: "60px",
              height: "90px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {this.state.formProps.character}
          </div>
        </div>
        <div className="content">
          <div className="header">{this.state.formProps.meaning}</div>
          <div className="description">{this.state.formProps.story}</div>
        </div>
        <div className="extra content">
          <span className="right floated">Last Reviewed: </span>
          <span>
            <i className="user icon"></i>
            {this.state.confidences[this.state.formProps.confidence - 1]}
          </span>
        </div>
      </div>
    );
  }
}

export default KanjiCard;
