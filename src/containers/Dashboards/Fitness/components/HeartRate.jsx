import React from 'react';
import { PieChart, Pie, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardBody, Col } from 'reactstrap';
import HeartOutlineIcon from 'mdi-react/HeartOutlineIcon';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

const data = [{ value: 68, fill: '#ff4861' },
  { value: 32, fill: '#eeeeee' }];


const style = (dir) => {
    const left = dir === 'ltr' ? { left: 0 } : { right: 0 };
    return ({
      ...left,
      width: 150,
      lineHeight: '24px',
      position: 'absolute',
      margin: '10px',
    });
  };


const HeartRate = ({ t }) => (
  <Col md={12} xl={3} lg={6} sm={12} xs={12}>
    <Card>
      <CardBody className="dashboard__health-chart-card">
        <div className="card__title">
          <h5 className="bold-text card__title-center">{t('Onion Current Selling')}</h5>
        </div>
        <div className="dashboard__health-chart">
          <ResponsiveContainer height={180}>
            <PieChart>
              <Pie data={data} dataKey="value" cy={85} innerRadius={80} outerRadius={90} />
            </PieChart>
          </ResponsiveContainer>
          <div className="dashboard__health-chart-info">
            <p className="dashboard__health-chart-number">96</p>
            <p className="dashboard__health-chart-units">birr/KG</p>
          </div>
        </div>
        
        <p className="dashboard__goal">Price Range: 58-120</p>
      </CardBody>
    </Card>
  </Col>
);

HeartRate.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(HeartRate);
