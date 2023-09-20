import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

import routes from "./routes";

ReactDOM.render(<Router>{routes}</Router>, document.getElementById("root"));

// import ReactDOM from "react-dom";

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }

// setInterval(tick, 1000);
