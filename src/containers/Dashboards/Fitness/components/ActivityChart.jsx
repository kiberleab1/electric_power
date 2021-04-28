import React from 'react';
import { connect } from 'react-redux';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';

import getTooltipStyles from '../../../../shared/helpers';

const data = [
  {
    name: 'Mon', onion: 0.8, pv: 800, teff: 4.7,sun: 7.8, pv: 800, sesame: 2.7,
  },
  {
    name: 'Tue',  onion: 6.8, pv: 800, teff: 2.7,sun: 6.8, pv: 800, sesame: 4.7,
  },
  {
    name: 'Wed',  onion: 5.8, pv: 800, teff: 8.0,sun: 5.8, pv: 800, sesame: 7.7,
  },
  {
    name: 'Thu',  onion: 0.0, pv: 800, teff: 2.5,sun: 7.8, pv: 800, sesame: 2.7,
  },
  {
    name: 'Fri',  onion: 5.8, pv: 800, teff: 5.7,sun: 3.8, pv: 800, sesame: 0.7,
  },
  {
    name: 'Sat',  onion: 0.8, pv: 800, teff: 5.7,sun: 5.8, pv: 800, sesame: 0.7,
  },
  {
    name: 'Sun',  onion: 3.8, pv: 800, teff: 1.9,sun: 7.8, pv: 800, sesame: 4.7,
  },
];

const ActivityChart = ({ t, dir, themeName }) => (
  <Panel xs={12} lg={12} title={t('LAST five days price')}>
    <div dir="ltr">
      <ResponsiveContainer height={250} className="dashboard__area">
        <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 20 }}>
          <XAxis dataKey="name" tickLine={false} reversed={dir === 'rtl'} />
          <YAxis
            tickFormatter={value => `${value}00Br`}
            tickLine={false}
            orientation={dir === 'rtl' ? 'right' : 'left'}
          />
          <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
          
          <CartesianGrid />
          <Area name="Onion" type="monotone" dataKey="onion" fill="#ff4861" stroke="#ff4861" fillOpacity={0.2} />
          <Area name="Teff" type="monotone" dataKey="teff" fill="#f6da6e" stroke="#f6da6e" fillOpacity={0.2} />
          <Area name="SunFlower" type="monotone" dataKey="sun" fill="#70bbfd" stroke="#70bbfd" fillOpacity={0.2} />
          <Area name="Sesame" type="monotone" dataKey="sesame" fill="#4ce1b6" stroke="#4ce1b6" fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </Panel>
);

ActivityChart.propTypes = {
  t: PropTypes.func.isRequired,
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(withTranslation('common')(ActivityChart));
