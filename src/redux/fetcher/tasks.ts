import type { ITasks } from "@/type";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store/store";

const initialState: ITasks[] = [
  {
    id: "1254s",
    name: "ready documentation",
    description: "this task some issue found and solve this now",
    isComplete: false,
    endDate: "12-12-25",
    priority: "High",
  },
  {
    id: "1254s",
    name: "ready documentation",
    description: "this task some issue found and solve this now",
    isComplete: false,
    endDate: "12-12-25",
    priority: "High",
  },
  {
    id: "1254s",
    name: "ready documentation",
    description: "this task some issue found and solve this now",
    isComplete: false,
    endDate: "12-12-25",
    priority: "High",
  },
  {
    id: "1254s",
    name: "ready documentation",
    description: "this task some issue found and solve this now",
    isComplete: false,
    endDate: "12-12-25",
    priority: "High",
  },
];
const tasks = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const taskState = (state: RootState) => state.tasks;
export const taskReducer = tasks.reducer;
