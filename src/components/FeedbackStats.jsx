import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  // Calculate ratings average
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  //    accumulator and current value 0 is default value for accumulator read more about the reduce method
  average = average.toFixed(1).replace(/[.,]0$/, "");
  //    avg value to have decimals upto 1 place but not for 8.0,9.0 etc
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
      {/* check if average is not a num if so use the ternary operator */}
    </div>
  );
}
export default FeedbackStats;
