import React from "react";
import MenuList from "./MenuList";
import KanjiCard from "./KanjiCard";
import NewKanjiCard from "./NewKanjiCard";

class App extends React.Component {
  state = {
    currentMenu: this.props.menuItems[0].name,
    index: 0,
    apiRes: "nothing",
    kanjiCards: [],
    prevCards: 0,
  };

  menuItemClicked = (term, index) => {
    this.setState({ currentMenu: term, index: index });
  };

  newCardAdded = (cardObjs) => {
    console.log(cardObjs);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cardObjs),
    };
    fetch("/save_kanji", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  retrieveCards = (data) => {
    const cards = data.map((dat) => {
      return <KanjiCard formProps={dat} key={dat.number} />;
    });
    this.setState({ kanjiCards: cards });
  };

  componentDidUpdate() {
    if (this.state.prevCards !== this.state.kanjiCards.length) {
      console.log("updating...");
      fetch("/get_kanji")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.retrieveCards(data.data);
          this.setState({ prevCards: this.state.kanjiCards.length });
        })
        .catch((error) => {
          console.log("nope");
          console.log(error);
        });
    }
  }
  componentDidMount() {
    fetch("/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ apiRes: data });
      })
      .catch((error) => {
        console.log("nope");
        console.log(error);
      });

    fetch("/get_kanji")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.retrieveCards(data.data);
        // this.state.prevCards = this.state.kanjiCards.length;
      })
      .catch((error) => {
        console.log("nope");
        console.log(error);
      });
  }

  showMenuContents = (index) => {
    if (index === 0) {
      return <div>{this.state.apiRes.hello}</div>;
    }
    if (index === 1) {
      return <NewKanjiCard onSubmit={this.newCardAdded} />;
    }
    if (index === 2) {
      return this.state.kanjiCards;
    }
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
