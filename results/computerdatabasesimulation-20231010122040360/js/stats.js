var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "60",
        "ok": "60",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4624",
        "ok": "4624",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1235",
        "ok": "1235",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1621",
        "ok": "1621",
        "ko": "-"
    },
    "percentiles1": {
        "total": "304",
        "ok": "304",
        "ko": "-"
    },
    "percentiles2": {
        "total": "2634",
        "ok": "2634",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4619",
        "ok": "4619",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4623",
        "ok": "4623",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 41,
    "percentage": 68
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
    "count": 19,
    "percentage": 32
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "2.4",
        "ok": "2.4",
        "ko": "-"
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
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "495",
        "ok": "495",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4624",
        "ok": "4624",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "2397",
        "ok": "2397",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1599",
        "ok": "1599",
        "ko": "-"
    },
    "percentiles1": {
        "total": "2634",
        "ok": "2634",
        "ko": "-"
    },
    "percentiles2": {
        "total": "3658",
        "ok": "3658",
        "ko": "-"
    },
    "percentiles3": {
        "total": "4622",
        "ok": "4622",
        "ko": "-"
    },
    "percentiles4": {
        "total": "4624",
        "ok": "4624",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 11,
    "percentage": 37
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
    "count": 19,
    "percentage": 63
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.2",
        "ok": "1.2",
        "ko": "-"
    }
}
    },"req_websocket-close-9c2d8": {
        type: "REQUEST",
        name: "WebSocket Close",
path: "WebSocket Close",
pathFormatted: "req_websocket-close-9c2d8",
stats: {
    "name": "WebSocket Close",
    "numberOfRequests": {
        "total": "30",
        "ok": "30",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "113",
        "ok": "113",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "73",
        "ok": "73",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "percentiles1": {
        "total": "79",
        "ok": "79",
        "ko": "-"
    },
    "percentiles2": {
        "total": "100",
        "ok": "100",
        "ko": "-"
    },
    "percentiles3": {
        "total": "110",
        "ok": "110",
        "ko": "-"
    },
    "percentiles4": {
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 30,
    "percentage": 100
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
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1.2",
        "ok": "1.2",
        "ko": "-"
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
