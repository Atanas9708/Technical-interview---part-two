import { FETCH_SUCCESS, FETCH_FAILED, GET_POSTS_SUCCESS, SAVE_CHANGES } from './actionTypes';

export function saveChanges(user) {
  return {
    type: SAVE_CHANGES,
    user
  }
}

export function getPostsSuccess(posts) {
  return {
    type: GET_POSTS_SUCCESS,
    posts
  }
}

export function fetchSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    data
  }
}

export function fetchFailed(err) {
  return {
    type: FETCH_FAILED,
    err
  }
}