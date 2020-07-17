import React from "react";
import { storiesOf } from "@storybook/react";
import MovieShort from "./MovieShort";

storiesOf("MovieShort", module)
  .add("empty movie", () => (
    <MovieShort movie={{ id: 0, title: "", poster_path: "", overview: "" }} />
  ))
  .add("star wars", () => (
    <MovieShort
      movie={{
        id: 11,
        title: "Star wars",
        poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
        overview:
          "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
      }}
    />
  ));