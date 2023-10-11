var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1208",
        "ok": "416",
        "ko": "792"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "10104"
    },
    "maxResponseTime": {
        "total": "17469",
        "ok": "17469",
        "ko": "17347"
    },
    "meanResponseTime": {
        "total": "9042",
        "ok": "4830",
        "ko": "11254"
    },
    "standardDeviation": {
        "total": "4681",
        "ok": "5613",
        "ko": "1630"
    },
    "percentiles1": {
        "total": "10427",
        "ok": "914",
        "ko": "10546"
    },
    "percentiles2": {
        "total": "11205",
        "ok": "8339",
        "ko": "11256"
    },
    "percentiles3": {
        "total": "16060",
        "ok": "16190",
        "ko": "13408"
    },
    "percentiles4": {
        "total": "17294",
        "ok": "16725",
        "ko": "17309"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 207,
    "percentage": 17
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 207,
    "percentage": 17
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 792,
    "percentage": 66
},
    "meanNumberOfRequestsPerSecond": {
        "total": "43.143",
        "ok": "14.857",
        "ko": "28.286"
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
        "ok": "208",
        "ko": "792"
    },
    "minResponseTime": {
        "total": "980",
        "ok": "980",
        "ko": "10104"
    },
    "maxResponseTime": {
        "total": "17469",
        "ok": "17469",
        "ko": "17347"
    },
    "meanResponseTime": {
        "total": "10901",
        "ok": "9554",
        "ko": "11254"
    },
    "standardDeviation": {
        "total": "2530",
        "ok": "4287",
        "ko": "1630"
    },
    "percentiles1": {
        "total": "10500",
        "ok": "8339",
        "ko": "10546"
    },
    "percentiles2": {
        "total": "11262",
        "ok": "14286",
        "ko": "11256"
    },
    "percentiles3": {
        "total": "16620",
        "ok": "16633",
        "ko": "13408"
    },
    "percentiles4": {
        "total": "17307",
        "ok": "16958",
        "ko": "17309"
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
    "count": 207,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 792,
    "percentage": 79
},
    "meanNumberOfRequestsPerSecond": {
        "total": "35.714",
        "ok": "7.429",
        "ko": "28.286"
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
        "total": "208",
        "ok": "208",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "848",
        "ok": "848",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "106",
        "ok": "106",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "86",
        "ok": "86",
        "ko": "-"
    },
    "percentiles1": {
        "total": "101",
        "ok": "101",
        "ko": "-"
    },
    "percentiles2": {
        "total": "130",
        "ok": "130",
        "ko": "-"
    },
    "percentiles3": {
        "total": "202",
        "ok": "202",
        "ko": "-"
    },
    "percentiles4": {
        "total": "387",
        "ok": "387",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 207,
    "percentage": 100
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
        "total": "7.429",
        "ok": "7.429",
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
