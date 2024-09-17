import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../core/models/user.model';
import { UserRepository } from '../../core/repositories/user.repository';
import { API_KEY } from 'src/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserRepository {
  private apiUrl = API_KEY.url

  constructor(private http: HttpClient) {}

  searchUsers(query: any, page: number, size: number): Observable<User[]> {
    const body = { query, page, size };
    return this.http.post<User[]>(`${this.apiUrl}/users/search`, body);
  }

}
