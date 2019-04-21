import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComicsService } from './comics.service';
import { Subscription } from 'rxjs';
import { ComicsModel } from './comics.model';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit, OnDestroy {

  comics: Array<ComicsModel> = new Array<ComicsModel>();

  subscription: Subscription = new Subscription();

  constructor(private comicsService: ComicsService) { }

  ngOnInit() {
    this.onGetAll();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onGetAll() {
    this.subscription.add(this.comicsService.getAll().subscribe(comics => {

      var countRares = ((comics.length / 100) * 10);

      for (let i = 0; i < countRares; i++) {
        var camicsRare = comics.filter(c => !c.isRare);
        var randomComic = camicsRare[Math.floor(Math.random() * comics.length)];
        randomComic.isRare = true;
      }

      this.comics = comics;
      
    }))
  }

}
