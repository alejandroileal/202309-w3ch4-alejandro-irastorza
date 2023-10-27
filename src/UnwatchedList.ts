import { Component } from './Component';

export class UnwatchedCardList extends Component {
  total: number;
  constructor(selector: string, total: number) {
    super(selector);
    this.total = total;
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `<section class="series-pending">
          <h3 class="subsection-title">Pending series</h3>
          <p class="info">You have ${this.total} series pending to watch</p>
          <!--<p class="info">Congrats! You've watched all your series</p>-->
          <ul class="series-list series-list--unwatched">
          </ul>
        </section>`;
  }
}
