import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { createStore } from "redux";
import { rootReducer, composeEnhancers } from "../src/store";
import { Provider } from "react-redux";
import StoryRouter from "storybook-react-router";
import "../src/index.scss";

const req = require.context("../src", true, /\.stories\.tsx$/);
function loadStories() {
  req.keys().forEach(req);
}

const store = createStore(rootReducer, composeEnhancers());

const withProvider = (story: any) => (
  <Provider store={store}>{story()}</Provider>
);

addDecorator(StoryRouter());
addDecorator(withProvider);
configure(loadStories, module);
