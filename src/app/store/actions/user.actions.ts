import { IUser } from './../../interfaces/administration/User';
import {Action} from '@ngrx/store';

export const USER_DATA = '[Data] Add';
export const CLEAR = '[Data] Clear';
 
export class AddUser implements Action {
    readonly type = USER_DATA;
    constructor(public user: IUser) { }
}
export class Clear implements Action {
    readonly type = CLEAR;
}