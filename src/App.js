import Joke from "./components/Joke/Joke";
import jokesData from "./components/jokesData";

function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke punchline={joke.punchline} setup={joke.setup} />;
  });
  return jokeElements;
}

export default App;
