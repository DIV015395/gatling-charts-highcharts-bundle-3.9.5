var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "2000",
        "ok": "473",
        "ko": "1527"
    },
    "minResponseTime": {
        "total": "30",
        "ok": "1327",
        "ko": "30"
    },
    "maxResponseTime": {
        "total": "13360",
        "ok": "13360",
        "ko": "13330"
    },
    "meanResponseTime": {
        "total": "6535",
        "ok": "8604",
        "ko": "5894"
    },
    "standardDeviation": {
        "total": "4330",
        "ok": "3001",
        "ko": "4475"
    },
    "percentiles1": {
        "total": "7555",
        "ok": "8759",
        "ko": "5894"
    },
    "percentiles2": {
        "total": "10276",
        "ok": "10966",
        "ko": "10235"
    },
    "percentiles3": {
        "total": "12200",
        "ok": "12698",
        "ko": "11257"
    },
    "percentiles4": {
        "total": "13201",
        "ok": "13107",
        "ko": "13210"
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
    "count": 473,
    "percentage": 24
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 1527,
    "percentage": 76
},
    "meanNumberOfRequestsPerSecond": {
        "total": "90.909",
        "ok": "21.5",
        "ko": "69.409"
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
        "total": "1000",
        "ok": "473",
        "ko": "527"
    },
    "minResponseTime": {
        "total": "1327",
        "ok": "1327",
        "ko": "10134"
    },
    "maxResponseTime": {
        "total": "13360",
        "ok": "13360",
        "ko": "13330"
    },
    "meanResponseTime": {
        "total": "9773",
        "ok": "8604",
        "ko": "10823"
    },
    "standardDeviation": {
        "total": "2417",
        "ok": "3001",
        "ko": "820"
    },
    "percentiles1": {
        "total": "10277",
        "ok": "8759",
        "ko": "10326"
    },
    "percentiles2": {
        "total": "11187",
        "ok": "10966",
        "ko": "11198"
    },
    "percentiles3": {
        "total": "12966",
        "ok": "12698",
        "ko": "13140"
    },
    "percentiles4": {
        "total": "13271",
        "ok": "13107",
        "ko": "13299"
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
    "count": 473,
    "percentage": 47
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 527,
    "percentage": 53
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.455",
        "ok": "21.5",
        "ko": "23.955"
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
        "total": "1000",
        "ok": "0",
        "ko": "1000"
    },
    "minResponseTime": {
        "total": "30",
        "ok": "-",
        "ko": "30"
    },
    "maxResponseTime": {
        "total": "10078",
        "ok": "-",
        "ko": "10078"
    },
    "meanResponseTime": {
        "total": "3296",
        "ok": "-",
        "ko": "3296"
    },
    "standardDeviation": {
        "total": "3268",
        "ok": "-",
        "ko": "3268"
    },
    "percentiles1": {
        "total": "3604",
        "ok": "-",
        "ko": "3604"
    },
    "percentiles2": {
        "total": "5774",
        "ok": "-",
        "ko": "5774"
    },
    "percentiles3": {
        "total": "8803",
        "ok": "-",
        "ko": "8803"
    },
    "percentiles4": {
        "total": "10070",
        "ok": "-",
        "ko": "10070"
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
    "count": 1000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "45.455",
        "ok": "-",
        "ko": "45.455"
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
