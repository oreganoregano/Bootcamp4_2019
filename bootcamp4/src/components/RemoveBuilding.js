import React from "react";

class RemoveBuilding extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    this.props.dataDelete(this.code.value);
  };
  render() {
    return (
      <div>
        <p>Enter the code of the entry you want to delete</p>
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
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default RemoveBuilding;
