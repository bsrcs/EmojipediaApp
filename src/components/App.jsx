import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// Create Entry Component
// Create props to replace hardcoded data
function createCard(emoji){
  return(
    <Entry
        key={emoji.id}
        emoji={emoji.emoji}
        name= {emoji.name}
        description={emoji.meaning}
      />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {/* Map through the emojipedia array & render entry components.*/}
        {emojipedia.map(createCard)}
      </dl>
      
    </div>
  );
}

export default App;
