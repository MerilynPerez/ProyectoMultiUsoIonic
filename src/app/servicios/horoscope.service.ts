import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HoroscopoService {
  public horoscopoData: { [key: string]: string } = {
    aries: 'Hoy es un buen día para tomar decisiones importantes. Confía en tu intuición.',
    tauro: 'Esfuérzate por mantener la calma en situaciones complicadas. La paciencia será clave.',
    geminis: 'La comunicación será vital hoy. Asegúrate de expresar claramente tus pensamientos.',
    cancer: 'Cuida tu bienestar emocional. Dedica tiempo para ti mismo y para relajarte.',
    leo: 'Mantén una actitud positiva. Tu energía contagiará a los demás a tu alrededor.',
    virgo: 'Enfócate en la organización y la planificación. Te ayudará a alcanzar tus metas.',
    libra: 'Busca el equilibrio en tus relaciones personales. La armonía será clave hoy.',
    escorpio: 'Afronta los retos con determinación. Tu fuerza interior te llevará lejos.',
    sagitario: 'Explora nuevas oportunidades y experiencias. La aventura te espera.',
    capricornio: 'Establece metas realistas y trabaja en ellas paso a paso. El éxito llegará.',
    acuario: 'Colabora con otros en proyectos comunes. El trabajo en equipo será beneficioso.',
    piscis: 'Confía en tus instintos. Tu intuición te guiará por el camino correcto.',
  };

  getHoroscopo(signo: string): string {
    const signoLowerCase = signo.toLowerCase();
    return this.horoscopoData[signoLowerCase] || 'Signo no válido';
  }
}