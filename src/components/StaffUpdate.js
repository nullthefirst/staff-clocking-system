import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class StaffUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      announcement: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        `https://staff-clocking-system.herokuapp.com/api/${this.props.match.params.id}`,
      )
      .then((res) => {
        this.setState({
          name: res.data.output.name,
        });
      })
      .catch((err) => {
        console.error(err);
        console.log('Error acquiring staff details');
      });
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: this.state.name,
    };

    axios
      .put(
        `https://staff-clocking-system.herokuapp.com/api/${this.props.match.params.id}`,
        data,
      )
      .then((res) => {
        this.setState({
          name: '',
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
              <i className="bi bi-arrow-left-circle-fill text-light"></i>
            </Link>
            <h2 className="text-primary">Staff Update</h2>
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

export default StaffUpdate;
