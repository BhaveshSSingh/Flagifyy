import React, { useState } from "react";
import "./styles.css";

var flagDictionary = {
  "🏁 ": "Chequered Flag",
  "🚩 ": "Triangular Flag",
  "🎌 ": " Crossed Flags  ",
  " 🏴": " Black Flag",
  "🏳️ ": "White Flag",
  " 🏳️‍🌈": "Rainbow Flag",
  "🏳️‍⚧️  ": "Transgender Flag",
  "🏴‍☠️ ": "Pirate Flag"

  // " ": "",
  // " ": "",
  // " ": "",
  // " ": "",
  // " ": "",
  // " ": ""
};

var flagsWeKnow = Object.keys(flagDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function flagsInputHandler(event) {
    var flagsInput = event.target.value;

    var meaning = flagDictionary[flagsInput];

    if (meaning === undefined) {
      meaning = "This Flag isn't Avaliable in our Database";
    }
    setMeaning(meaning);
  }

  function flagsClickHandler(emoji) {
    var meaning = flagDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Flagify!</h1>
      <input onChange={flagsInputHandler}></input>
      <h2>{meaning}</h2>
      <h3>Flags We Know</h3>
      {flagsWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => flagsClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/**
 *
 * VISER --. View -> Interact -> State in Event handler  -> Render
 */
