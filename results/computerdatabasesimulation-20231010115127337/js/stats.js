var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1628",
        "ok": "1256",
        "ko": "372"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "32",
        "ko": "10256"
    },
    "maxResponseTime": {
        "total": "12623",
        "ok": "12623",
        "ko": "11663"
    },
    "meanResponseTime": {
        "total": "5753",
        "ok": "4273",
        "ko": "10751"
    },
    "standardDeviation": {
        "total": "4684",
        "ok": "4339",
        "ko": "296"
    },
    "percentiles1": {
        "total": "6900",
        "ok": "1132",
        "ko": "10653"
    },
    "percentiles2": {
        "total": "10557",
        "ok": "8358",
        "ko": "10854"
    },
    "percentiles3": {
        "total": "11369",
        "ok": "11339",
        "ko": "11392"
    },
    "percentiles4": {
        "total": "12261",
        "ok": "12363",
        "ko": "11461"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 626,
    "percentage": 38
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
    "count": 628,
    "percentage": 39
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 372,
    "percentage": 23
},
    "meanNumberOfRequestsPerSecond": {
        "total": "125.231",
        "ok": "96.615",
        "ko": "28.615"
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
        "ok": "628",
        "ko": "372"
    },
    "minResponseTime": {
        "total": "1350",
        "ok": "1350",
        "ko": "10256"
    },
    "maxResponseTime": {
        "total": "12623",
        "ok": "12623",
        "ko": "11663"
    },
    "meanResponseTime": {
        "total": "9204",
        "ok": "8287",
        "ko": "10751"
    },
    "standardDeviation": {
        "total": "2199",
        "ok": "2322",
        "ko": "296"
    },
    "percentiles1": {
        "total": "10357",
        "ok": "8360",
        "ko": "10653"
    },
    "percentiles2": {
        "total": "10713",
        "ok": "10069",
        "ko": "10854"
    },
    "percentiles3": {
        "total": "11468",
        "ok": "11725",
        "ko": "11392"
    },
    "percentiles4": {
        "total": "12476",
        "ok": "12542",
        "ko": "11461"
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
    "count": 628,
    "percentage": 63
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 372,
    "percentage": 37
},
    "meanNumberOfRequestsPerSecond": {
        "total": "76.923",
        "ok": "48.308",
        "ko": "28.615"
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
        "total": "628",
        "ok": "628",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "32",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "914",
        "ok": "914",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "258",
        "ok": "258",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "164",
        "ok": "164",
        "ko": "-"
    },
    "percentiles1": {
        "total": "205",
        "ok": "205",
        "ko": "-"
    },
    "percentiles2": {
        "total": "378",
        "ok": "378",
        "ko": "-"
    },
    "percentiles3": {
        "total": "552",
        "ok": "552",
        "ko": "-"
    },
    "percentiles4": {
        "total": "682",
        "ok": "682",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 626,
    "percentage": 100
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
        "total": "48.308",
        "ok": "48.308",
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
