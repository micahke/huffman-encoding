const { default: Tree } = require("./Tree");


const createDistribution = (text) => {
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

const getSampleChart = () => {
    return `flowchart TB
    1eb3d251-1d25-4028-b6e3-0ebfda34ea99[Ii] --> 0ddb00a5-b3e7-4494-bdc3-1755eea3475b[I]
    1eb3d251-1d25-4028-b6e3-0ebfda34ea99[Ii] --> 9b184b9a-4b62-44f7-a64c-5bbd9bea4ca0[i]
    29d178b8-2e2f-48b5-99ab-34e804cacb9c[hm] --> fa46277e-b958-43f7-8848-9ae871b8f97e[h]
    29d178b8-2e2f-48b5-99ab-34e804cacb9c[hm] --> 2e59b048-7af1-4ed1-b868-d07d025be1ec[m]
    9917464d-2138-413f-b00f-90e63e4a3c60[yt] --> 710417c4-f458-479f-9c8f-4fcf00b2dc95[y]
    9917464d-2138-413f-b00f-90e63e4a3c60[yt] --> da1ee13e-6b7b-4cea-8d9e-dc29b8eda137[t]
    25fcb03b-e0b6-4082-89dd-7428404c434b[ou] --> fb519f08-e2ad-474b-b666-39da46ac31ce[o]
    25fcb03b-e0b6-4082-89dd-7428404c434b[ou] --> 67398f05-1877-4fc0-a18f-5ba32f398e74[u]
    ec04acc7-42f1-490f-a6f2-3eace1476193[da] --> 90e3f826-1fbd-4136-ab9c-89305abec665[d]
    ec04acc7-42f1-490f-a6f2-3eace1476193[da] --> c408791f-c04d-4728-845a-f9bc39fbb925[a]
    2263b745-6f25-4dcd-87c8-62220df262f6[sIi] --> 10cdab00-2f26-4c06-815d-c4a5bb282c40[s]
    2263b745-6f25-4dcd-87c8-62220df262f6[sIi] --> 1eb3d251-1d25-4028-b6e3-0ebfda34ea99[Ii]
    4910596b-1547-4189-824d-857e1efc0a9f[hmyt] --> 29d178b8-2e2f-48b5-99ab-34e804cacb9c[hm]
    4910596b-1547-4189-824d-857e1efc0a9f[hmyt] --> 9917464d-2138-413f-b00f-90e63e4a3c60[yt]
    fec1a4af-25aa-4dba-b8b0-170debfe3ca1[ou ] --> 25fcb03b-e0b6-4082-89dd-7428404c434b[ou]
    fec1a4af-25aa-4dba-b8b0-170debfe3ca1[ou ] --> 9be12bfc-f8a0-45ae-987f-253924280d1d[ ]
    5e57e624-520c-4c46-a2d9-6f5051ad26ec[er] --> 803ceee9-d757-49e9-8acc-8084178ff387[e]
    5e57e624-520c-4c46-a2d9-6f5051ad26ec[er] --> 14fb2ade-e578-49bc-b7ce-090c057a735a[r]
    7dea0597-bdd1-4fb5-9b43-81b9adfa2cf5[dasIi] --> ec04acc7-42f1-490f-a6f2-3eace1476193[da]
    7dea0597-bdd1-4fb5-9b43-81b9adfa2cf5[dasIi] --> 2263b745-6f25-4dcd-87c8-62220df262f6[sIi]
    4cb3968a-c3fe-4975-9c6a-ff66cbe57216[hmytou ] --> 4910596b-1547-4189-824d-857e1efc0a9f[hmyt]
    4cb3968a-c3fe-4975-9c6a-ff66cbe57216[hmytou ] --> fec1a4af-25aa-4dba-b8b0-170debfe3ca1[ou ]
    b983d40b-b253-4607-b23f-3efb5dce3ab8[erdasIi] --> 5e57e624-520c-4c46-a2d9-6f5051ad26ec[er]
    b983d40b-b253-4607-b23f-3efb5dce3ab8[erdasIi] --> 7dea0597-bdd1-4fb5-9b43-81b9adfa2cf5[dasIi]
    469e3f4a-bd65-458d-8ebc-94c8204667e7[hmytou erdasIi] --> 4cb3968a-c3fe-4975-9c6a-ff66cbe57216[hmytou ]
    469e3f4a-bd65-458d-8ebc-94c8204667e7[hmytou erdasIi] --> b983d40b-b253-4607-b23f-3efb5dce3ab8[erdasIi]`
}

const handleTree = (distribution) => {
    let tree = new Tree(distribution).build
    return tree.generateMarkdown()
}

const formatBits = (bits) => {
    let result = ""
    for (let i = 0; i < bits.length; i++) {
        result += bits[i] + " "
    }
    return result
}

module.exports = { createDistribution, getSampleChart, handleTree, handleTree, formatBits }