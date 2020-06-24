import { createSelector } from 'reselect';

const selectUsers = state => state.users;

export const getUserById = (state, userId) =>
  createSelector(
    selectUsers,
    state => state.users.filter(u => u.id === userId)[0]
  )(state);
