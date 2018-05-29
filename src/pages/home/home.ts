import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage({name:'hompage'})
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  disabledSwitch = false;
  userName:any;

  items = [
    {"id" : 1, name:"첫번째 아이템"},
    {"id" : 2, name:"두번째 아이템"},
    {"id" : 3, name:"세번째 아이템"},
    {"id" : 4, name:"네번째 아이템"}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  itemClicked(item) {
    alert(item.name);
  }

  buttonClicked(event) {
    // alert(event.target.textContent + " " + event.currentTarget.value);
    console.log(event.clientX + ' : ' + event.clientY);
    //bind page 호출
    this.navCtrl.push( 'BindPage', {value:event.currentTarget.value});
  }

}
