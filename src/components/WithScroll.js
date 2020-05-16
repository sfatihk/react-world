import React from "react";
import GenerateBackgroundColor from "../utils/GenerateBackgroundColor";
const WithScroll = WrappedComponent => {
  class HOC extends React.Component {
    state = {
      scroll: 0,
      onScrolling: false,
      scrollDirection: 1, //forward:1 , backward: 0
      scrollDelta: 0 //for responsive max scroll height
    };
    oldScroll = 0;
    startScroll = 0;
    maxScroll = 29000;
    scrollIncrement = 10;
    autoScroll = false;

    autoStandbyTime = 3000; //switch autoscroll mode after no scrolling
    waitForScroll = null;

    componentDidMount() {
      this.state.scroll = this.startScroll;
      document.location = "#";
      this.hackTheScroll(this.state.scroll);
      window.addEventListener("scroll", this.animateWithScroll);
      this.autoAnimate();
    }

    componentWillUnmount() {
      window.removeEventListener("scroll", this.animateWithScroll);
    }

    autoAnimate = () => {
      requestAnimationFrame(this.autoAnimate);
      if (!this.autoScroll) return;

      this.state.onScrolling = true;
      this.state.scrollDirection = 1;
      if (this.state.scroll < this.maxScroll)
        this.state.scroll += this.scrollIncrement;
      this.isScrollStable = false;
      this.forceUpdate();

      this.hackTheScroll(this.state.scroll);
    };

    animateWithScroll = event => {
      if (this.autoScroll) return;

      this.state.onScrolling = true;
      this.state.scrollDirection = window.scrollY - this.oldScroll > 0 ? 1 : 0;
      this.state.scroll =
        window.scrollY < this.maxScroll ? window.scrollY : this.maxScroll;
      this.oldScroll = window.scrollY;
      this.forceUpdate();
    };

    hackTheScroll = (val, event = null) => {
      val = Math.floor(val);

      const el = event || window;

      el.scroll(val, val);
      el.scrollBy(val, val);
      el.scrollTo(val, val);
    };

    shouldComponentUpdate(nextProps, nextState) {
      if (this.state.scroll !== nextProps.scroll) {
        return true;
      }
    }
    toggleAutoScroll = e => {
      e.preventDefault();
      this.autoScroll = !this.autoScroll;
    };
    render() {
      return (
        <div
          style={{
            height: `${window.innerHeight + this.maxScroll}px`, // for responsive
            backgroundColor: GenerateBackgroundColor(this.state.scroll),
            transition: "background-color 2s",
            overflow: `hidden`
          }}
        >
          <WrappedComponent
            onScrolling={this.state.onScrolling}
            scroll={this.state.scroll}
            scrollDirection={this.state.scrollDirection}
            {...this.props}
          />
          <div style={{ position: "fixed", width: "100%" }}>
            <div
              style={{
                width: `${(this.state.scroll / this.maxScroll) * 100}%`,
                height: 25,
                backgroundColor: "#6B6B6B"
              }}
            />
            <div onClick={this.toggleAutoScroll}>
              {this.state.scroll > 0 ? (
                <h1 style={{ marginLeft: 40 }}>
                  switch to {this.state.scroll}
                  <br />
                  <div style={{ color: "#ffff01" }}>
                    {this.autoScroll ? "scroll" : "autoplay"}
                  </div>
                </h1>
              ) : (
                <h1 style={{ marginLeft: 40 }}>
                  Welcome to
                  <br />
                  <div
                    style={{
                      width: 420,
                      padding: 40,
                      color: "#FFEB3B",
                      backgroundColor: "#6B6B6B"
                    }}
                  >
                    React World!
                  </div>
                </h1>
              )}
            </div>
          </div>
        </div>
      );
    }
  }

  return HOC;
};

export default WithScroll;
