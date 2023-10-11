var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "500",
        "ok": "147",
        "ko": "353"
    },
    "minResponseTime": {
        "total": "1480",
        "ok": "1480",
        "ko": "10079"
    },
    "maxResponseTime": {
        "total": "17097",
        "ok": "11095",
        "ko": "17097"
    },
    "meanResponseTime": {
        "total": "10976",
        "ok": "6525",
        "ko": "12829"
    },
    "standardDeviation": {
        "total": "3538",
        "ok": "2393",
        "ko": "1914"
    },
    "percentiles1": {
        "total": "11101",
        "ok": "6958",
        "ko": "13062"
    },
    "percentiles2": {
        "total": "13071",
        "ok": "8514",
        "ko": "13083"
    },
    "percentiles3": {
        "total": "17063",
        "ok": "10900",
        "ko": "17071"
    },
    "percentiles4": {
        "total": "17088",
        "ok": "11038",
        "ko": "17089"
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
    "count": 147,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 353,
    "percentage": 71
},
    "meanNumberOfRequestsPerSecond": {
        "total": "27.778",
        "ok": "8.167",
        "ko": "19.611"
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
        "total": "500",
        "ok": "147",
        "ko": "353"
    },
    "minResponseTime": {
        "total": "1480",
        "ok": "1480",
        "ko": "10079"
    },
    "maxResponseTime": {
        "total": "17097",
        "ok": "11095",
        "ko": "17097"
    },
    "meanResponseTime": {
        "total": "10976",
        "ok": "6525",
        "ko": "12829"
    },
    "standardDeviation": {
        "total": "3538",
        "ok": "2393",
        "ko": "1914"
    },
    "percentiles1": {
        "total": "11101",
        "ok": "6958",
        "ko": "13062"
    },
    "percentiles2": {
        "total": "13071",
        "ok": "8514",
        "ko": "13083"
    },
    "percentiles3": {
        "total": "17063",
        "ok": "10900",
        "ko": "17071"
    },
    "percentiles4": {
        "total": "17088",
        "ok": "11038",
        "ko": "17089"
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
    "count": 147,
    "percentage": 29
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 353,
    "percentage": 71
},
    "meanNumberOfRequestsPerSecond": {
        "total": "27.778",
        "ok": "8.167",
        "ko": "19.611"
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
