import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className="text-yellow-500"
        />
      ))}
      {hasHalfStar && (
        <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500" />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStarEmpty}
          className="text-yellow-500"
        />
      ))}
    </div>
  );
};

export default Rating;
