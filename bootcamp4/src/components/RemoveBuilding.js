import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

class RemoveBuilding extends React.Component {
  onClick = () => {
    this.props.dataDelete(this.props.id);
  };
  render() {
    return (
      <td>
        {/* <p>Enter the code of the entry you want to delete</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Code:
            <input
              type="text"
              ref={value => {
                this.code = value;
              }}
            />
          </label>
          <input type="submit" value="Submit" /> */}
        {/* </form> */}
        <button
          onClick={this.onClick}
          style={{
            backgroundColor: "transparent",
            border: "none",
            boxShadow: "none"
          }}
        >
          <FontAwesomeIcon size="lg" icon={faTimesCircle} />
        </button>
      </td>
    );
  }
}

export default RemoveBuilding;
