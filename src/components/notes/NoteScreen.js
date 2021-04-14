import React from "react";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {
  return (
    <div className="notes__main-content">
      <NotesAppBar />
      <div className="notes_content">
        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          autoComplete="off"
        />
        <textarea
          placeholder="what do you do today"
          className="notes__textarea"
        ></textarea>
        <div className="notes__image">
          <img
            src="https://sloanreview.mit.edu/wp-content/uploads/2018/08/GEN-Fishbach-Giving-Advice-BL-1200.jpg"
            alt="imagen"
          />
        </div>
      </div>
    </div>
  );
};
