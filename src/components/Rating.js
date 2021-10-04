const Rating = (props) => {
  const ratingItems = [];
  let current = props.value;

  for (let i = 1; i <= 5; i++) {
    current = current - 1;
    if (current <= -1) {
      ratingItems.push(
        <i key={i} data-testid={`rating-item-${i}`} className={`${props.type}-empty`} />
      );
    } else if (current < 0) {
      ratingItems.push(
        <i key={i} data-testid={`rating-item-${i}`} className={`${props.type}-half`} />
      );
    } else {
      ratingItems.push(
        <i key={i} data-testid={`rating-item-${i}`} className={`${props.type}-full`} />
      );
    }
  }
  return (
    <div data-testid='rating' className={`rating ${props.type}`}>
      {ratingItems}
    </div>
  );
};

export default Rating;
