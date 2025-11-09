import "preact/devtools";
import { render } from "preact";

import App from "./app";
import "./index.css";

const rootElement = document.getElementById("app");

if (!rootElement) {
	throw new Error("Failed to find root element with id 'app'.");
}

render(<App />, rootElement);
