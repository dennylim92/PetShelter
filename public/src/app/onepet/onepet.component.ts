import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-onepet',
  templateUrl: './onepet.component.html',
  styleUrls: ['./onepet.component.css']
})
export class OnepetComponent implements OnInit {

  onePet: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.findOnePet(params.id);
      });
  }

  findOnePet(id) {
    const obs = this._httpService.onePet(id);
    obs.subscribe(data => {
      this.onePet = data;
    });
    this.onePet = { name: '', type: '', description: '', skill1: '', skill2: '', skill3: '' };
  }

  removePet(id) {
    const obs = this._httpService.deletePet(id);
    obs.subscribe(data => {
      this._router.navigate(['/pets']);
    });
  }

}
