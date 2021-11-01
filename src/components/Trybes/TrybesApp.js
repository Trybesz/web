import React from 'react';
import { StreamContext as TrybesContext } from 'react-activity-feed';


/**
 * Manages the connection with Stream. Any components that should talk to
 * Stream should be a child of this component.
 */
export class TrybesApp extends React.Component {
    static Consumer = function TrybesAppConsumer(props) {
        return (
            <TrybesContext.Consumer>
                {(appCtx) => {
                    if (!props.children || !props.children.length) {
                        return null;
                    }
                    if (!appCtx.client || !appCtx.user) {
                        throw new Error('This component should be a child of a StreamApp component');
                    }
                    const Child = props.children;
                    return Child(appCtx);
                }}
            </TrybesContext.Consumer>
        );
    };

    constructor(props) {
        super(props);

        this.state = TrybesApp.initClientState(props, {
            changedUserData: () => this.setState({ userData: this.state.user.data }),
        });
    }

    static getDerivedStateFromProps(props, state) {
        if (state.client.userToken === props.token) return null;
        return TrybesApp.initClientState(props, state);
    }

    static getPreviewUserState = () => {
        return {
            client: { userToken: '', feed: (g, i) => ({ id: `${g}:${i}` }) },
            user: { id: 'preview' },
            userData: { id: 'preview' },
            sharedFeedManagers: {},
        };
    };

    static createCurrentUser = (client, profile, getProfile) => {
        const currentUser = client.user(profile.id);
        currentUser.full = profile;
        currentUser.data = profile.data;
        currentUser.getOrCreate = async () => {
            currentUser.full = await getProfile();
            currentUser.data = currentUser.full.data;
            return currentUser.full;
        };

        return currentUser;
    };

    static initClientState = function(props, state) {
        if (!props.token) return this.getPreviewUserState();

        // const client = stream.connect(props.apiKey, props.token, props.appId, props.options || {});
        // client.currentUser = this.createCurrentUser(client, props.profile, props.getProfile);

        const newState = {
            ...state,
            sharedFeedManagers: {},
            apiKey: props.apiKey,
            token: props.token,
            appId: props.appId,
        };

        return newState;
    };

    render() {
        return <TrybesContext.Provider value={{ ...this.state }}>{this.props.children}</TrybesContext.Provider>;
    }
}

TrybesApp.defaultProps = {
    sharedFeeds: [],
};
