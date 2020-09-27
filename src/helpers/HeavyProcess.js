export const heavyProcess = it => {
    for (let i = 0; i < it; i++) {
        console.log('HELLO');
    }

    return `${it} iteraciones realizadas`;
}