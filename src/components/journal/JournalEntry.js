import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2019/07/Man-Silhouette.jpg)",
        }}
      ></div>
      <div className="journal__entry-body">
        <p className="jouranl_entry-title">Hoy esto es un titulo</p>
        <p className="jouranl_entry-content">Todo bien</p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>14</h4>
      </div>
    </div>
  );
};
