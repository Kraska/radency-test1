import { BodyLayout } from './layout/BodyLayout.js';

document.querySelector("#content").innerHTML = new BodyLayout().getContent();