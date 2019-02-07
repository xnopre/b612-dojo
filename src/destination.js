export default function (points, nbDestination, maxTruckSize) {
    if (nbDestination > maxTruckSize) {
        throw Error("Camion trop petit")
    }

    const sortedDistance = points.sort(([xa, ya], [xb, yb]) => (xa + ya) - (xb + yb));

    return sortedDistance.slice(0, nbDestination);

}
