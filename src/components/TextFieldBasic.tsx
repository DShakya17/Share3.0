import * as React from "react";
import { TextField } from "office-ui-fabric-react";

interface ITextFieldBasicProps {
  label: string;
  keys: string;
  getData: any;
}
class TextFieldBasic extends React.Component<ITextFieldBasicProps, any> {
  state = { isFiled: false, selected: "" };
  render() {
    const { label, keys } = this.props;
    return (
      <TextField
        label={label}
        key={keys}
        required
        style={{
          borderRight: this.state.isFiled ? "" : "3px solid red "
        }}
        onSelect={this.handleChange}
      />
    );
  }
  private handleChange = (event: any) => {
    if (event.target.value.length >= 1) {
      this.setState({ isFiled: true, selected: event.target.value });
      this.props.getData(this.props.keys, false, event.target.value);
    } else {
      this.setState({ isFiled: false });
    }
  };
}
export default TextFieldBasic;
