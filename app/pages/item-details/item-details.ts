import {Page, NavController, NavParams} from 'ionic-angular';
import {ActionSheetPage} from '../action-sheet/action-sheet';
import {AlertPage} from '../alert/alert';
import {BPagePage} from '../b-page/b-page';
import {CardsPage} from '../cards/cards';
@Page({
  templateUrl: 'build/pages/item-details/item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(private nav: NavController, navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

  openActionShit(event) {
    this.nav.push(ActionSheetPage);
  }
  openAlert()
  {
    this.nav.push(AlertPage);
  }
  openButton()
  {
    this.nav.push(BPagePage);
  }
  openCards()
  {
    this.nav.push(CardsPage);
  }
}
