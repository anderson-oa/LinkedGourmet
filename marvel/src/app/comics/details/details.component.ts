import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComicsService } from '../comics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  comic: any;

  subscription: Subscription = new Subscription();

  constructor(private comicsService: ComicsService,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.getById();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getById() {
    var id = this.router.snapshot.paramMap.get('id');
    this.subscription.add(this.comicsService.getById(id).subscribe(result => {
      this.comic = result;
    }));
  }

  getImage(): string {
    if (this.comic) {
      return `${this.comic.thumbnail.path}.${this.comic.thumbnail.extension}`
    }
    else {
      return "";
    }
  }

}
