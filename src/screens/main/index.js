import React, { Component } from 'react';
import styled from 'styled-components/macro';

import ScrollTop from 'containers/ScrollTop';

import { updateUser } from 'data/auth/actions';

import { Route, Switch } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import { connect } from 'react-redux';

import fetch from 'utils/fetch';
import AuthedRoute from 'containers/AuthedRoute';

// import NotFound from 'screens/NotFound';
// import About from 'screens/About';
// import Privacy from 'screens/Privacy';
// import Terms from 'screens/Terms';
import AuthModal from 'screens/auth/AuthModal';
// import ActivityReportModal from 'components/ActivityReportModal';
// import DeleteCommentModal from 'components/DeleteCommentModal';
// import MobileNav from 'components/MobileNav';
import LoadingSpinner from 'components/LoadingSpinner';
// import Header from 'components/Header';
// import TimelineSubscription from 'components/TimelineSubscription';
// import Timeline from './Timeline';
// import Profile from './Profile';
// import EditProfile from './EditProfile';
// import Settings from './Settings';
// import Account from './Settings/Account';
// import Display from './Settings/Display';
// import PostDetail from './PostDetail';
// import Hashtag from './Hashtag';
// import Explore from './Explore/Explore';
// import ExploreAdmin from './Explore/Admin';
// import Invite from './Invite';
// import Notification from './Notification';
// import Scheduler from './Scheduler';
// import Search from './Search';
import Welcome from '../Welcome';

const Root = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 0;
`;

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = { loading: true, token: props.token };
    }

    // making sure App will not trigger async requests while new client is initiating
    static getDerivedStateFromProps(props, state) {
        if (state.token !== props.token) return { loading: true, token: props.streamToken };
        return null;
    }

    componentDidMount() {
        //this.setupUserProfile();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.token !== this.props.token) {}//this.setupUserProfile();
    }

    getProfile = async () => {
        const { data } = await fetch('GET', '/profile');
        return data;
    };

    setupUserProfile = async () => {
        try {
            const profile = await this.getProfile();
            if (profile && profile.id) {
                this.setState({ profile });
                this.props.updateUser(profile);
            } else this.props.history.push('/auth/logout');
        } catch (err) {
            // eslint-disable-next-line no-console
            console.error(err);
            if (err.response && (err.response.status === 404 || err.response.status === 401)) {
                this.props.history.push('/auth/logout');
            }
        }

        this.setState({ loading: false });
    };

    render() {
        const { /*token,*/ history } = this.props;
        if (!this.state.loading) return <LoadingSpinner />;

        return (
                <Root>
                    <AuthModal history={history} />

                    <ScrollTop>
                        <Switch>
                            <Route exact path='/' component={Welcome} />
                            {/* <AuthedRoute exact path='/search' component={Search} />
                            <AuthedRoute exact path='/invite' component={Invite} />
                            <AuthedRoute exact path='/edit-profile' component={EditProfile} />
                            <AuthedRoute exact path='/settings' component={Settings} />
                            <AuthedRoute exact path='/settings/account' component={Account} />
                            <AuthedRoute exact path='/settings/display' component={Display} />
                            <AuthedRoute exact path='/explore/admin' component={ExploreAdmin} />
                            <AuthedRoute exact path='/notification' component={Notification} />
                            <AuthedRoute exact path='/scheduler' component={Scheduler} />
                            <Route exact path='/about' component={About} />
                            <Route exact path='/policy/privacy' component={Privacy} />
                            <Route exact path='/policy/terms' component={Terms} />

                            <Route exact path='/explore' component={Explore} />
                            <Route exact path='/404' component={NotFound} />
                            <Route exact path='/hashtag/:hashtag' component={Hashtag} />
                            <Route exact path='/:username/:activityId' component={PostDetail} />
                            <Route exact path='/:username' component={Profile} />
                            <Route component={NotFound} /> */}
                        </Switch>
                    </ScrollTop>

                    {/*<MediaQuery query='(max-width: 767px)'>{<MobileNav />}</MediaQuery>*/}
                </Root>
        );
    }
}

const mapStateToProps = ({ auth }) => ({
    streamToken: auth.streamToken,
    isPreview: auth.isPreview,
});

export default connect(mapStateToProps, { updateUser })(Main);
