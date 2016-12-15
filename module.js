/**
 * Created by koh on 2016-12-15.
 */

exports.abs = function (number) {
    if( 0 < number ){
        return number;
    } else {
        return -number;
    }
};

exports.circleArea = function (radius) {
    return radius * radius * Math.PI;
};