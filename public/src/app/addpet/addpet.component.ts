import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-addpet',
  templateUrl: './addpet.component.html',
  styleUrls: ['./addpet.component.css']
})

export class AddpetComponent implements OnInit {

  newPet: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.newPet = { name: '', type: '', description: '', skill1: '', skill2: '', skill3: '' };
  }

  addPet() {
    const obs = this._httpService.addNewPet(this.newPet);
    obs.subscribe(data => {
      this.newPet = { name: ' ', type: ' ', description: ' ', skill1: ' ', skill2: ' ', skill3: ' ' };
      this._router.navigate(['/pets']);
    });
  }

}
