import React from "react";

function Joke({setup, punchline}) {
  console.log(setup);
  return (
    <>
      <section>
        <div className="container">
          {setup ? <h1>Setup: {setup}</h1> : ""}
          {punchline ? <p>Punchline: {punchline}</p> : ""}
        </div>
      </section>
    </>
  );
}

export default Joke;
