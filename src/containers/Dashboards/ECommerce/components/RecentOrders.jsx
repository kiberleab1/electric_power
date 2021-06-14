import React from "react";
import { Badge, Table } from "reactstrap";
import { withTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { Button, ButtonToolbar } from "reactstrap";
import Panel from "../../../../shared/components/Panel";

class RecentOrders extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (event) => {
   // this.props.seeUsersData
  };

  render() {
    return (
      <Panel lg={12} title={"users"}>
        <Table responsive className="table--bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>email</th>
              <th>see usage</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user, index) => (
              <tr>
                <td>{index}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button value={user.id} onClick={() => this.props.seeUsersData(1)}>
                    See Data
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Panel>
    );
  }
}

export default RecentOrders;
