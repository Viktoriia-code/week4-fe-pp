import { services } from "../data";
import Title from "./Title";
import Service from "./Service";
import { useState } from "react";

const Services = () => {
  const [servicesData, setServicesData] = useState(services);

  const handleDeleteItem = (itemId) => {
    // Filter out the item with the specified ID and update the state
    const updatedItems = servicesData.filter((item) => item.id !== itemId);
    setServicesData(updatedItems);
  };

  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {servicesData.map((service) => {
          return (
            <Service
              {...service}
              key={service.id}
              onDelete={handleDeleteItem}
            />
          );
        })}
      </div>
    </section>
  );
};
export default Services;
