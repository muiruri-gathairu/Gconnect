import { SearchService } from './../search-service/search.service';
import { User } from './../user';
import { Repository } from './../repository';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [SearchService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public searchMe = '';
  public githubUser: string;

  users: User ;
  repository: Repository;
  public searchRepo: string;
  public resultCount = 12;


  findUser(username) {
      this.githubUser = '';
      this.searchMe  = username;
      this.ngOnInit();
  }


constructor(public githubUserRequest: SearchService, public userRepos: SearchService) { }

ngOnInit() {
    this.githubUserRequest.githubUser(this.searchMe);
    this.users = this.githubUserRequest.users;
    this.userRepos.gitUserRepos(this.searchMe);
    console.log(this.userRepos);
}


  searchRepos() {
      this.searchRepo = '';
      this.resultCount = 10;

  }
}
