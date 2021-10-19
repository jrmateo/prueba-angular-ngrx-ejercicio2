import { createReducer, on } from "@ngrx/store";

export const initialPostState = [];

const _postReducer = createReducer(initialPostState);

export function postReducer(state: any, action: any) {
  return _postReducer(state, action);
}
