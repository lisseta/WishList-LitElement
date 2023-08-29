import { LitElement, html, css } from 'lit-element';

class WishList extends LitElement {
  static properties = {
    items: { type: Array },
  };

  constructor() {
    super();
    this.items = [
      { description: 'Comprar libros', timestamp: new Date(), completed: false },
      { description: 'Hacer ejercicio', timestamp: new Date(), completed: true },
      // Agrega más elementos de la lista de deseos aquí
    ];
  }

  renderItem(item) {
    const now = new Date();
    const timeDiff = (now - item.timestamp) / (1000 * 60); // Diferencia en minutos

    let color = 'black'; // Color por defecto

    if (item.completed) {
      color = 'black';
      return html`
        <li style="color: ${color}; text-decoration: line-through;">${item.description}</li>
      `;
    } else if (timeDiff > 8) {
      color = 'red';
    } else if (timeDiff > 5) {
      color = 'yellow';
    } else if (timeDiff < 2) {
      color = 'green';
    }

    return html`
      <li style="color: ${color};">${item.description}</li>
    `;
  }

  static styles = css`
    ul {
      list-style: none;
      padding: 0;
    }
  `;

  render() {
    return html`
      <ul>
        ${this.items.map(item => this.renderItem(item))}
      </ul>
    `;
  }
}

customElements.define('wish-list', WishList);
