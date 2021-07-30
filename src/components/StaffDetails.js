import React from 'react';
import axios from 'axios';
import StaffDetailItem from './StaffDetailItem';

class StaffDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      hasLoaded: false,
    };
  }

  componentDidMount() {
    // console.log('Print id: ' + this.props.match.params.id);
    axios
      .get(
        `https://staff-clocking-system.herokuapp.com/api/${this.props.match.params.id}`,
      )
      .then((res) => {
        this.setState({
          info: res.data.output,
          hasLoaded: true,
        });
      })
      .catch((err) => {
        console.error(err);
        console.log('Error fetching staff details');
      });

    const staffDirectoryBlock = document.getElementById('staffDirectory');

    if (staffDirectoryBlock) {
      staffDirectoryBlock.innerHTML = '';
    }
  }

  componentWillUnmount() {
    this.setState({
      info: [],
      hasLoaded: false,
    });
  }

  render() {
    const staffMember = this.state.info;

    const staffDisplay = (
      <div>
        <h2 className="text-info">{staffMember.name}</h2>
        <ol className="list-group">
          <StaffDetailItem label="Staff ID" text={staffMember.staff_id} />
          <StaffDetailItem label="Department" text={staffMember.department} />
          <StaffDetailItem
            label="Company Email"
            text={staffMember.companyEmail}
          />
          <StaffDetailItem
            label="Last Clock-In"
            text={
              staffMember.clockIn ? Date(staffMember.clockIn) : <em>None</em>
            }
          />
          <StaffDetailItem
            label="Last Clock-Out"
            text={
              staffMember.clockOut ? Date(staffMember.clockOut) : <em>None</em>
            }
          />
        </ol>
      </div>
    );

    const contentMarkup = this.state.hasLoaded ? (
      staffDisplay
    ) : (
      <div className="my-3">
        <em>
          <i className="bi bi-info-square-fill mx-2"></i>Loading ...
        </em>
      </div>
    );

    return (
      <div className="container-fluid" id="staffDetails">
        <div className="row">
          <div className="col col-md-8">{contentMarkup}</div>
        </div>
      </div>
    );
  }
}

export default StaffDetails;
