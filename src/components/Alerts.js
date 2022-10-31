import React from "react";

function Alerts(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    props.alert && (
      // className="text-center"
      // style={{
      //   position: "absolute",
      //   zIndex: "1",
      //   marginLeft: "auto",
      //   marginRight: "auto",
      //   display: "inline-block",
      // }}

      <div
        class={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
        style={{
          display: "inline-block",
          position: "fixed",
          zIndex: "1",
          marginLeft: "42.5%",
        }}
      >
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
      </div>
    )
  );
}

export default Alerts;
