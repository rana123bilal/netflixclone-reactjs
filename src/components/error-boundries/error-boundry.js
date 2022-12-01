import React, { Component } from "react";
import PropTypes from "prop-types";
import "./error-boundry.css";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <h3>Something went wrong</h3>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;

ErrorBoundry.propTypes = {
  children: PropTypes.any,
};
ErrorBoundry.defaultProps = {
  children: PropTypes.any,
};
