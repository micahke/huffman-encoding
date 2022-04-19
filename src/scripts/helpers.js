export function createDistribution(text) {
    let distribution = {}
    for (let i = 0; i < text.length; i++) {
        distribution[text[i]] = distribution[text[i]] + 1 || 1
    }
    // loop through distribution
    for (let key in distribution) {
        distribution[key] = distribution[key] / text.length
    }
    return distribution
}

export function formatBits(bits) {
    let result = ""
    for (let i = 0; i < bits.length; i++) {
        result += bits[i] + " "
    }
    return result
}