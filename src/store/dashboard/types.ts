export enum DashboardActions {
    CHANGE_SCREEN = 'CHANGE_SCREEN'
}

export type Screen = 'Depósitos' | 'Pagamentos' | 'Planos' | 'Transações';

export interface DashboardData {
    current_screen: Screen;
}