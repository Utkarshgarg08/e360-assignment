import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userState } from './app.reducer';

export const featureKey = 'user';

export const selectFeature = createFeatureSelector<userState>(featureKey);

export const selectFeatureUser = createSelector(
  selectFeature,
  (state: userState) => {return state.users}
);
