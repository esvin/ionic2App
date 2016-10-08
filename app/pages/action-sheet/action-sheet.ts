import {Page,Platform,ActionSheet, NavController} from 'ionic-angular';

/*
  Generated class for the ActionSheetPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/action-sheet/action-sheet.html',
})
export class ActionSheetPage {

  constructor(public platform: Platform, public nav: NavController) {
  }
  openMenu()
  {
    let actionSheet = ActionSheet.create({
      title: 'Productos',
      cssClass: 'action-sheet',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Boton seleccionado');
          }
        },
        {
          text: 'Compartir',
          icon: 'share',
          handler: () => {
            console.log('Compartir seleccionado');
          }
        },
        {
          text: 'Jugar',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log('Jugar Seleccionado');
          }
        }
      ]
    });
    this.nav.present(actionSheet);
  }
}
