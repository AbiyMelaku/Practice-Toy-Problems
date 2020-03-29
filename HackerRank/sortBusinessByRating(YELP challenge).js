function sortBusinessesByRating(businesses) {
    /*
    Array of businesses info where each element is a object containing id
    and rating. Sort the businesses by their rating in decreasing order.
    Preserve the original ordering if two businesses have same rating.

    Args:
        businesses: Array of businesses info where business info is
        a object containing id and rating.

    Return:
        Array of businesses' info

    Example:

    Input:
    [
        {'id': 101, rating: 5.0},
        {'id': 102, rating: 2.0},
        {'id': 103, rating: 3.0},
        {'id': 104, rating: 5.0},
        {'id': 105, rating: 5.0},
    ]

    Output:
    [
        {'id': 101, rating: 5.0},
        {'id': 104, rating: 5.0},
        {'id': 105, rating: 5.0},
        {'id': 103, rating: 3.0},
        {'id': 102, rating: 2.0},
    ]
    */

    // TODO: COMPLETE ME
    var swapped;
    do{
        swapped = false;
        for( var i = 0; i < businesses.length - 1; i++){
            if( businesses[i].rating < businesses[i + 1].rating ){
                var temp = businesses[i];
                businesses[i] = businesses[i + 1];
                businesses[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return businesses;
}

console.log(sortBusinessesByRating([
        {'id': 101, rating: 5.0},
        {'id': 102, rating: 2.0},
        {'id': 103, rating: 3.0},
        {'id': 104, rating: 5.0},
        {'id': 105, rating: 5.0},
    ]));















