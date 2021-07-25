import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    // state:any;
    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        console.error(error)
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, errorInfo);
        console.error(error,errorInfo)
      }
    
      render() {
        if ((this.state as any).hasError) {
          // You can render any custom fallback UI
          
          return <React.Fragment>...</React.Fragment>;
        }
    
        return <React.Fragment>{this.props.children}</React.Fragment>; 
      }
}
