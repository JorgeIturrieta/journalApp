import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from "../../actions/notes";
import moment from 'moment';
import 'moment/locale/es';
export const NotesAppBar = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector(state => state.notes);
  const handleSave = () => {
      dispatch(startSaveNote(note));
  }
  const handleUpload = () => {
    document.querySelector('#fileSelector').click();  
  }

  const handleFileChange = (e) => {
   const file = e.target.files[0];
   if(file) {
     dispatch(startUploading(file));
   }
  }
  return (
    <div className="notes__appbar">
      <span> {moment(note.date).format('dddd, LL')}</span>
       <input 
         id = "fileSelector"
         type="file"
         name = "file"
         style = {{display: 'none' }}
         onChange = { handleFileChange }
       />
      <div>
        <button 
        className="btn"
        onClick = { handleUpload }
        >
          Picture
        </button>

        <button 
        className="btn"
        onClick = {handleSave}
        >
          Save</button>
      </div>
    </div>
  );
};
