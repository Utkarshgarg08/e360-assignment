import { createAction, props } from '@ngrx/store';
import { IUserData } from 'src/models/user.interface';

export const getUser = createAction('[User Component] get user');
export const getUserSuccess = createAction('[User Component] get user Success', props<{ userData : IUserData}>());

