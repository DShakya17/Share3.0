import * as React from "react";
import { Dropdown, IDropdownOption } from "office-ui-fabric-react";
interface IDropDownBasicProps {
  label: string;
  keys: string;
  options: any;
}
class DropDownBasic extends React.Component<IDropDownBasicProps, any> {
  state = { isSelected: false, selected: "" };
  render() {
    const { label, keys, options } = this.props;
    return (
      <Dropdown
        label={label}
        key={keys}
        options={options}
        style={{
          borderRight: this.state.isSelected ? "" : "3px solid red "
        }}
        onChanged={this.handleChange}
        required
      />
    );
  }
  private handleChange = (option: IDropdownOption) => {
    this.setState({ isSelected: true });
    this.setState({ selected: option.text });
  };
}
export default DropDownBasic;
