var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1146",
        "ok": "292",
        "ko": "854"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "10073"
    },
    "maxResponseTime": {
        "total": "11506",
        "ok": "9540",
        "ko": "11506"
    },
    "meanResponseTime": {
        "total": "8917",
        "ok": "3511",
        "ko": "10766"
    },
    "standardDeviation": {
        "total": "3668",
        "ok": "3620",
        "ko": "404"
    },
    "percentiles1": {
        "total": "10441",
        "ok": "704",
        "ko": "10593"
    },
    "percentiles2": {
        "total": "11114",
        "ok": "7351",
        "ko": "11174"
    },
    "percentiles3": {
        "total": "11419",
        "ok": "8543",
        "ko": "11424"
    },
    "percentiles4": {
        "total": "11460",
        "ok": "9436",
        "ko": "11462"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 146,
    "percentage": 13
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 145,
    "percentage": 13
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 854,
    "percentage": 75
},
    "meanNumberOfRequestsPerSecond": {
        "total": "35.812",
        "ok": "9.125",
        "ko": "26.688"
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
        "total": "1000",
        "ok": "146",
        "ko": "854"
    },
    "minResponseTime": {
        "total": "883",
        "ok": "883",
        "ko": "10073"
    },
    "maxResponseTime": {
        "total": "11506",
        "ok": "9540",
        "ko": "11506"
    },
    "meanResponseTime": {
        "total": "10200",
        "ok": "6890",
        "ko": "10766"
    },
    "standardDeviation": {
        "total": "1582",
        "ok": "1836",
        "ko": "404"
    },
    "percentiles1": {
        "total": "10525",
        "ok": "7356",
        "ko": "10593"
    },
    "percentiles2": {
        "total": "11156",
        "ok": "8389",
        "ko": "11173"
    },
    "percentiles3": {
        "total": "11421",
        "ok": "9342",
        "ko": "11424"
    },
    "percentiles4": {
        "total": "11461",
        "ok": "9476",
        "ko": "11462"
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
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 145,
    "percentage": 14
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 854,
    "percentage": 85
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.25",
        "ok": "4.562",
        "ko": "26.688"
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
        "total": "146",
        "ok": "146",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "355",
        "ok": "355",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "132",
        "ok": "132",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "78",
        "ok": "78",
        "ko": "-"
    },
    "percentiles1": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "percentiles2": {
        "total": "177",
        "ok": "177",
        "ko": "-"
    },
    "percentiles3": {
        "total": "267",
        "ok": "267",
        "ko": "-"
    },
    "percentiles4": {
        "total": "339",
        "ok": "339",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 146,
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
        "total": "4.562",
        "ok": "4.562",
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
