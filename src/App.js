import Joke from "./components/Joke/Joke";
import jokesData from "./components/jokesData";
let i = 1;
function App() {
  const jokeElements = jokesData.map((joke) => {
    return <Joke key={joke.punchline} punchline={joke.punchline} setup={joke.setup} />;
  });
  return jokeElements;
}

export default App;
