
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  async ngOnInit(){
    if (typeof window !== 'undefined') {
      const ScrollReveal = (await import('scrollreveal')).default;
      const sr = ScrollReveal({
        distance: '20px',
        duration: 1000,
        reset: true
      });

      sr.reveal('.logo_inicio', { origin: 'bottom', interval: 200, delay: 400 });
      sr.reveal('.text_about', { origin: 'left', interval: 200, delay: 500 });
      sr.reveal('.services', { origin: 'bottom', interval: 200, delay: 200 });
      sr.reveal('.services_solo_text', { origin: 'right', interval: 200, delay: 400 });
      sr.reveal('.img-port', { origin: 'left', interval: 200, delay: 400 });
      sr.reveal('.img-port-invert', { origin: 'right', interval: 200, delay: 400 });
  }
}

}
