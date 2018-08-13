import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchQuery: string;
  title: string;
  displayQuery: string;
  currentPage: number;
  constructor(private gitSearchService: GitSearchService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
      this.currentPage = parseInt(params.get('page'), 10);
      this.gitSearch(this.searchQuery);
    });
    this.route.data.subscribe( (result) => {
      this.title = result.title;
    });
  }

  gitSearch = (query) => {
    this.gitSearchService.gitSearch(this.searchQuery, this.currentPage).then( (response) => {
      this.searchResults = response;
    }, (error) => {
      alert('Error: ' + error.statusText);
    });
  }
  sendQuery = () => {
    this.searchResults = null;
    this.router.navigate(['/search/' + this.searchQuery + '/' + this.currentPage]);
  }

  changePage = (delta: number) => {
    this.currentPage += delta;
    this.sendQuery();
}

}
