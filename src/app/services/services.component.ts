import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('ul li[data-tab], a[data-tab]').on('click', function (e) {
      // Hide Old Tab
      $('li[data-tab].active').removeClass('active')
      $('a[data-tab].active').removeClass('active');
      $('div.products-tabbed-carousel-container__content-panel.active').removeClass('active');

      // Show Active Tab
      var tab = $(e.target).attr('data-tab');
      var header = "li[data-tab="+tab+"]";
      var link = "a[data-tab="+tab+"]";
      $(header).addClass('active');
      $(link).addClass('active');
      $(link).next().addClass('active');
    });
  }

}
