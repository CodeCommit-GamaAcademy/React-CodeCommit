import { action } from 'typesafe-actions';
import { DashboardActions, Screen } from './types';

export const change_screen = (screen: Screen) => action( DashboardActions.CHANGE_SCREEN, screen );