import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: object;
  _http: any;

  constructor(private data: DataService) { }

  ngOnInit() {
    return this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  firstClick(): void {
    this.data.clicked();
  }
}
