import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '40px', 
          textAlign: 'center', 
          backgroundColor: '#020617', 
          color: '#ffffff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h1 style={{ fontSize: '32px', marginBottom: '20px', color: '#3b82f6' }}>
            Oops! Something went wrong
          </h1>
          <p style={{ fontSize: '18px', marginBottom: '20px' }}>
            {this.state.error && this.state.error.toString()}
          </p>
          <details style={{ whiteSpace: 'pre-wrap', textAlign: 'left', maxWidth: '600px' }}>
            <summary style={{ cursor: 'pointer', marginBottom: '10px' }}>
              Click for error details
            </summary>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
          <button 
            onClick={() => window.location.reload()} 
            style={{
              marginTop: '30px',
              padding: '12px 24px',
              backgroundColor: '#3b82f6',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
