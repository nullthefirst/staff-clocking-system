import React from 'react';
import axios from 'axios';

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
    const titleText = this.state.hasLoaded
      ? this.state.title
      : 'Loading title ...';

    return (
      <div className="container-fluid">
        <div className="row" id="homepage">
          <div className="col-md-2"></div>
          <div className="col col-md-8">
            <h1 className="text-color">{titleText}</h1>
            <div className="my-5"></div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default Homepage;
