const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&';

function passwordGenerate(length = 10) {
    let result = '';
    for (let i = 0; i < length; i++) {
        result += alph.charAt(Math.floor(Math.random() * alph.length));
    }
    return result;
}

export default passwordGenerate;