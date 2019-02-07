export default function (points, nbDestination, maxTruckSize) {
    function distance(point) {
        return Math.sqrt(point[0] * point[0] + point[1] * point[1]);
    }

    if (nbDestination > maxTruckSize) {
        throw Error("Camion trop petit")
    }

    const pointsAndDistances = points.map((point) => ({
        distance: distance(point),
        point
    }));

    const pointsAndDistancesSorted = pointsAndDistances.sort((a, b) => {
        return a.distance > b.distance ? 1 : -1;
    });

    const pointsSorted = pointsAndDistancesSorted.map(a => a.point);

    return pointsSorted.slice(0, nbDestination);

}
