import { useState } from 'react';

import { inputValueFromEvent } from 'components/StatusUpdateForm/utils';

export default function useEventValue(...args) {
    const [value, setValue] = useState(...args);

    return [value, (e) => setValue(inputValueFromEvent(e))];
}
