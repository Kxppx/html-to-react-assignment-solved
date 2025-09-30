import { CharacterRating } from "./_component/CharacterRating/CharacterRating";
import "./CharacterRatings.css";

export const CharacterRatings = (props) => {
  const topFive = [...props.item].sort((a, b) => b.votes - a.votes).slice(0, 5);
  return (
    <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          {topFive.map((item, i) => (
            <CharacterRating item={item} i={i} />
          ))}
          ;
        </tbody>
      </table>
    </section>
  );
};
