import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddPostService } from '../add-post.service';
import { PostPayload } from '../add-post/post-payload';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  paramLink: Number;
  post: PostPayload;
  constructor(private route: ActivatedRoute, private postService: AddPostService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.paramLink = params['id'];
    });

    this.postService.getPost(this.paramLink).subscribe(data => {
      this.post = data;
    }, error => {
      console.log('Failure while getting post id '+this.paramLink);
    });
  }

}
