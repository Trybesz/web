import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { TrybesApp } from 'components/Trybes';
import LoadingSpinner from 'components/LoadingSpinner';

import { updateUser, updateUserPartial } from 'data/auth/actions';

export default (Component, mapDispatchToProps = {}) => {
    const WithSession = ({ user, ...props }) =>
        user ? (
            <TrybesApp.Consumer>
                {({ sharedFeedManagers, client, user: trybesUser, changedUserData }) => {
                    return (
                        <Component
                            {...props}
                            user={user}
                            id={user._id || trybesUser.id}
                            name={user.name}
                            email={user.email}
                            bio={user.bio}
                            avatar={user.profileImage}
                            username={user.username}
                            isAdmin={!!user.admin}
                            session={client}
                            sharedFeedManagers={sharedFeedManagers}
                            onUserUpdate={() => trybesUser.getOrCreate().then(changedUserData)}
                            refreshSharedFeeds={async () => {
                                await Promise.all([
                                    sharedFeedManagers[`timeline:${user._id}`] &&
                                        sharedFeedManagers[`timeline:${user._id}`].refresh(),
                                    sharedFeedManagers[`user:${user._id}`] &&
                                        sharedFeedManagers[`user:${user._id}`].refresh(),
                                ]);
                                document.body.scrollTop = 0; // For Safari
                                document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
                            }}
                        />
                    );
                }}
            </TrybesApp.Consumer>
        ) : (
            <LoadingSpinner />
        );

    const mapStateToProps = (state) => ({
        user: state.auth.user,
        isPreview: state.auth.isPreview,
    });

    return withRouter(connect(mapStateToProps, { updateUser, updateUserPartial, ...mapDispatchToProps })(WithSession));
};