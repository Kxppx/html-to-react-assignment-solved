export const CharacterCard = ({ item }) => {
  const { name, nickName, imageUrl, background } = item;
  return (
    <div className="card" key={name}>
      <div className="card-titles">
        <h3>{name}</h3>
        {nickName && !!nickName.length && <h4>{nickName}</h4>}
      </div>
      <img src={imageUrl} alt={name} />
      <p>{background}</p>
    </div>
  );
};
