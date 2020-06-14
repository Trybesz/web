import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export const goBack = () => {
    history.goBack();
};

export const goToRoot = () => {
    history.go(0);
};
