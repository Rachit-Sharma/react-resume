import { Component, ReactNode } from "react";

class ErrorBoundary extends Component<
  { children: ReactNode },
  { error?: Error }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { error: undefined };
  }

  componentDidCatch(error: Error): void {
    this.setState({ error });
  }

  render(): ReactNode {
    if (!this.state.error) {
      return this.props.children;
    } else {
      return (
        <main>
          <p>Something went wrong.</p>
          <p>{this.state.error.message}</p>
        </main>
      );
    }
  }
}

export default ErrorBoundary;
