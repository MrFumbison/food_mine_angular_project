import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private sevice:OrderDetailsService ){}

  getmenuid: any;
  menudata: any;
  ngOnInit(): void {

    this.getmenuid = this.param.snapshot.paramMap.get('id');
    console.log(this.getmenuid, 'getmenu')
    
    if(this.getmenuid){
     this.menudata = this.sevice.fooddetails.filter((value) => {
      return value.id == this.getmenuid;
     })
     console.log(this.menudata,'menudata>>')
    }
  }

}
