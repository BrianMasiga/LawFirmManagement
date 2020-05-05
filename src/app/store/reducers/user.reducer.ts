import { IUser } from './../../interfaces/administration/User';

import * as actions from './../actions/user.actions';


export type Action = actions.AddUser | actions.Clear;

const defaultState: IUser = { LoggedIn: false };

const newState = (state: IUser, newData: IUser) => {
    return Object.assign({}, state, newData);
};

const GetUserSession = (): IUser => {
    const decodedCookie = sessionStorage.getItem('CurrentUser');
    let UserState = defaultState;
    if (decodedCookie) {
        const CurrentUser: IUser = JSON.parse(decodedCookie);
        if (CurrentUser.LoggedIn) {
            UserState = CurrentUser;
        }
    }
    return UserState;
};

export function userReducer(state: IUser = defaultState, action: Action) {
    switch (action.type) {
        case actions.USER_DATA:
            return newState(state, state = action.user);
        case actions.CLEAR:
            return newState(state, state = defaultState);
        default: {
            return GetUserSession();
        }
    }
}