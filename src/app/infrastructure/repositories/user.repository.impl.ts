import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { USER_REPOSITORY } from '../../modules/users/users.tokens';
import { User } from '../../core/models/user.model';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryImpl {
  constructor(@Inject(USER_REPOSITORY) private userService: UserService) {}

  searchUsers(query: any, page: number, size: number): Observable<User[]> {
    return this.userService.searchUsers(query, page, size);
  }
}
