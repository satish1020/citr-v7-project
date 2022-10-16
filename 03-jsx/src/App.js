import { render } from "react-dom";
// import Pet from "./Pet";
import useCallbackExample from './useCallbackExample.js'

const App = () => {
  return (
    <div>
      {/* <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" /> */}
       <useCallbackExample/>
    </div>
  );
};

render(<App />, document.getElementById("root"));
