import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';
import TopbarMail from './TopbarMail';
import TopbarNotification from './TopbarNotification';
import TopbarSearch from './TopbarSearch';
import TopbarLanguage from './TopbarLanguage';
import { UserProps } from '../../../shared/prop-types/ReducerProps';
import mainLogo from '../../../shared/img/logo/headernew2013.jpg'
class Topbar extends PureComponent {
  static propTypes = {
    changeMobileSidebarVisibility: PropTypes.func.isRequired,
    changeSidebarVisibility: PropTypes.func.isRequired,
    user: UserProps.isRequired,
  };

  render() {
    const { changeMobileSidebarVisibility, changeSidebarVisibility, user } = this.props;

    return (
      <div className="topbar" style={{backgroundColor:"#fea348"}}>
        <div className="topbar__wrapper">
          <div className="topbar__left">
            <TopbarSidebarButton
              changeMobileSidebarVisibility={changeMobileSidebarVisibility}
              changeSidebarVisibility={changeSidebarVisibility}
            />
            <Link className="topbar__logo" to="/dashboard_default" />
          </div>
          <div>
            <img src={mainLogo} style={{marginLeft:"250px", height:"90%", width:"50%", marginTop:"2px"}}/>
          </div>
          <div className="topbar__right">
            <TopbarSearch />
            <TopbarNotification />
            <TopbarMail new />
            <TopbarProfile user={user} />
            <TopbarLanguage />
          </div>
        </div>
      </div>
    );
  }
}

export default Topbar;
