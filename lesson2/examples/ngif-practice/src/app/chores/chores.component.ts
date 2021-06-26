import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = ['Complete LaunchCode prep work'];
   finishedChores = ['Empty dishwasher', 'Buy groceries'];

   targetImage = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';

   constructor() { }

   ngOnInit() {
   }

}


// If the chores array is empty OR the finishedChores array has at least 3 more items than the 
// chores array, display targetImage under the Done Chores list. Otherwise, use a p tag to display 
// the text, "No allowance yet."// 

// Return to chores.component.ts and change the number of items in 
// the arrays again. Check to make sure the web page correctly responds to your changes.

// Finally, if the chores array is empty AND finishedChores contains 4 or more items, display 
// an h1 underneath the lists with the text "Ice cream treat!" Otherwise, display h3 and p elements 
// that describe how to earn ice cream.