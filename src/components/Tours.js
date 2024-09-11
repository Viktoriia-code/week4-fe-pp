import { useState } from "react";
import { tours } from "../data";
import Tour from "./Tour.js";

const Tours = () => {
  const [toursData, setToursData] = useState(tours);
  const handleDeleteItem = (itemId) => {
    // Filter out the item with the specified ID and update the state
    const updatedItems = toursData.filter((item) => item.id !== itemId);
    setToursData(updatedItems);
  };

  return (
    <section className="section" id="tour">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div className="section-center featured-center">
        {toursData.map((tour) => {
          return <Tour {...tour} key={tour.id} onDelete={handleDeleteItem} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
