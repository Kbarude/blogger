import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Blogpost } from '../blogpost';
import { BlogpostService } from '../blogpost.service';
import { Post } from '../Post';


@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  title="Blogs";
  blog : Blogpost;
  post : Post;
  error: {};
  
  
  constructor(private titleservice:Title , private blogservice:BlogpostService) { }
  
  ngOnInit() {

    this.titleservice.setTitle(this.title);

    this.blogservice.getPosts().subscribe(
      (data:Post)=>this.post = data,
      error=>this.error = error
    );
  }


}
