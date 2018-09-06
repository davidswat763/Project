import { Component } from '@angular/core';

import { PromoPage } from '../promo/promo';
import { MapsPage } from '../maps/maps';
import { PricePage } from '../price/price';
import { FilterPage } from '../filter/filter';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PromoPage;
  tab2Root = MapsPage;
  tab3Root = PricePage;
  tab4Root = FilterPage;

  constructor() {

  }
}
