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
          {topFive.map((item, i) => {
            return (
              <tr
                className={(i + 1) % 2 === 0 ? "light" : "dark"}
                key={item.name}
              >
                <td>
                  {item.name} {item.nickName ? `"${item.nickName}"` : ""}
                </td>
                <td>{item.skillset.join(", ")}</td>
                <td>{item.votes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
