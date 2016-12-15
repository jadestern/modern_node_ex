/**
 * Created by koh on 2016-12-15.
 */

process.argv.forEach(function (item, index) {
    console.log(index + ' : ' + typeof (item) + ' : ', item);

    if( item == '--exit'){
        var exitTime = Number(process.argv[index + 1]);

        setTimeout( function () {
            process.exit();
        }, exitTime);
    }
});

console.log('- process.connected',process.connected);
console.log('- process.execArgv',process.execArgv);
console.log('- process.exitCode',process.exitCode);
console.log('- process.mainModule',process.mainModule);
console.log('- process.release',process.release);
console.log('- process.memoryUsage()',process.memoryUsage());
console.log('- process.uptime()',process.uptime());