import React from "react"; // import react library
import ReactDOM from "react-dom/client"; // import react-dom for rendering
import App from "./App"; // import main app component
import "./index.css"; // import global styles

ReactDOM.createRoot(document.getElementById("root")).render( // render the app
  <React.StrictMode>                                         {/*enable strict mode*/}
    <App />                                                {/* render main app component */}
  </React.StrictMode>                                       // end strict mode
);
    