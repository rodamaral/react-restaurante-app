export const validatePrice = (value: string) => {
    const num = Number(value)

    if (isNaN(num)) {
        return 'Deve ser numérico'
    }
    if (num <= 0 || (num * 100) % 1 !== 0) {
        return 'Valor impróprio'
    }

    return true
}

export const validateImageURL = (value: string) => {
    try {
        new URL(value);
    } catch (_) {
        return 'URL inválida';
    }

    return true;
}
