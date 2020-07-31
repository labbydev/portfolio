import React, { Component } from "react"

class MenuToggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const menu = (
        this.props.children
  );

    return (
      <div className={`inline-block`}>
        <button
          className={`no-underline h-50px w-40px relative block focus:outline-none lg:hidden`}
          onClick={this.handleClick}
        >
          <span
            className={"bg-secondary block absolute left-0 w-full hamburger " + (this.state.isOpen ? "is-open" : "")}
          >Show Menu</span>
        </button>
        {this.state.isOpen ? menu : ""}
      </div>
    )
  }

  handleClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }
}

export default MenuToggle