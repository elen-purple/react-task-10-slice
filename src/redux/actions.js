import { createAction } from "@reduxjs/toolkit";

export const filterTasks = createAction("filter/filterTasks");
export const deleteTask = createAction("tasks/deleteTask");
export const addTask = createAction("tasks/addTask");
