import app from "./app";
import initModel from "./model";
import view from "./view";
import update from "./update";


const node  = document.getElementById("app");
const el = document.createElement("p");
el.innerHTML = JSON.stringify(initModel, null, 2);

node.appendChild(el);

app(initModel, view, update, node);
