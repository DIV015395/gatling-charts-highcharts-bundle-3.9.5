var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "20",
        "ok": "10",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "334",
        "ko": "35"
    },
    "maxResponseTime": {
        "total": "1498",
        "ok": "1498",
        "ko": "203"
    },
    "meanResponseTime": {
        "total": "420",
        "ok": "768",
        "ko": "72"
    },
    "standardDeviation": {
        "total": "468",
        "ok": "440",
        "ko": "50"
    },
    "percentiles1": {
        "total": "269",
        "ok": "676",
        "ko": "50"
    },
    "percentiles2": {
        "total": "586",
        "ok": "1016",
        "ko": "83"
    },
    "percentiles3": {
        "total": "1497",
        "ok": "1498",
        "ko": "162"
    },
    "percentiles4": {
        "total": "1498",
        "ok": "1498",
        "ko": "195"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 5,
    "percentage": 25
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 15
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 10,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "10",
        "ok": "5",
        "ko": "5"
    }
},
contents: {
"req_websocket-conne-94980": {
        type: "REQUEST",
        name: "WebSocket Connection",
path: "WebSocket Connection",
pathFormatted: "req_websocket-conne-94980",
stats: {
    "name": "WebSocket Connection",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "334",
        "ok": "334",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1498",
        "ok": "1498",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "768",
        "ok": "768",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "440",
        "ok": "440",
        "ko": "-"
    },
    "percentiles1": {
        "total": "676",
        "ok": "676",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1016",
        "ok": "1016",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1498",
        "ok": "1498",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1498",
        "ok": "1498",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 5,
    "percentage": 50
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 3,
    "percentage": 30
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2,
    "percentage": 20
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "5",
        "ko": "-"
    }
}
    },"req_websocket-inter-f3ca5": {
        type: "REQUEST",
        name: "WebSocket Interaction",
path: "WebSocket Interaction",
pathFormatted: "req_websocket-inter-f3ca5",
stats: {
    "name": "WebSocket Interaction",
    "numberOfRequests": {
        "total": "10",
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "-",
        "ko": "35"
    },
    "maxResponseTime": {
        "total": "203",
        "ok": "-",
        "ko": "203"
    },
    "meanResponseTime": {
        "total": "72",
        "ok": "-",
        "ko": "72"
    },
    "standardDeviation": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    },
    "percentiles1": {
        "total": "50",
        "ok": "-",
        "ko": "50"
    },
    "percentiles2": {
        "total": "83",
        "ok": "-",
        "ko": "83"
    },
    "percentiles3": {
        "total": "162",
        "ok": "-",
        "ko": "162"
    },
    "percentiles4": {
        "total": "195",
        "ok": "-",
        "ko": "195"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "5",
        "ok": "-",
        "ko": "5"
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
