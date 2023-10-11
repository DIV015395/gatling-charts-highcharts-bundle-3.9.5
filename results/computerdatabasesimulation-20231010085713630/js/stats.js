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
        "total": "34",
        "ok": "467",
        "ko": "34"
    },
    "maxResponseTime": {
        "total": "773",
        "ok": "773",
        "ko": "109"
    },
    "meanResponseTime": {
        "total": "313",
        "ok": "567",
        "ko": "59"
    },
    "standardDeviation": {
        "total": "271",
        "ok": "130",
        "ko": "30"
    },
    "percentiles1": {
        "total": "288",
        "ok": "495",
        "ko": "42"
    },
    "percentiles2": {
        "total": "481",
        "ok": "700",
        "ko": "86"
    },
    "percentiles3": {
        "total": "760",
        "ok": "767",
        "ko": "105"
    },
    "percentiles4": {
        "total": "770",
        "ok": "772",
        "ko": "108"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10,
    "percentage": 50
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
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "20",
        "ok": "10",
        "ko": "10"
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
        "total": "467",
        "ok": "467",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "773",
        "ok": "773",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "567",
        "ok": "567",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "130",
        "ok": "130",
        "ko": "-"
    },
    "percentiles1": {
        "total": "495",
        "ok": "495",
        "ko": "-"
    },
    "percentiles2": {
        "total": "700",
        "ok": "700",
        "ko": "-"
    },
    "percentiles3": {
        "total": "767",
        "ok": "767",
        "ko": "-"
    },
    "percentiles4": {
        "total": "772",
        "ok": "772",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 10,
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
        "total": "10",
        "ok": "10",
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
        "total": "34",
        "ok": "-",
        "ko": "34"
    },
    "maxResponseTime": {
        "total": "109",
        "ok": "-",
        "ko": "109"
    },
    "meanResponseTime": {
        "total": "59",
        "ok": "-",
        "ko": "59"
    },
    "standardDeviation": {
        "total": "30",
        "ok": "-",
        "ko": "30"
    },
    "percentiles1": {
        "total": "42",
        "ok": "-",
        "ko": "42"
    },
    "percentiles2": {
        "total": "86",
        "ok": "-",
        "ko": "86"
    },
    "percentiles3": {
        "total": "105",
        "ok": "-",
        "ko": "105"
    },
    "percentiles4": {
        "total": "108",
        "ok": "-",
        "ko": "108"
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
        "total": "10",
        "ok": "-",
        "ko": "10"
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
