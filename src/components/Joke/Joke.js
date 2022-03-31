import React from "react";

function Joke({ setup, punchline, rating, comments, isPun }) {
  const classes = isPun ?  ['joke pun'] : ['joke']
  return (
    <>
      <section className={classes}>
        <div className="container">
          {setup ? <h1>Setup: {setup}</h1> : ""}
          {punchline ? <p>Punchline: {punchline}</p> : ""}
          {rating ? <span>{rating}</span> : ""}
          {comments ? <div>{comments}</div> : ""}
        </div>
      </section>
    </>
  );
}

export default Joke;
