import React from 'react';
import axios from 'axios';
import StaffListItem from './StaffListItem';

class StaffDirectory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffList: [],
      hasLoaded: false,
    };
  }

  componentDidMount() {
    axios
      .get('https://staff-clocking-system.herokuapp.com/api')
      .then((res) => {
        this.setState({
          staffList: res.data.output,
          hasLoaded: true,
        });
      })
      .catch((err) => {
        console.error(err);
        console.log('Error fetching staff list');
      });
  }

  render() {
    const staffInfo = this.state.staffList;

    const staffDisplay = (
      <ol className="list-group list-group-numbered">
        {staffInfo.map((staff) => {
          return <StaffListItem name={staff.name} identity={staff.staff_id} />;
        })}
      </ol>
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
      <div className="container-fluid">
        <div className="row">
          <div className="col col-md-8">
            <h2 className="text-info">Staff Directory</h2>
            {contentMarkup}
          </div>
        </div>
      </div>
    );
  }
}

export default StaffDirectory;
