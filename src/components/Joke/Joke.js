import React from "react";

function Joke({setup, punchline}) {
const [isShown, setIsShown] = React.useState(false)
function toggle() {
  setIsShown(prevState => {
    console.log(!prevState);
   return !prevState
  })
}
  return (
    <>
      <section>
        <div className="container">
          {setup && <h1>Setup: {setup}</h1>}
          {isShown && punchline && <p>Punchline: {punchline}</p>}
          <button onClick={toggle}>{isShown ? "Hide" : "Show"} punchline</button>

        </div>
      </section>
    </>
  );
}

export default Joke;
