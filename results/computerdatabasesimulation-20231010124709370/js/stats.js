var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "814",
        "ok": "428",
        "ko": "386"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "10125"
    },
    "maxResponseTime": {
        "total": "17441",
        "ok": "17441",
        "ko": "17270"
    },
    "meanResponseTime": {
        "total": "8181",
        "ok": "4980",
        "ko": "11730"
    },
    "standardDeviation": {
        "total": "5424",
        "ok": "5715",
        "ko": "1371"
    },
    "percentiles1": {
        "total": "10312",
        "ok": "2176",
        "ko": "11264"
    },
    "percentiles2": {
        "total": "11311",
        "ok": "8478",
        "ko": "13226"
    },
    "percentiles3": {
        "total": "15439",
        "ok": "16696",
        "ko": "13309"
    },
    "percentiles4": {
        "total": "17137",
        "ok": "16859",
        "ko": "17256"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 207,
    "percentage": 25
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 217,
    "percentage": 27
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 386,
    "percentage": 47
},
    "meanNumberOfRequestsPerSecond": {
        "total": "29.071",
        "ok": "15.286",
        "ko": "13.786"
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
        "total": "600",
        "ok": "214",
        "ko": "386"
    },
    "minResponseTime": {
        "total": "2352",
        "ok": "2352",
        "ko": "10125"
    },
    "maxResponseTime": {
        "total": "17441",
        "ok": "17441",
        "ko": "17270"
    },
    "meanResponseTime": {
        "total": "11012",
        "ok": "9717",
        "ko": "11730"
    },
    "standardDeviation": {
        "total": "3068",
        "ok": "4516",
        "ko": "1371"
    },
    "percentiles1": {
        "total": "11239",
        "ok": "8480",
        "ko": "11264"
    },
    "percentiles2": {
        "total": "13239",
        "ok": "15045",
        "ko": "13226"
    },
    "percentiles3": {
        "total": "16702",
        "ok": "16827",
        "ko": "13309"
    },
    "percentiles4": {
        "total": "17248",
        "ok": "16997",
        "ko": "17256"
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
    "count": 214,
    "percentage": 36
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 386,
    "percentage": 64
},
    "meanNumberOfRequestsPerSecond": {
        "total": "21.429",
        "ok": "7.643",
        "ko": "13.786"
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
        "total": "214",
        "ok": "214",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "25",
        "ok": "25",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2000",
        "ok": "2000",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "244",
        "ok": "244",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "244",
        "ok": "244",
        "ko": "-"
    },
    "percentiles1": {
        "total": "195",
        "ok": "195",
        "ko": "-"
    },
    "percentiles2": {
        "total": "247",
        "ok": "247",
        "ko": "-"
    },
    "percentiles3": {
        "total": "525",
        "ok": "525",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1505",
        "ok": "1505",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 207,
    "percentage": 97
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 3,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "7.643",
        "ok": "7.643",
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
