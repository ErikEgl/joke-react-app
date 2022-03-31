import Joke from "./components/Joke/Joke";

function App() {
  return (
    <div className="jokes-wrap">
      <Joke
        setup="I got my daughter a fridge for her birthday."
        punchline="I can't wait to see her face light up when she opens it."
        isPun={true}
      />
      <Joke
        setup="How did the hacker escape the police?"
        punchline="He just ransomware!"
      />
      <Joke
        setup="Why don't pirates travel on mountain roads?"
        punchline="Scurvy."
        comments={["Comment 1", "Comment 2"]}
      />
      <Joke
        setup="Why do bees stay in the hive in the winter?"
        punchline="Swarm."
        isPun={true}
        rating={2}
      />
      <Joke
        setup="What's the best thing about Switzerland?"
        punchline="I don't know, but the flag is a big plus!"
      />
    </div>
  );
}

export default App;
