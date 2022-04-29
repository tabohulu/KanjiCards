import React from "react";
import MenuList from "./MenuList";
import KanjiCard from "./KanjiCard";
import NewKanjiCard from "./NewKanjiCard";
import ApprovalCard from "./ApprovalCard";

class App extends React.Component {
  state = { currentMenu: this.props.menuItems[0].name, index: 0 };
  menuItemClicked = (term, index) => {
    this.setState({ currentMenu: term, index: index });
  };

  showMenuContents = (index) => {
    if (index === 1) {
      return (
        <ApprovalCard>
          <NewKanjiCard />
        </ApprovalCard>
      );
    }
    return index === 2 ? <KanjiCard /> : <div>Nothing</div>;
  };
  render() {
    return (
      <div>
        <h1>App</h1>
        <div className="ui grid">
          <MenuList
            whenClicked={this.menuItemClicked}
            menuItems={this.props.menuItems}
          />

          <div className="twelve wide stretched column">
            <div className="ui cards">
              {this.showMenuContents(this.state.index)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
