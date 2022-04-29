import React from "react";
import Button from "./Button";

class MenuList extends React.Component {
  state = { buttonState: ["active", "", ""] };
  showMenuContent = (term, index) => {
    const updatedState = this.state.buttonState.map((state, i) => {
      return i === index ? "active" : "";
    });
    this.setState({ buttonState: updatedState });
    this.props.whenClicked(term, index);
  };

  createMenuItems = () => {
    const items = this.props.menuItems.map((item, i) => {
      return (
        <Button
          whenClicked={this.showMenuContent}
          name={item.name}
          key={`menu-${i}`}
          index={i}
          active={this.state.buttonState[i]}
        />
      );
    });
    return items;
  };
  render() {
    return (
      <div className="four wide column">
        <div className="ui vertical fluid tabular menu">
          {this.createMenuItems()}
        </div>
      </div>
    );
  }
}

export default MenuList;
