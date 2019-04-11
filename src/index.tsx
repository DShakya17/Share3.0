import * as React from "react";
import { render } from "react-dom";
import { formOption } from "./datatypes/index";
import { PrimaryButton } from "office-ui-fabric-react";
import "./index.css";
import Page2 from "./components/Page2";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
initializeIcons(/* optional base url */);
class App extends React.Component {
  state = { isClicked: false, value: "" };
  public render() {
    const listItems = formOption.map((value, key) =>
      this.renderButton(value, key)
    );
    return (
      <div>
        <div className="Page1">{listItems}</div>
        {this.state.isClicked ? (
          <div>
            <Page2 value={this.state.value} />
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
  private renderButton = (value: any, key: number) => {
    return (
      <PrimaryButton
        key={value.key}
        text={value.text}
        ariaLabel={value.key}
        onClick={event => this.handleClick(event)}
      />
    );
  };
  private handleClick = (event: any) => {
    this.setState({ isClicked: true });
    this.setState({ value: event.target.innerText });
  };
}

render(<App />, document.getElementById("root"));
