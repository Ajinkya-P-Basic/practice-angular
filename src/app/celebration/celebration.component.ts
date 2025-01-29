import { Component, AfterViewInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import TypeIt from 'typeit';
import confetti from 'canvas-confetti';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-celebration',
  templateUrl: './celebration.component.html',
  styleUrl: './celebration.component.css',
  animations: [
    trigger('fadeAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition(':enter', [animate('600ms ease-in')]),
      transition(':leave', [animate('600ms ease-out')])
    ])
  ]
})
export class CelebrationComponent {
  title = 'bDayCelebration';
  name: string = 'Kajal';
  @ViewChild('button') button!: ElementRef;
  @ViewChild('container') divContainer!: ElementRef;
  confettiEmojis: string[][] = [['🎈'], ['🎉'], ['🎊'], ['🎂'], ['🎁']];
  hasWritten = false;

  // jsConfetti = new JSConfetti()

  constructor(private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    // this.writeMessage(this.name);
  }

  async onButtonClick(event: Event) {
    event.stopPropagation();
    if (!this.hasWritten) {
      this.writeMessage(this.name);
      this.hasWritten = true;
    }
    console.log(this.button)
    this.toggle();
    // this.button['nativeElement'].disabled = true;
    // this.button['nativeElement']?.fadeOut(500);
    this.popConfetti(this.confettiEmojis, async (item: any) => {
      await this.celebrate();
    });
    // this.button['nativeElement'].disabled = false;
    // this.button['nativeElement'].fadeIn(500);
  }
  isVisible = true;

  toggle() {
    this.isVisible = false;
    setTimeout(() =>{
      this.isVisible = true;
    }, 3000)
  }

  async popConfetti(items: any[], callback: (item: any) => Promise<void>): Promise<void> {
    for (const item of items) {
      await callback(item);
    }
  }

  private writeMessage(name: string): void {
    const writeHeading = new TypeIt('#heading', {
      speed: 100,
      waitUntilVisible: true,
      afterComplete: (instance: any) => {
        instance.destroy();
        writeParagraph.go();
      },
    });

    const writeParagraph = new TypeIt('#paragraph', {
      speed: 100,
      waitUntilVisible: true,
    });

    writeHeading
      .type('🎉 Congrats on becoming a year older ', { delay: 500 })
      .type(`${name} 🎉`, { delay: 500 })
      .break({ delay: 100 })
      .break({ delay: 500 })
      .go();

    writeParagraph
      .type(`Hi ${name}, wish you a many many happy returns of the day 🎂🥳🥳`, { delay: 500 }).break({ delay: 100 });

    writeParagraph
      .type(`Maja nahi aaya na`, { delay: 500 }).delete();

    writeParagraph
      .type(`Hi ${name} how's your day?`, { delay: 500 })
      .break({ delay: 500 })
      .type('I hope you are doing well today', { delay: 500 })
      .break({ delay: 500 })
      .type("By the way today's your special day", { delay: 1000 })
      .type(', right?', { delay: 500 })
      .break({ delay: 500 })
      .type('I want to say happy birthday to you', { delay: 500 })
      .break({ delay: 500 })
      .type('I hope you have a great day today', { delay: 500 })
      .break({ delay: 500 })
      .type('And the year ahead is full of many blessings', { delay: 500 })
      .break({ delay: 500 })
      .type('May this birthday be the start of a year that', { delay: 500 })
      .break({ delay: 500 })
      .type('Brings you the success you want', { delay: 500 })
      .break({ delay: 500 })
      .type('The wisdom you need', { delay: 500 })
      .break({ delay: 500 })
      .type('And the happiness you deserve', { delay: 500 })
      .break({ delay: 500 })
      .type('Happy birthday ', { delay: 500 })
      .type('🎉', { delay: 500 })
      .break({ delay: 500 })
      .type('Also I just want you to know that', { delay: 500 })
      .break({ delay: 500 })
      .type("I'll always be here accompany you", { delay: 500 })
      .break({ delay: 500 })
      .type("I'm so lucky to have you in my life", { delay: 500 })
      .break({ delay: 500 })
      .type("You're the best thing that ever happened to me", { delay: 500 })
      .break({ delay: 500 })
      .type('Last but not least', { delay: 500 })
      .type(', keep your head up', { delay: 500 })
      .break({ delay: 500 })
      .type(`Thank you so much for everything ${name}`, { delay: 500 })
      .break({ delay: 500 })
      .type('I Love You So Much ', { delay: 500 })
      .type('❤️', { delay: 500 });
  }


  celebrate() {
    const duration = 10000; // in milliseconds
  
    confetti({
      particleCount: 100,
      spread: 60,
      origin: { y: 0.6 },
    });

    // setTimeout(()=>{
    //   confetti({
    //     particleCount: 500,
    //     spread: 160,
    //     origin: { x: 1 },
    //   });
    // }, 3000);

    setTimeout(()=>{
      var scalar = 2;
      var pineapple = confetti.shapeFromText({ text: '🍍', scalar });
      this.startConfetti();
      // confetti({
      //   particleCount: 500,
      //   spread: 200,
      //   origin: { y: 0.8 },
      //   shapes: [pineapple],
      //   scalar
      // });
    }, 3000);
  
    // Clear confetti after a certain duration
    setTimeout(() => confetti.reset(), duration);
  }
  
  private duration = 15 * 1000;
  private animationEnd = Date.now() + this.duration;
  private defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
  private interval: any;

  private randomInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
  
  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  private startConfetti(): void {
    this.interval = setInterval(() => {
      const timeLeft = this.animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(this.interval);
        return;
      }

      const particleCount = 50 * (timeLeft / this.duration);
      confetti({
        ...this.defaults,
        particleCount,
        origin: { x: this.randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...this.defaults,
        particleCount,
        origin: { x: this.randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
  }
}
