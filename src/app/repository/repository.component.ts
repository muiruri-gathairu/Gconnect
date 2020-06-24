import { User } from './../user';
import { Repository } from './../repository';
import { SearchService } from './../search-service/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  providers: [SearchService],
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  repository: Repository;
  public searchRepo: string;
  public resultCount = 12;

  searchRepos() {
      this.searchRepo = 'francismuk';
      this.resultCount = 10;
      this.getDataFunction();

  }

  constructor(public gitRepoRequest: SearchService ) { }

ngOnInit() {
      this.resultCount = 5;
    this.gitRepoRequest.gitRepos(this.searchRepo);
}


    getDataFunction() {
        this.gitRepoRequest.gitRepos(this.searchRepo);

    }


}

