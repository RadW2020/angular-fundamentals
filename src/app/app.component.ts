import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitUsersService } from './git-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GitHub Browser';
  constructor(private gitSearchService: GitSearchService,
  private gitUsersService: GitUsersService) {
  }

  ngOnInit() {

  }


}
