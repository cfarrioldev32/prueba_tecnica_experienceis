import { Observable } from 'rxjs';
import { User } from '../models/user.model';

export abstract class UserRepository {
  abstract searchUsers(query: any, page: number, size: number): Observable<User[]>;
}