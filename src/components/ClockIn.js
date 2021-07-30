import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ClockIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staffId: '',
      announcement: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      staff_id: this.state.staffId,
    };

    axios
      .post(`https://staff-clocking-system.herokuapp.com/api/in/`, data)
      .then((res) => {
        this.setState({
          staffId: '',
          announcement: res.data.message,
        });

        this.state.announcement !== ''
          ? alert(this.state.announcement)
          : console.log('no announcement');
      })
      .catch((err) => {
        console.error(err);
        console.log('Error registering staff clock-in');
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container-fluid" id="staffDirectory">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col col-md-6">
            <Link to={`/`} className="big-btn mb-3">
              <i className="bi bi-arrow-left-circle-fill text-light"></i>
            </Link>
            <h2 className="text-primary">Clock In</h2>
            <form>
              <div className="my-2">
                <label>Staff ID</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.staffId}
                  name="staffId"
                  onChange={this.handleChange}
                />
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.handleSubmit}>
                Submit
              </button>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    );
  }
}

export default ClockIn;
