import { Component, OnInit } from '@angular/core';
import {Slider} from '../../models/slider';
import {SlidersService} from '../../services/sliders.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';
import {UntilDestroy} from "@ngneat/until-destroy";

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliders: Slider[];
  constructor(private slidersService: SlidersService, config: NgbCarouselConfig, public translate: TranslateService) {
    config.interval = 5000;
    config.pauseOnHover = false;
  }

  ngOnInit() {
    this.slidersService.getAll().subscribe(sliders => {
      this.sliders = sliders/*, console.log(this.sliders)*/;
    });
  }

}
