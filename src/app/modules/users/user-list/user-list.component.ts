import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserRepositoryImpl } from '../../../infrastructure/repositories/user.repository.impl';
import { User } from '../../../core/models/user.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['username', 'firstName', 'surname1', 'surname2', 'email'];
  dataSource = new MatTableDataSource<User>();
  searchForm: FormGroup;
  pageSize = 5;
  totalItems = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserRepositoryImpl, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      username: [''],
      firstName: [''],
      surname1: [''],
      surname2: [''],
      email: ['']
    });
  }

  ngOnInit() {
    this.searchForm.valueChanges.pipe(debounceTime(300)).subscribe(() => {
      this.paginator.pageIndex = 0;
      this.loadUsers();
    });
  }

  ngAfterViewInit() {
    this.loadUsers();
    this.paginator.page.subscribe(() => this.loadUsers());
  }

  loadUsers() {
    if (this.paginator) {
      const pageIndex = this.paginator.pageIndex + 1;
      const pageSize = this.paginator.pageSize;
      const searchQuery = this.searchForm.value;

      this.userService.searchUsers(searchQuery, pageIndex, pageSize).subscribe((response: any)=> {
        const users = response.users;
        this.dataSource.data = users;
        this.totalItems = response.totalItems; 
        this.paginator.length = this.totalItems;
      });
    }
  }

  resetFilters() {
    this.searchForm.reset();
    this.paginator.pageIndex = 0;
    this.loadUsers();
  }

  isFiltersApplied(): boolean {
    return Object.values(this.searchForm.value).some(value => value !== '');
  }
}
