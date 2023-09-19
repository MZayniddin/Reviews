import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Box } from "@mui/material";

const Stars = ({ rate }) => {
  return (
    <div>
      {rate % 1 === 0 ? (
        Array.from({ length: rate })
          .fill("*")
          .map((star, index) => <StarIcon color="warning" key={index} />)
      ) : (
        <>
          {Array.from({ length: Math.floor(rate) })
            .fill("*")
            .map((star, index) => (
              <StarIcon color="warning" key={index} />
            ))}
          <StarHalfIcon color="warning" />
        </>
      )}
    </div>
  );
};

export default Stars;
