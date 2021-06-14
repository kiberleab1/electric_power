import React from "react";
import { Card, CardBody } from "reactstrap";

const IntroductionFeatures = () => (
  <Card className="card--not-full-height">
    <CardBody>
      <div className="card__title">
        <h5 className="bold-text">EEU Vision</h5>
      </div>
      <p>
        "Energizing Ethiopia's sustainable growth and enabling it to be power
        hub of Africa".
      </p>
      <div className="card__title">
        <h5 className="bold-text">EEU Mission</h5>
      </div>
      <p>
        "To be a world-class utility and contribute towards nation building by
        ensuring delivery of cost- effective, safe, reliable and high quality
        power and to enable interconnections across the African Continent for
        exporting surplus power. EEU shall strive towards achieving
        international standards of customer care through sustained capacity
        building, operational and financial excellence, state-of-the-art
        technologies while ensuring highest standards of corporate governance
        and Ethics"
      </p>
    </CardBody>
  </Card>
);

export default IntroductionFeatures;
