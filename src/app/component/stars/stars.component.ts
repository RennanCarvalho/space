import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

enum ObjectType {
  brownStar = "#671911",
  redStar = "#ffe595",
  whiteStar = "#ffffff",
  neutronStar = "#69cffb",
  rockyPlanet = "#446286",
  gasPlanet = "#c2a279"
}

const objectValues = Object.values(ObjectType) as ObjectType[];
const objects : number = 250;
const comets : number = 10;

@Component({
  selector: 'app-stars',
  imports: [],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class StarsComponent implements AfterViewInit{
  @ViewChild('space') space!: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    this.BigBang();
  }

  BigBang() {
    this.Generate(objects, 4, 4, 'star');
    this.Generate(comets, 4, 8, 'comet', true);
  }
  
  Generate(iterator:number, animationCalc: number, heightCalc: number, className: string, destroyAfterAnimation: boolean = false) {
    for(let i = 0 ;i < iterator; i++){
      const object = document.createElement('span');

      const animation = (Math.random() * animationCalc + 4).toFixed(2)
      const height = (Math.random() * heightCalc).toFixed(4);
      const top = (Math.random() * 100).toFixed(1);
      const left = (Math.random() * 100).toFixed(1);

      object.style.height = `${height}px`;
      object.style.top = `${top}%`;
      object.style.left = `${left}%`;
      object.style.animationDuration = `${animation}s`;
      object.style.backgroundColor = this.getRandomObjectType();

      object.classList.add(className)
      
      if(destroyAfterAnimation){
        object.addEventListener('animationend', () => {
          object.remove();
        });
      }

      this.space.nativeElement.appendChild(object);
    }
  }

  getRandomObjectType(): ObjectType {
    return objectValues[Math.floor(Math.random() * objectValues.length)];
  }
}
