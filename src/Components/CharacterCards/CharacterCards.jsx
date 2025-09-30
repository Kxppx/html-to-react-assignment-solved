import { Component } from "react";
import "./CharacterCards.css";
import { CharacterCard } from "./_component/CharacterCard/CharacterCard";

export class CharacterCards extends Component {
  render() {
    return (
      <section id="character-cards">
        {this.props.item.map((item) => {
          return <CharacterCard item={item} key={item.name} />;
        })}
      </section>
    );
  }
}
