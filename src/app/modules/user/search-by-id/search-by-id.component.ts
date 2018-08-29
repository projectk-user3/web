import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RestService } from '../../../services/rest.service';
import { AppConstants } from '../../../constants/config.constants';

@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.scss']
})
export class SearchByIdComponent implements OnInit {

  profileId: '';
  profile: any;
  noDataPresent = false;
  imageClicked = false;
  // @ViewChild('myImg') myImg: ElementRef;
  // @ViewChild('myModal') myModal: ElementRef;
  // @ViewChild('modalImg') modalImg: ElementRef;
  // @ViewChild('modalCaption') modalCaption: ElementRef;

  constructor(private _restService: RestService) { }

  ngOnInit() {
  }

  searchById() {
    this._restService.httpGetServiceCall(AppConstants.searchByIdEndPoint).subscribe((res: any) => {
      this.profile = res;
    }, error => {
      this.noDataPresent = true;
    });
  }

  // imgClick() {
  //   this.myModal.nativeElement.style.display = 'block';
  //   this.modalImg.nativeElement.src = '/assets/images/searchById-profileResponse.PNG';
  //   this.modalCaption.nativeElement.innerHTML = this.profile.firstname;
  // }
}
