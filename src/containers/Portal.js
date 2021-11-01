import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import useConst from 'hooks/useConst';

const Portal = ({ children, parent }) => {
    const el = useConst(document.createElement('div'));

    useEffect(() => {
        parent.appendChild(el);
        return () => parent.removeChild(el);
    }, [parent, el]);

    return createPortal(children, el);
};

Portal.propTypes = {
    children: PropTypes.node,
    parent: PropTypes.instanceOf(Element),
};

Portal.defaultProps = {
    parent: document.body,
};

export default Portal;
