import {Component, OnInit} from '@angular/core';
import {formatDate} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-swiper',
    templateUrl: './swiper.page.html',
    styleUrls: ['./swiper.page.scss'],
})
export class SwiperPage implements OnInit {
    Breed = ['Test', 'test2', 'Test3'];
    startDate = new Date(2000, 0, 2);
    // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.
    slideOpts = {
        initialSlide: 0,
        slidesperView: 1
    };
    isFem = true;
    type = 'cat';
    ///
    datePicked: Date;
    todayDate: Date;
    todayDateStr: string;
    dayNamesUa: string[];
    monthShortNamesUa: string[];
    sub: any;
    addNew: boolean;
    isFirst: any = 'першого';

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.todayDate = new Date();
        this.todayDateStr = formatDate(this.todayDate, 'yyyy', 'en');
        this.todayDateStr += '-' + formatDate(this.todayDate, 'MM', 'en');
        this.todayDateStr += '-' + formatDate(this.todayDate, 'dd', 'en');
        console.log(this.todayDateStr);
        ///
        this.dayNamesUa = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця'];
        this.monthShortNamesUa = ['січ', 'лют', 'берез', 'квіт', 'трав', 'черв', 'лип', 'серп', 'верес', 'жовт', 'листоп', 'груд'];
        ///
        this.sub = this.route
            .queryParams
            .subscribe(params => {
                console.log(params.addnew);
                this.addNew = (params.addnew);
            });
        if (this.addNew) {
            this.isFirst = '';
        }
    }


    sexChoose(isFem) {
        this.isFem = isFem;
    }

    petTypeChoose(type: string) {
        this.type = type;
    }

    dateChanged($event: CustomEvent) {
        // @ts-ignore
        this.datePicked = new Date($event.target.value);
    }
}
