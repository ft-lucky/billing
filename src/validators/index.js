export const combineValidators = (...validators) => (...value) => {
    for (let i = 0; i < validators.length; ++i) {
        const error_message = validators[i](...value)
        if (error_message !== undefined) return error_message
    }
}

export const requiredValidator = (value) => {
    let errorMessage;
    if (!value) {
        errorMessage = "Required"
    }
    return errorMessage
}