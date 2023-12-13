export function inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: Array<any>){
        console.log(`--- O método é: ${propertyKey}`);
        console.log(`----- Os parâmetros são: ${JSON.stringify(args)}`)
        const retorno = metodoOriginal.apply(this, args);
        console.log(`----- O retorno é: ${JSON.stringify(retorno)}`)
        return retorno
    }

    return descriptor
}