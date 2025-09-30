export const CharacterRating = ({ item, i }) => (
  <tr className={(i + 1) % 2 === 0 ? "light" : "dark"} key={item.name}>
    <td>
      {item.name} {item.nickName ? `"${item.nickName}"` : ""}
    </td>
    <td>{item.skillset.join(", ")}</td>
    <td>{item.votes}</td>
  </tr>
);
