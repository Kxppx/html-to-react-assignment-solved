import { Component } from "react";
import "./CharacterCards.css";

export class CharacterCards extends Component {
  render() {
    return (
      <section id="character-cards">
        {this.props.item.map((item) => {
          return (
            <div className="card" key={item.name}>
              <div className="card-titles">
                <h3>{item.name}</h3>
                <h4>{item.nickName ? item.nickName : ""}</h4>
              </div>
              <img src={item.imageUrl} alt={item.name} />
              <p>{item.background}</p>
            </div>
          );
        })}
      </section>
    );
  }
}
