var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1720",
        "ok": "1440",
        "ko": "280"
    },
    "minResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "10139"
    },
    "maxResponseTime": {
        "total": "16190",
        "ok": "16190",
        "ko": "13649"
    },
    "meanResponseTime": {
        "total": "5818",
        "ok": "4710",
        "ko": "11515"
    },
    "standardDeviation": {
        "total": "5505",
        "ok": "5321",
        "ko": "1330"
    },
    "percentiles1": {
        "total": "5617",
        "ok": "938",
        "ko": "10677"
    },
    "percentiles2": {
        "total": "10669",
        "ok": "9273",
        "ko": "13404"
    },
    "percentiles3": {
        "total": "14499",
        "ok": "14705",
        "ko": "13523"
    },
    "percentiles4": {
        "total": "15516",
        "ok": "15552",
        "ko": "13643"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 720,
    "percentage": 42
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 16,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 704,
    "percentage": 41
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 280,
    "percentage": 16
},
    "meanNumberOfRequestsPerSecond": {
        "total": "95.556",
        "ok": "80",
        "ko": "15.556"
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
        "ok": "720",
        "ko": "280"
    },
    "minResponseTime": {
        "total": "984",
        "ok": "984",
        "ko": "10139"
    },
    "maxResponseTime": {
        "total": "16190",
        "ok": "16190",
        "ko": "13649"
    },
    "meanResponseTime": {
        "total": "9871",
        "ok": "9231",
        "ko": "11515"
    },
    "standardDeviation": {
        "total": "3588",
        "ok": "3966",
        "ko": "1330"
    },
    "percentiles1": {
        "total": "10465",
        "ok": "9278",
        "ko": "10677"
    },
    "percentiles2": {
        "total": "12915",
        "ok": "12790",
        "ko": "13404"
    },
    "percentiles3": {
        "total": "15126",
        "ok": "15233",
        "ko": "13523"
    },
    "percentiles4": {
        "total": "15608",
        "ok": "15655",
        "ko": "13643"
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
    "count": 16,
    "percentage": 2
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 704,
    "percentage": 70
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 280,
    "percentage": 28
},
    "meanNumberOfRequestsPerSecond": {
        "total": "55.556",
        "ok": "40",
        "ko": "15.556"
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
        "total": "720",
        "ok": "720",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "22",
        "ok": "22",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "508",
        "ok": "508",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "189",
        "ok": "189",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "percentiles1": {
        "total": "159",
        "ok": "159",
        "ko": "-"
    },
    "percentiles2": {
        "total": "238",
        "ok": "238",
        "ko": "-"
    },
    "percentiles3": {
        "total": "424",
        "ok": "424",
        "ko": "-"
    },
    "percentiles4": {
        "total": "470",
        "ok": "470",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 720,
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
        "total": "40",
        "ok": "40",
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
