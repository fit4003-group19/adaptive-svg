import React from "react";
import { useRadioGroupState } from "@react-stately/radio";
import { useRadioGroup, useRadio } from "@react-aria/radio";

function Questions({ response }) {
  let RadioContext = React.createContext(null);

  function RadioGroup(props) {
    let { children, label } = props;
    let state = useRadioGroupState(props);
    let { radioGroupProps, labelProps } = useRadioGroup(props, state);

    return (
      <div {...radioGroupProps}>
        <span {...labelProps}>{label}</span>
        <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
      </div>
    );
  }

  function Radio(props) {
    let { children } = props;
    let state = React.useContext(RadioContext);
    let ref = React.useRef(null);
    let { inputProps } = useRadio(props, state, ref);

    return (
      <label style={{ display: "block" }}>
        <input {...inputProps} ref={ref} />
        {children}
      </label>
    );
  }

  return response.map((response) => (
    <RadioGroup label={response.question}>
      <Radio value="yes">Yes</Radio>
      <Radio value="no">No</Radio>
    </RadioGroup>
  ));
}

export default Questions;
