import * as React from "react";
import { formOption } from "../datatypes/index";
import TextFieldBasic from "../components/TextFieldBasic";
import DropDownBasic from "../components/DropDownBasic";
import { TextField, PrimaryButton } from "office-ui-fabric-react";
interface IProps {
  value: string;
}
class Page2 extends React.Component<IProps, any> {
  state = { result: [{ keys: "requesttype", key: false, data: "" }] };
  componentDidMount() {
    const { value } = this.props;
    const item = formOption.filter((val, key) => val.text === value);
    let listItems;
    if (item[0].option !== undefined) {
      listItems = item[0].option.map((value, key) =>
        value.key === "requesttype"
          ? new Object({ keys: value.key, key: false, data: value.value })
          : new Object({ keys: value.key, key: true, data: "" })
      );
    }
    this.setState({ result: listItems });
  }
  render() {
    const { value } = this.props;
    const item = formOption.filter((val, key) => val.text === value);
    let listItems;
    if (item[0].option !== undefined) {
      listItems = item[0].option.map((value, key) =>
        this.renderInput(value, key)
      );
    } else {
      <div />;
    }
    return (
      <>
        <form>
          <div className="Page2">{listItems}</div>
          <br />
          <PrimaryButton text="Submit" type="submit" />
        </form>
      </>
    );
  }
  private renderInput = (value: any, key: any) => {
    return value.text === "Request Type" ? (
      <TextField label="Request Type" disabled={true} value={value.text} />
    ) : value.type === "t" ? (
      <TextFieldBasic
        label={value.text}
        keys={value.key}
        getData={(keys: string, isSelected: boolean, value: string) =>
          this.handleGetData(keys, isSelected, value)
        }
      />
    ) : value.type === "d" ? (
      <DropDownBasic
        label={value.text}
        keys={value.keys}
        options={value.options}
      />
    ) : (
      <div />
    );
  };
  private handleGetData = (
    keys: string,
    isSelected: boolean,
    value: string
  ) => {
    const prevValue = this.state.result.filter(value => value.keys !== keys);
    const newValue = { keys, key: isSelected, data: value };
    this.setState({ showError: prevValue.concat(newValue) });
  };
}
export default Page2;
