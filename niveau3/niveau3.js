let nord = "NORD";
let sud = "SUD";
let est = "EAST";
let ouest = "WEST"; 

export function reduceDirections(directions) {
    for (let i = 0; i < directions.length;) {
        if ((directions[i] == nord && directions[i+1]==sud) || (directions[i] == sud && directions[i+1]==nord)){
            directions.splice(i,2)
            if (i>0) {
                i--
            }
        } else if ((directions[i] == est && directions[i+1] == ouest) || (directions[i] == ouest && directions[i+1] == est)){
            directions.splice(i,2)
            if (i>0) {
                i--
            }
        } else {
            i++
        }
    } return directions
} 
