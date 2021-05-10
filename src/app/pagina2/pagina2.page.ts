import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(private route: ActivatedRoute) { }

  /* Para recoger el id que manda la pg Home utilizamos this.route.snapshot.paramMap.get(‘id’).*/
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    alert(id);
  }

}