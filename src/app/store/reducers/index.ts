import { postReducer } from "./post.reducer";
import { ActionReducerMap } from '@ngrx/store'

export interface AppState {
  posts: any
}

export const reducers: ActionReducerMap<AppState> = {
  posts: postReducer
}