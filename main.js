import { LitElement, html, css } from 'lit-element';

class WishList extends LitElement {
  static styles = css`
    /* Estilos generales */
    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin: 10px 0;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .completed {
      text-decoration: line-through;
    }

    .red {
      color: red;
    }

    .yellow {
      color: yellow;
    }

    .green {
      color: green;
    }
  `;

  render() {
    return html`
      <form id="addForm" @submit="${this.runEvent}">
        <input id="item" type="text" placeholder="Add an item">
        <button type="submit">Add</button>
      </form>

      <input id="filter" type="text" placeholder="Filter items" @keyup="${this.filterItem}">

      <ul id="items">
        ${this.items.map(item => this.renderItem(item))}
      </ul>
    `;
  }

  // Filter Items
  filterItem(e) {
    let text = e.target.value.toLowerCase();

    let items = this.shadowRoot.querySelectorAll('.element');
    items.forEach(item => {
      let itemText = item.textContent.toLowerCase();
      if (itemText.indexOf(text) !== -1) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Add item function
  runEvent(e) {
    e.preventDefault();

    let inputValue = this.shadowRoot.querySelector('#item').value;
    if (inputValue.trim() !== '') {
      this.items = [...this.items, { description: inputValue, timestamp: new Date(), completed: false }];
    }
  }

  // Resto del código del componente
}

customElements.define('wish-list', WishList);
