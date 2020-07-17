import React from "react";
import { storiesOf } from "@storybook/react";
import MovieGrid from "./MovieGrid";

storiesOf("MovieGrid", module).add("empty grid", () => <MovieGrid />);
