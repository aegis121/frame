
const func_a = () => new Promise(resolve => {
    resolve({a: 'a', b: 'b'})
})

async function func_b() {
    return 1
}

async function other() {
    let {a, b} = await func_a()
    let c = await func_b()

    return c
}

export {
    other
}
