import { Component, OnInit } from '@angular/core';
import $ from 'jquery';





@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  fecharMenu(){
    const menuMobile = document.getElementById('menuMobile') as HTMLElement;
    const overlay = document.getElementById('overlay') as HTMLElement;
    overlay.style.display = "none";
    menuMobile.classList.remove('animacaoAbrir');
    menuMobile.classList.add('animacaoFechar');
    setTimeout(() => {
      menuMobile.style.display = "none";
    }, 190);
  }


  abrirMenu(){
    const menuMobile = document.getElementById('menuMobile') as HTMLElement;
    const overlay = document.getElementById('overlay') as HTMLElement;
    overlay.style.display = "block";
    menuMobile.style.display = "flex";
    menuMobile.classList.remove('animacaoFechar');
    menuMobile.classList.add('animacaoAbrir');
    };


  ngOnInit(){

      const sections = $('section');
    const navItens = $('.pc');
    const navItensMobile = $('.mobile');

    $(document).on('scroll', () => {
      const header = $('.cabecalho');
      const scrollPosition = ($(window).scrollTop() ?? 0) - (header.outerHeight() ?? 0);

      let activeSectionIndex = 0;

      sections.each(function(i) {
        const section = $(this);
        const sectionTop = section.offset()!.top - 250;
        const sectionBottom = sectionTop + (section.outerHeight() ?? 0);

        if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
          activeSectionIndex = i;
          return;
        }
      })
      navItensMobile.removeClass('active');
      $(navItensMobile[activeSectionIndex]).addClass('active');

      navItens.removeClass('active');
      $(navItens[activeSectionIndex]).addClass('active');
  });


    }

    }














