import React, { Component } from "react";

class Note extends Component {
  updateTitle = event => {
    let updatedValue = event.target.value;
    let editMeId = this.props.note.id;
    this.props.onType(editMeId, "title", updatedValue);
  };
  updateDescription = e => {
    let updatedValue = e.target.value;
    let editMeId = this.props.note.id;
    this.props.onType(editMeId, "description", updatedValue);
  };
  clickDelete = () => this.props.remove(this.props.note.id);
  render() {
    return (
      <li className="note">
        <input
          type="text"
          value={this.props.note.title}
          onChange={this.updateTitle}
          placeholder="Title"
          className="note__title"
        />
        <textarea
          value={this.props.note.description}
          onChange={this.updateDescription}
          placeholder="Description..."
          className="note__description"
        />
        <span onClick={this.clickDelete} className="note__delete">
          X
        </span>
      </li>
    );
  }
}

export default Note;
