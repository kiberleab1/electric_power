import React from 'react';
import { connect } from 'react-redux';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

import getTooltipStyles from '../../../../shared/helpers';

const data = [{ name: 'Mon', a: 590, b: 1400, c: 590, d: 1400 },
  { name: 'Tue', a: 868, b: 1506, c: 290, d: 400 },
  { name: 'Wed', a: 1397, b: 989, c: 590, d: 1200 },
  { name: 'Thu', a: 1480, b: 1228, c: 390, d: 100 },
  { name: 'Fri', a: 1520, b: 1100, c: 590, d: 1300 },
  { name: 'Sat', a: 1520, b: 1100, c: 490, d: 100},
  { name: 'Sun', a: 1400, b: 1700, c: 790, d: 1000 }];

const ABTestingAnalytics = ({ t, dir, themeName }) => (
  <Panel md={12} lg={12} xl={12} title={t('GOLD and COMMODITIES MARKET REVIEW')}>
    <div dir="ltr">
      <ResponsiveContainer height={250} className="dashboard__area">
        <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 20 }}>
          <XAxis dataKey="name" tickLine={false} reversed={dir === 'rtl'} />
          <YAxis tickLine={false} orientation={dir === 'rtl' ? 'right' : 'left'} />
          <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
          <Legend />
          <CartesianGrid />
          <Area name="GOLD-18 " type="monotone" dataKey="a" fill="#4ce1b6" stroke="#4ce1b6" fillOpacity={0.2} />
          
          <Area name="GOLD-21" type="monotone" dataKey="d" fill="#70bbfd" stroke="#70bbfd" fillOpacity={0.2} />

          <Area name="SILVER" type="monotone" dataKey="b" fill="#038cfc" stroke="#038cfc" fillOpacity={0.2} />
          
          <Area name="PLATINIUM" type="monotone" dataKey="c" fill="#fc0f03" stroke="#fc0f03" fillOpacity={0.2} />
          
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </Panel>
);

ABTestingAnalytics.propTypes = {
  t: PropTypes.func.isRequired,
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(withTranslation('common')(ABTestingAnalytics));
