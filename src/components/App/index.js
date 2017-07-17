import React from 'react';

import Header from '../../components/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.onAppClose = this.onAppClose.bind(this);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.onAppClose);
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.onAppClose);
  }

  onAppClose() {
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}
