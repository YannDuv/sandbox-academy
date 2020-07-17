import React from "react";
import { storiesOf } from "@storybook/react";
import MovieGrid from "./MovieGrid";
import { createStore } from "redux";
import { rootReducer, composeEnhancers } from "../../../store";
import { Provider } from "react-redux";
import { updateMovies } from "../../../store/movies/actions";

const store = createStore(rootReducer, composeEnhancers());

const withProvider = (story: any) => (
  <Provider store={store}>{story()}</Provider>
);

storiesOf("MovieGrid", module)
  .addDecorator(withProvider)
  .add("empty grid", () => {
    store.dispatch(updateMovies([]));
    return <MovieGrid />;
  })
  .add("one element grid", () => {
    store.dispatch(updateMovies([]));
    store.dispatch(
      updateMovies([
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
      ])
    );

    return <MovieGrid />;
  })
  .add("five elements grid", () => {
    store.dispatch(updateMovies([]));
    store.dispatch(
      updateMovies([
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
      ])
    );

    return <MovieGrid />;
  })
  .add("ten elements grid", () => {
    store.dispatch(updateMovies([]));
    store.dispatch(
      updateMovies([
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
        {
          id: 11,
          title: "Star wars",
          poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
          overview:
            "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
        },
      ])
    );

    return <MovieGrid />;
  });
