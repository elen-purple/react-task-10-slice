import { createReducer } from "@reduxjs/toolkit";

const contactsInitialState = [];

const filterInitialState = "";

export const contactsReducer = createReducer(
  contactsInitialState,
  (builder) => {
    builder
      .addCase("tasks/deleteTask", (state, action) => {
        return state.filter(({ id }) => id !== action.payload);
      })
      .addCase("tasks/addTask", (state, action) => {
        return [...state, action.payload];
      });
  },
);

export const filterReducer = createReducer(filterInitialState, (builder) => {
  builder.addCase("filter/filterTasks", (state, action) => {
    return action.payload;
  });
});
