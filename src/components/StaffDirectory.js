import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  componentWillUnmount() {
    this.setState({
      staffList: [],
      hasLoaded: false,
    });
  }

  render() {
    const staffInfo = this.state.staffList;

    const staffDisplay = (
      <ol className="list-group list-group-numbered">
        {staffInfo.map(({ name, staff_id, _id }) => {
          return (
            <li
              key={staff_id}
              className="list-group-item d-flex justify-content-between align-items-start ">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{name}</div>
                <button className="btn btn-info me-2">
                  <Link to={`/staff/${_id}`}>
                    <i className="bi bi-arrow-up-right-square-fill text-light"></i>
                  </Link>
                </button>
                <span>ID: {staff_id}</span>
              </div>
            </li>
          );
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
      <div className="container-fluid" id="staffDirectory">
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
