import React, { PureComponent } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import Panel from '../../../../shared/components/Panel';
import ToDo from './ToDo';

class MyTodos extends PureComponent {
  static propTypes = {
    t: PropTypes.func.isRequired,
  };

  state = {
    checkedItems: [
      {
        id: '1',
        label: 'Add New Samsung s7 device',
        checked: true,
      },
      {
        id: '2',
        label: 'Prepare docs for boss',
        checked: false,
      },
      {
        id: '3',
        label: 'Calculate the company budget',
        checked: true,
      },
      {
        id: '4',
        label: 'Find a manager',
        checked: true,
      },
      {
        id: '5',
        label: 'Call to Sarah',
        checked: true,
      },
      {
        id: '6',
        label: 'Make a Week report',
        checked: true,
      },
      {
        id: '7',
        label: 'Drink a coffee',
        checked: true,
      },
      {
        id: '8',
        label: 'meeting with teammate',
        checked: true,
      },
      {
        id: '9',
        label: 'Progress review',
        checked: true,
      },
    ],
  };

  onChange = (e) => {
    const { checkedItems } = this.state;
    const item = e.target.name;
    const index = checkedItems.findIndex(check => check.id === item);
    checkedItems[index].checked = !checkedItems[index].checked;
    this.setState({ checkedItems: [...checkedItems] });
  };

  render() {
    const { t } = this.props;
    const { checkedItems } = this.state;
    return (
      <Panel
        md={12}
        lg={5}
        xl={4}
        xs={12}
        title={t('Task Manager')}
        subhead="Do not forget to do those"
      >
        {
          checkedItems.map(todo => (
            <ToDo
              key={todo.id}
              id={todo.id}
              label={todo.label}
              checked={todo.checked}
              onChange={this.onChange}
            />
          ))
        }
      </Panel>
    );
  }
}

export default withTranslation('common')(MyTodos);
