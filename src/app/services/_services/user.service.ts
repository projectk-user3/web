import { Injectable } from '@angular/core';
import { User } from '../../_models/user';
import { RestService } from '../rest.service';
import { AppConstants } from '../../constants/config.constants';

@Injectable()
export class UserService {
    baseJsonServerUrl = AppConstants.apiEndpoint;
    
    constructor(private _restService: RestService) { }

    getAll(postData: any) {
       return this._restService.httpPostCall(AppConstants.searchEndPoint,postData);
    }

    /*getById(id: number) {
        return this.http.get(`${config.apiUrl}/users/` + id);
    }

    register(user: User) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`${config.apiUrl}/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`${config.apiUrl}/users/` + id);
    }*/
}