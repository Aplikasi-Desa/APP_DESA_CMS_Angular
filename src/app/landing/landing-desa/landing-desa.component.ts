import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-desa',
  templateUrl: './landing-desa.component.html',
  styleUrls: ['./landing-desa.component.scss']
})
export class LandingDesaComponent {
  currentSection = 'home';
  public isCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  /**
* Section changed method
* @param sectionId specify the current sectionID
*/
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }


  /**
    * Window scroll method
    */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      navbar?.classList.add('is-sticky');
    }
    else {
      navbar?.classList.remove('is-sticky');
    }

    // Top Btn Set
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      (document.getElementById("back-to-top") as HTMLElement).style.display = "block"
    } else {
      (document.getElementById("back-to-top") as HTMLElement).style.display = "none"
    }
  }


  // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
