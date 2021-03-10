import React from 'react';
import * as maintenanceAnimation from "./assets/lotties/12366-under-construction";

const maintenanceConfig = {
  loop: true,
  autoplay: true,
  animationData: maintenanceAnimation.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
}

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
          <div className="h-100 d-flex justify-content-center align-items-center">
              <div className="align-items-center row">
              </div>
              <h1>Website is under construction</h1>
          </div>
      );
    }

    return this.props.children;
  }
}
