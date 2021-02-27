import { action } from 'typesafe-actions';
import { Plano } from '../../types/dash-board';
import { DashboardActions, Screen, Transactions } from './types';

export const change_screen = (screen: Screen) => action( DashboardActions.CHANGE_SCREEN, screen );

export const insert_transaction_data = (data: Transactions) => action( DashboardActions.INSERT_TRANSACTION_DATA, data );

export const insert_plans_data = (data: Plano[]) => action( DashboardActions.INSERT_PLANS_DATA, data );