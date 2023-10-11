var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "200",
        "ok": "149",
        "ko": "51"
    },
    "minResponseTime": {
        "total": "1841",
        "ok": "1841",
        "ko": "10025"
    },
    "maxResponseTime": {
        "total": "10201",
        "ok": "9261",
        "ko": "10201"
    },
    "meanResponseTime": {
        "total": "7268",
        "ok": "6301",
        "ko": "10093"
    },
    "standardDeviation": {
        "total": "2373",
        "ok": "1972",
        "ko": "52"
    },
    "percentiles1": {
        "total": "7087",
        "ok": "6838",
        "ko": "10077"
    },
    "percentiles2": {
        "total": "10025",
        "ok": "8042",
        "ko": "10122"
    },
    "percentiles3": {
        "total": "10142",
        "ok": "9127",
        "ko": "10187"
    },
    "percentiles4": {
        "total": "10187",
        "ok": "9249",
        "ko": "10195"
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
    "count": 149,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 51,
    "percentage": 26
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.878",
        "ok": "3.634",
        "ko": "1.244"
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
        "ok": "149",
        "ko": "51"
    },
    "minResponseTime": {
        "total": "1841",
        "ok": "1841",
        "ko": "10025"
    },
    "maxResponseTime": {
        "total": "10201",
        "ok": "9261",
        "ko": "10201"
    },
    "meanResponseTime": {
        "total": "7268",
        "ok": "6301",
        "ko": "10093"
    },
    "standardDeviation": {
        "total": "2373",
        "ok": "1972",
        "ko": "52"
    },
    "percentiles1": {
        "total": "7087",
        "ok": "6838",
        "ko": "10077"
    },
    "percentiles2": {
        "total": "10025",
        "ok": "8042",
        "ko": "10122"
    },
    "percentiles3": {
        "total": "10142",
        "ok": "9127",
        "ko": "10187"
    },
    "percentiles4": {
        "total": "10187",
        "ok": "9249",
        "ko": "10195"
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
    "count": 149,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 51,
    "percentage": 26
},
    "meanNumberOfRequestsPerSecond": {
        "total": "4.878",
        "ok": "3.634",
        "ko": "1.244"
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
