import React from "react";

class Button extends React.Component {
  state = { active: "" };
  onButtonClicked = () => {
    this.props.whenClicked(this.props.name, this.props.index);
  };

  render() {
    return (
      <div
        onClick={this.onButtonClicked}
        className={`item ${this.props.active}`}
      >
        {this.props.name}
      </div>
    );
  }
}

export default Button;
