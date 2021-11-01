import { useState } from 'react';

export default function useConst(value) {
    const [state] = useState(value);

    return state;
}
