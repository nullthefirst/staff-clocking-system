import React from 'react';
import axios from 'axios';
import StaffDetailItem from './StaffDetailItem';
import { Link } from 'react-router-dom';

class StaffDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: {},
      hasLoaded: false,
    };
  }

  componentDidMount() {
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
        <Link to={`/staff`} className="big-btn mb-3">
          <i className="bi bi-arrow-left-square-fill text-light"></i>
        </Link>
        <h1 className="text-primary">{staffMember.name}</h1>
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
        <div className="my-5"></div>
        <Link to={`/update/${staffMember._id}`} className="link-alt mt-5">
          <span>Update staff details</span>
          <i className="ms-2 bi bi-arrow-right-square-fill text-light"></i>
        </Link>
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
