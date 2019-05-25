import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-editpet',
  templateUrl: './editpet.component.html',
  styleUrls: ['./editpet.component.css']
})
export class EditpetComponent implements OnInit {

  updatePet: any;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.findOnePet(params.id);
      });
    this.updatePet = { name: '', type: '', description: '', skill1: '', skill2: '', skill3: '' };
  }

  findOnePet(id) {
    const obs = this._httpService.onePet(id);
    obs.subscribe(data => {
      this.updatePet = data;
    });
  }

  editPet(id) {
    const obs = this._httpService.editPet(id, this.updatePet);
    obs.subscribe(data => {
      this._router.navigate(['/pets', this.updatePet._id]);
    });
  }

}
