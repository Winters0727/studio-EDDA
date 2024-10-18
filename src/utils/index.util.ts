export const addNumber = (number1: number, number2: number) =>
  number1 + number2;

export const throttle = (fn: Function, wait: number)  =>{
    let inThrottle: boolean;
    return function (this: any, ...args: any[]) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), wait);
        }
    };
}