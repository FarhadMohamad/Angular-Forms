import { Component } from "@angular/core";


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

 public title: string = 'Angular Forms';

 //put the alle properties in the foloowing object userData
 userData = {
   fname: "",
  // email: "",

 }

 public formSubmit(data: any) :void{

  console.log('DATA', data)
 }


 ngOnDestroy()
 {
   this.userData = null;
   console.log("The value of userData is " + this.userData);
 }

 

}
