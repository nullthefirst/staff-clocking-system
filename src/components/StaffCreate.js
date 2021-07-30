import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class StaffCreation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      department: '',
      companyEmail: '',
      announcement: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: this.state.name,
      department: this.state.department,
      companyEmail: this.state.companyEmail,
    };

    axios
      .post('https://staff-clocking-system.herokuapp.com/api/', data)
      .then((res) => {
        this.setState({
          name: '',
          department: '',
          companyEmail: '',
          announcement: res.data.message,
        });

        this.state.announcement !== ''
          ? alert(this.state.announcement)
          : console.log('no announcement');
      })
      .catch((err) => {
        console.error(err);
        console.log('Error registering staff member');
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
              <i className="bi bi-arrow-left-square-fill text-light"></i>
            </Link>
            <h2 className="text-primary">Staff Creation</h2>
            <form>
              <div className="my-2">
                <label>Name</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.name}
                  name="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="my-2">
                <label>Department</label>
                <input
                  className="form-control"
                  type="text"
                  value={this.state.department}
                  name="department"
                  onChange={this.handleChange}
                />
              </div>
              <div className="my-2">
                <label>Company E-mail</label>
                <input
                  className="form-control"
                  type="email"
                  value={this.state.companyEmail}
                  name="companyEmail"
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

export default StaffCreation;
