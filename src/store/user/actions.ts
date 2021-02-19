import { action } from 'typesafe-actions';
import { FilteredUser } from '../../types/user';
import { UserActions } from './types';

export const set_user = (user: FilteredUser) => action(UserActions.SET_USER, user);

export const remove_user = () => action(UserActions.REMOVE_USER);