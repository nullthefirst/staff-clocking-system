import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      hasLoaded: false,
    };
  }

  componentDidMount() {
    axios
      .get('https://staff-clocking-system.herokuapp.com')
      .then((res) => {
        this.setState({
          title: res.data,
          hasLoaded: true,
        });
      })
      .catch((err) => {
        console.error(err);
        console.log('Error fetching title');
      });
  }

  render() {
    const titleText = this.state.hasLoaded ? (
      this.state.title
    ) : (
      <em>
        <i className="bi bi-info-square-fill mx-2"></i>Loading ...
      </em>
    );

    return (
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md-2"></div>
          <div className="col col-md-8">
            <h2>{titleText}</h2>
            <div className="my-5"></div>

            <Link to={`/staff`} className="link-alt mb-3">
              <span>Staff directory</span>
              <i className="ms-2 bi bi-arrow-right-square-fill text-light"></i>
            </Link>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default Homepage;
