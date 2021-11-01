import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollTop extends Component {
    // eslint-disable-next-line class-methods-use-this
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location !== this.props.location) {
            window.scrollTo(0, 0);
        } else if (prevProps.children !== this.props.children) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        const { children } = this.props;
        return children;
    }
}

export default withRouter(ScrollTop);