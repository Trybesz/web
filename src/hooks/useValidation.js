import { useState } from 'react';
import { isEmpty, isEqual, reduce } from 'lodash';

import usePrevious from 'hooks/usePrevious';

import validate from 'utils/validationChecks';

const useValidation = (basic) => {
    const [values, setValues] = useState(basic || {});
    const [errors, setErrors] = useState({});
    const prevErrors = usePrevious(errors);
    const [isValid, setIsValid] = useState(false);
    const [duplicateError, setDuplicateError] = useState('');

    const handleSubmit = () => {
        const valueErrors = validate(values);

        setDuplicateError('');
        setErrors(valueErrors);
        if (isEmpty(valueErrors) && !isEmpty(values)) setIsValid(true);
    };

    const handleChange = (e) => {
        const update = { ...values, [e.target.name]: e.target.value };
        const valueErrors = validate(update);
        const errorsDiff = !!reduce(prevErrors, (a, c, k) => (isEqual(c, valueErrors[k]) ? a : a.concat(k)), []).length;

        if (isEmpty(valueErrors) || errorsDiff) setErrors(valueErrors);
        setValues(update);
    };

    return {
        values,
        errors,
        handleChange,
        handleSubmit,
        setIsValid,
        isValid,
        duplicateError,
        setDuplicateError,
    };
};

export default useValidation;
