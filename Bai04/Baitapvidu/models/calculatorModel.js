
const calculatorModel = {

    calculate: (num1, num2, operation) => {

        const a = Number(num1);
        const b = Number(num2);

        if (!Number.isFinite(a) ||
            !Number.isFinite(b)) {
            throw new Error('Du lieu khong hop le');
        }

        switch (operation) {

            case 'add':
                return a + b;

            case 'subtract':
                return a - b;

            case 'multiply':
                return a * b;

            case 'divide':
                if (b === 0) {
                    throw new Error('Khong the chia cho 0');
                }
                return a / b;

            default:
                throw new Error('Phep tinh khong hop le');
        }
    }
};

module.exports = calculatorModel;
