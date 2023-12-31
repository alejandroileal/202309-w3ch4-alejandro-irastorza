import { Component } from './Component';

export class WatchedCardList extends Component {
  total: number;
  constructor(selector: string, total: number) {
    super(selector);
    this.total = total;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<section class="series-watched">
          <h3 class="subsection-title">Watched series</h3>
          <p class="info">You have watched ${this.total} series</p>
          <!--<p class="info">You already have not watched any serie</p>-->
          <ul class="series-list series-list--watched">
          </ul></section>`;
  }
}
