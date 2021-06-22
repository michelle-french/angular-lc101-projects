import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://th.bing.com/th/id/R2fde55e8ace9e579de85b3c894e82262?rik=bcSAqwMlOvEPDg&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f182625-animals-dog-puppies-wooden_surface.jpg&ehk=7gTTN2IGVFdWgOkZWcKKJSWINvf475GLotQJ%2b9XarPA%3d&risl=&pid=ImgRaw'
  image3 = 'https://th.bing.com/th/id/R4115c0e23b551d5b7f50d1c2a9529d4f?rik=RrtJaVQNC4zU7Q&riu=http%3a%2f%2fgeorgeschils.com%2fwdp%2fwp-content%2fuploads%2f2009%2f09%2fDSC4599_enh2_r1.jpg&ehk=m4m9CdS2JLZnybHUi%2bmefz0rTSpWM5COS1fbNOu2XNo%3d&risl=&pid=ImgRaw'

  constructor() { }

  ngOnInit() {
  }

}