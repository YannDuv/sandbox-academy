import React from "react";
import { storiesOf } from "@storybook/react";
import MovieSearch from "./MovieSearch";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer, composeEnhancers } from "../../../store";

const store = createStore(rootReducer, composeEnhancers());

const withProvider = (story: any) => (
  <Provider store={store}>{story()}</Provider>
);

storiesOf("MovieSearch", module)
  .addDecorator(withProvider)
  .add("render", () => <MovieSearch />);
