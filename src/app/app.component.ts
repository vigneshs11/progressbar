import { Component, ViewChild,ElementRef,Directive, HostListener, Renderer2,AfterViewInit,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 


export class AppComponent implements AfterViewInit, OnInit {
  title = 'progressbar';
  step:number = 0;
  @ViewChild("progress",) progress:ElementRef;


 
 toggle:boolean = true;
   
  ngAfterViewInit()
{  

  
}

ngOnInit(){
  
  let parentelement = this.progress.nativeElement;
  console.log(parentelement.childNodes)
  var  firstChild = parentelement.children[1];
  var secondChild = parentelement.children[2];
  var thirdChild = parentelement.children[3];
    //console.log(this.progress.nativeElement);
    console.log(firstChild)
   console.log(secondChild)
   console.log(thirdChild)
   //console.log(firstChild)
}

constructor(public renderer: Renderer2){
    //console.log(this.parentelement)
  }



  classReturn(){

  this.toggle = !this.toggle

  if (this.step >= 6)
        return alert("completed");

  let  parentelement = this.progress.nativeElement;
    let grandchild = parentelement.firstChild.firstChild;
    // console.log(parentelement.childNodes[1])
    // console.log(parentelement.childNodes[2])
    // console.log(parentelement.childNodes[3])
    // console.log(parentelement.childNodes[4])
    // console.log(parentelement.children[1])
    // console.log(parentelement.children[2])
    // console.log(parentelement.children[3])
    // console.log(parentelement.children[4])
  //console.log(grandchild)
  this.renderer.removeClass(parentelement.childNodes[this.step++].firstChild,'grey')
  this.renderer.addClass(parentelement.childNodes[this.step].firstChild,'green')
  this.renderer.removeClass(parentelement.childNodes[this.step++].firstChild,'grey')
  console.log(this.step)
  this.renderer.addClass(parentelement.childNodes[this.step].firstChild,'green')
  console.log(this.step)
  this.renderer.removeClass(parentelement.childNodes[this.step++].firstChild,'grey')
  console.log(this.step)
  this.renderer.addClass(parentelement.childNodes[this.step].firstChild,'green')
  //  if(this.toggle)  
  //   return ' node grey' 

  //   else
  //    return 'node green'
    
    
    
    


  }
}
