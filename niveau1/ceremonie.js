export { getLastDelegation }

const getLastDelegation = (delegations) => {
    if (!delegations || delegations.length == 0) { return ""}
    let times = []
    for (let i = 0; i < delegations.length; i++) {
        times.push(delegations[i].split(" ")[1] / delegations[i].split(" ")[2])
    }

    let copyTimes = []
    for (let i = 0; i < times.length; i++) {
        copyTimes.push(times[i])
    }

    let descTimes = copyTimes.sort((a,b) => b - a)
    return delegations[(times.indexOf(descTimes[0]))].split(" ")[0]
}