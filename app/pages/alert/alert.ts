import {Page, Platform,NavController,Alert} from 'ionic-angular';

/*
  Generated class for the AlertPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/alert/alert.html',
})
export class AlertPage {
    testRadioOPen : boolean;
    testCheckboxOpen: boolean;
    testCheckboxResult;
    testRadioResult;
  constructor(public  platform: Platform, public nav: NavController) {}

  triggerAlert(alertType)
  {
    let theAlert = null;
    switch (alertType)
    {
      case 1:
        theAlert = Alert.create({
          title: 'The First Alert',
          subtitle : 'This is the start of alert training boy!',
          buttons: ['OK']
        });
            break;
      case 2:
          theAlert = Alert.create({
            title: 'Alerta engasada',
            message: 'Enter your nickname bro',
            inputs: [{name: 'nombre', placeholder: 'Pollo'}],
            buttons: [{text: 'Leave', handler: data => {
              console.log('This guy has no friends');
            }},{text:'Keep', handler: data => {
              console.log('He has a nickname');
            }}]
          });
            break;
      case 3:
          theAlert = Alert.create({
            title: 'Would you be my pokeGirl',
            message: 'Aceptas a nuestro señor dombuldor como tu salvador.',
          buttons: [
            {text: 'Nel', handler: ()=> {
              console.log('Le pelo');}
            },{text: 'Obvio', handler: () => {
              console.log('Ahuevo Puto');}}
          ]});
            break;
      case 4:
          theAlert = Alert.create();
          theAlert.setTitle('Choose a Life');
          let items = ['Blue','Red','Black','Gray','Yellow','Green'];
          for(let i = 0; i < items.length; i++)
          {
            theAlert.addInput({type:'radio',label:items[i], value:items[i].toLowerCase(), checked:false});
          }
          theAlert.addButton('Cancel');
          theAlert.addButton({text:'Okeis', handler: data =>
          {
            this.testRadioOPen = false;
            this.testRadioResult = data;
          }});
            break;
        case 5:
            theAlert = Alert.create();
            theAlert.setTitle('What type of food');
            let foods = ['MX - Taco','US - Fat', 'GT - Tamal', 'SV - Pupusa', 'IT - Pizza'];
            for(let i = 0 ; i < foods.length; i++)
            {
                theAlert.addInput({type: 'checkbox', label:foods[i], value: foods[i].toLowerCase()});
            }
            theAlert.addButton('Aint');
            theAlert.addButton({text:'Okis',handler:data => {
                console.log('Checkbox data:', data);
                this.testCheckboxOpen = false;
                this.testCheckboxResult = data;
            }});
            break;
      default:
            break;
    }
      this.nav.present(theAlert);
      //si es un radio button.
      /*this.nav.present(theAlert).then(() => {
          this.testRadioOPen= true;
      });*/
      //si es un checkbox
      this.nav.present(theAlert).then(()=>{
        this.testCheckboxOpen = true;
      });
  }
}
