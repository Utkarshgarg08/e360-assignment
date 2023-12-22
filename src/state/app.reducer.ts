import { createReducer, Action,on } from '@ngrx/store';
import { IUser } from 'src/models/user.interface';
import { getUserSuccess, getUser } from './app.actions';


export interface userState {
  users:IUser[]
}

const initialState: userState = {
  users:[]
};

export const _userReducer = createReducer(
  initialState,
  on(getUser, state => {
		return {
			...state,
			user:0
		};
	}),
  on(getUserSuccess, (state,{userData}) => {
		return {
			...state,
			users:userData.users
		};
	}),
);

export function userReducer(state: any, action: Action) {
	return _userReducer(state, action);
}
