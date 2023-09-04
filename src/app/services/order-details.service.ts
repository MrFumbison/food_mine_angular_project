import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  fooddetails = [
    {
      id:1,
      foodname:"paneer grilledsandwich",
      fooddetails:"pan-fried masala paneer",
      foodprice:200,
      foodimg:"/assets/images/sandwich2.jpg"
    },
    {
      id:2,
      foodname:"vagie suppremo",
      fooddetails:"onion| green capsicum|mushroom|black olives, sweet corn",
      foodprice:200,
      foodimg:"/assets/images/vagie2.jpg"
    },
    {
      id:3,
      foodname:"paneer burger",
      fooddetails:" panner",
      foodprice:200,
      foodimg:"/assets/images/burger.jpg"
    },
    {
      id:4,
      foodname:"vog masala roll in naan",
      fooddetails:"a homely mix of mashed potatoes and vagies, seasoned with indian spice",
      foodprice:200,
      foodimg:"/assets/images/vog.jpg"
    },
    {
      id:5,
      foodname:"indulge brownie",
      fooddetails:"eggless induge in richly decadent chocolate brownie crafted with",
      foodprice:200,
      foodimg:"/assets/images/brownie1.jpg"
    },
    {
      id:6,
      foodname:"oreo cheesecake ice cream",
      fooddetails:"oreo ice cream",
      foodprice:210,
      foodimg:"/assets/images/cream3.jpg"
    },
  ]
}
