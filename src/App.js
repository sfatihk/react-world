import React, { Component } from "react";
import Player from "./components/Player/Player";
import Ground from "./components/MainLayers/Ground";
import Environment from "./components/MainLayers/Environment";
import Sky from "./components/MainLayers/Sky";
import WithScroll from "./components/WithScroll";

class App extends Component {
  render() {
    return (
      <div>
        <Player
          onScrolling={this.props.onScrolling}
          scroll={this.props.scroll}
          scrollDirection={this.props.scrollDirection}
        />
        <Sky name="Sky" scroll={this.props.scroll} />
        <Environment name="Environment" scroll={this.props.scroll} />
        <Ground name="Ground" scroll={this.props.scroll} />
      </div>
    );
  }
}

const wrappedApp = WithScroll(App);

export default React.memo(wrappedApp);
