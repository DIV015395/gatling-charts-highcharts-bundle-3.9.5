var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "200",
        "ok": "150",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "1604",
        "ok": "1604",
        "ko": "11024"
    },
    "maxResponseTime": {
        "total": "13026",
        "ok": "9671",
        "ko": "13026"
    },
    "meanResponseTime": {
        "total": "7637",
        "ok": "6476",
        "ko": "11118"
    },
    "standardDeviation": {
        "total": "2779",
        "ok": "2204",
        "ko": "390"
    },
    "percentiles1": {
        "total": "7451",
        "ok": "7379",
        "ko": "11037"
    },
    "percentiles2": {
        "total": "10009",
        "ok": "8244",
        "ko": "11042"
    },
    "percentiles3": {
        "total": "11044",
        "ok": "9473",
        "ko": "11072"
    },
    "percentiles4": {
        "total": "11092",
        "ok": "9578",
        "ko": "13026"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 150,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 50,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.545",
        "ok": "3.409",
        "ko": "1.136"
    }
},
contents: {
"req_websocket-conne-b6a6d": {
        type: "REQUEST",
        name: "WebSocket Connect",
path: "WebSocket Connect",
pathFormatted: "req_websocket-conne-b6a6d",
stats: {
    "name": "WebSocket Connect",
    "numberOfRequests": {
        "total": "200",
        "ok": "150",
        "ko": "50"
    },
    "minResponseTime": {
        "total": "1604",
        "ok": "1604",
        "ko": "11024"
    },
    "maxResponseTime": {
        "total": "13026",
        "ok": "9671",
        "ko": "13026"
    },
    "meanResponseTime": {
        "total": "7637",
        "ok": "6476",
        "ko": "11118"
    },
    "standardDeviation": {
        "total": "2779",
        "ok": "2204",
        "ko": "390"
    },
    "percentiles1": {
        "total": "7451",
        "ok": "7379",
        "ko": "11037"
    },
    "percentiles2": {
        "total": "10009",
        "ok": "8244",
        "ko": "11042"
    },
    "percentiles3": {
        "total": "11044",
        "ok": "9473",
        "ko": "11072"
    },
    "percentiles4": {
        "total": "11092",
        "ok": "9578",
        "ko": "13026"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 150,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 50,
    "percentage": 25
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.545",
        "ok": "3.409",
        "ko": "1.136"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
