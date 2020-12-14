import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detailform',
  templateUrl: './detailform.component.html',
  styleUrls: ['./detailform.component.scss']
})
export class DetailformComponent implements OnInit {
  // チェックボックス用
  checked = false;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
