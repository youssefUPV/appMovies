import { Component, Input, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})

export class DetailsComponent implements OnInit {
  @Input() date: any; name: any; language: any; plot: any; genre: any; director: any; actors: any;
  constructor(private modalController:ModalController) { }
  
  async close(){
    await this.modalController.dismiss();
  }
  
  ngOnInit() {}

}
