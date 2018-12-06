import { configure } from "@storybook/polymer";
import { setOptions } from "@storybook/addon-options";
const req = require.context("../elements", true, /\.story\.js$/);

setOptions({
  name: "wcfactory-test"
});

function loadStories() {
  req.keys().forEach(filename => {
    if (filename.includes("node_modules")) {
      return;
    }

    return req(filename);
  });
}

configure(loadStories, module);
