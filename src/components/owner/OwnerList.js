import React, { Component } from "react";

export default class OwnerList extends Component {
  render() {
    console.log(this.props.owners);
    return (
      <section className="owner">
        {this.props.owners.map(owner => (
          <div key={owner.id}>{owner.name}</div>
        ))}
      </section>
    );
  }
}
