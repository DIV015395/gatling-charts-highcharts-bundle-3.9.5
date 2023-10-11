var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1499",
        "ok": "998",
        "ko": "501"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "10151"
    },
    "maxResponseTime": {
        "total": "17195",
        "ok": "16706",
        "ko": "17195"
    },
    "meanResponseTime": {
        "total": "6908",
        "ok": "4801",
        "ko": "11104"
    },
    "standardDeviation": {
        "total": "5027",
        "ok": "4933",
        "ko": "840"
    },
    "percentiles1": {
        "total": "9649",
        "ok": "1220",
        "ko": "11125"
    },
    "percentiles2": {
        "total": "11130",
        "ok": "9638",
        "ko": "11336"
    },
    "percentiles3": {
        "total": "13233",
        "ok": "13152",
        "ko": "13236"
    },
    "percentiles4": {
        "total": "13506",
        "ok": "13606",
        "ko": "13333"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 494,
    "percentage": 33
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 499,
    "percentage": 33
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 501,
    "percentage": 33
},
    "meanNumberOfRequestsPerSecond": {
        "total": "78.895",
        "ok": "52.526",
        "ko": "26.368"
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
        "ok": "499",
        "ko": "501"
    },
    "minResponseTime": {
        "total": "1072",
        "ok": "1072",
        "ko": "10151"
    },
    "maxResponseTime": {
        "total": "17195",
        "ok": "16706",
        "ko": "17195"
    },
    "meanResponseTime": {
        "total": "10223",
        "ok": "9339",
        "ko": "11104"
    },
    "standardDeviation": {
        "total": "2202",
        "ok": "2729",
        "ko": "840"
    },
    "percentiles1": {
        "total": "10525",
        "ok": "9638",
        "ko": "11125"
    },
    "percentiles2": {
        "total": "11328",
        "ok": "11200",
        "ko": "11336"
    },
    "percentiles3": {
        "total": "13261",
        "ok": "13454",
        "ko": "13236"
    },
    "percentiles4": {
        "total": "13629",
        "ok": "13665",
        "ko": "13333"
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
    "count": 498,
    "percentage": 50
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 501,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "52.632",
        "ok": "26.263",
        "ko": "26.368"
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
        "total": "499",
        "ok": "499",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "29",
        "ok": "29",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2049",
        "ok": "2049",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "263",
        "ok": "263",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "177",
        "ok": "177",
        "ko": "-"
    },
    "percentiles1": {
        "total": "224",
        "ok": "224",
        "ko": "-"
    },
    "percentiles2": {
        "total": "321",
        "ok": "321",
        "ko": "-"
    },
    "percentiles3": {
        "total": "543",
        "ok": "543",
        "ko": "-"
    },
    "percentiles4": {
        "total": "762",
        "ok": "762",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 494,
    "percentage": 99
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 1
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.263",
        "ok": "26.263",
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
