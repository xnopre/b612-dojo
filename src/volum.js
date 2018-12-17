export default class Volum {

    getVolum(cols) {
        if (isEmpty(cols)) {
            return 0
        }
        let acc = 0
        for(var i=0; ;) {
            const indexOfNextMax = getNextMaxIndex(cols, i+1, cols[i])
            if (indexOfNextMax == -1) {
                break;
            }
            acc += accumulate(cols, i, indexOfNextMax)
            i = indexOfNextMax
        }
        return acc
    }
}

function getNextMaxIndex(cols, startIndex, refMax) {
    let nextMaxValue = 0, nextMaxIndex = -1
    let min = cols[startIndex]
    for(var i = startIndex; i < cols.length; i++) {
        if (cols[i] >= refMax) {
            return i
        }
        if (cols[i] > nextMaxValue && cols[i] > min) {
            nextMaxValue = cols[i]
            nextMaxIndex = i
        }
    }
    return nextMaxIndex
}

function isEmpty(cols) {
    return cols.length === 0
}

function getMax(cols) {
    return Math.max(...cols)
}

function accumulate(cols, begin, end) {
    const max = Math.min(cols[begin], cols[end])
    let acc = 0
    for(var i = begin+1; i < end; i++) {
        if (cols[i] != max) {
            acc += max-cols[i]
        }
    }
    return acc
}

