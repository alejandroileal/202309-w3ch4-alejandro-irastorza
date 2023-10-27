import { Component } from './Component';
import { type seriesStructure } from './types';

export class Card extends Component {
  serie: seriesStructure;
  constructor(selector: string, series: seriesStructure) {
    super(selector);
    this.serie = series;
    this.template = this.createTemplate();
    this.render();
  }

  handleX(event: Event) {
    event.preventDefault();
    console.log('Clicked');
  }

  render() {
    super.render();
    this.element
      .querySelector('i')
      .addEventListener('click', this.handleX.bind(this));
  }

  createTemplate() {
    let score;

    if (!this.serie.watched) {
      score = `<ul class="score">
      <li class="score__star">
        <i class="icon--score fas fa-star empty" title="1/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star empty" title="2/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star empty" title="3/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star empty" title="4/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star empty" title="5/5"></i>
      </li>
      </ul>`;
    } else {
      score = `<ul class="score">
      <li class="score__star">
        <i class="icon--score fas fa-star" title="1/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star" title="2/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star" title="3/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star" title="4/5"></i>
      </li>
      <li class="score__star">
        <i class="icon--score fas fa-star" title="5/5"></i>
      </li>
      </ul>`;
    }

    return `
    <li class="serie">
    <img class="serie__poster"
      src="${this.serie.poster}"
      alt="The Sopranos poster" />
    <h4 class="serie__title">${this.serie.name}</h4>
    <p class="serie__info">${this.serie.creator}</p>
    ${score}
      <i class="fas fa-times-circle icon--delete"></i>`;
  }

  clear() {
    return '';
  }
}
