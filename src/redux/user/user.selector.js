import { createSelector } from 'reselect';

const selecttUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selecttUser],
    (user) => user.currentUser
);