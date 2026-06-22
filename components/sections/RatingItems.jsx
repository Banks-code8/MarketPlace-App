const RatingItems = ({ rating = 0, reviews = 0 }) => {
  const stars = Math.round(rating);

  return (
    <div className="flex items-center gap-2 text-sm">
      <div className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={index}>{index < stars ? '⭐' : '☆'}</span>
        ))}
      </div>

      <span className="text-mainGray">
        {rating.toFixed(1)} ({reviews})
      </span>
    </div>
  );
};

export default RatingItems;
