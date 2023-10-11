var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1446",
        "ok": "892",
        "ko": "554"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "10137"
    },
    "maxResponseTime": {
        "total": "12023",
        "ok": "12023",
        "ko": "11702"
    },
    "meanResponseTime": {
        "total": "6664",
        "ok": "4151",
        "ko": "10712"
    },
    "standardDeviation": {
        "total": "4589",
        "ok": "4190",
        "ko": "388"
    },
    "percentiles1": {
        "total": "8676",
        "ok": "1379",
        "ko": "10536"
    },
    "percentiles2": {
        "total": "10529",
        "ok": "7852",
        "ko": "11146"
    },
    "percentiles3": {
        "total": "11293",
        "ok": "10788",
        "ko": "11353"
    },
    "percentiles4": {
        "total": "11387",
        "ok": "11217",
        "ko": "11452"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 439,
    "percentage": 30
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
    "count": 449,
    "percentage": 31
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 554,
    "percentage": 38
},
    "meanNumberOfRequestsPerSecond": {
        "total": "85.059",
        "ok": "52.471",
        "ko": "32.588"
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
        "ok": "446",
        "ko": "554"
    },
    "minResponseTime": {
        "total": "792",
        "ok": "792",
        "ko": "10137"
    },
    "maxResponseTime": {
        "total": "12023",
        "ok": "12023",
        "ko": "11702"
    },
    "meanResponseTime": {
        "total": "9493",
        "ok": "7980",
        "ko": "10712"
    },
    "standardDeviation": {
        "total": "2110",
        "ok": "2379",
        "ko": "388"
    },
    "percentiles1": {
        "total": "10413",
        "ok": "7856",
        "ko": "10536"
    },
    "percentiles2": {
        "total": "10698",
        "ok": "10282",
        "ko": "11146"
    },
    "percentiles3": {
        "total": "11312",
        "ok": "10988",
        "ko": "11353"
    },
    "percentiles4": {
        "total": "11516",
        "ok": "11422",
        "ko": "11452"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 1,
    "percentage": 0
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
    "count": 443,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 554,
    "percentage": 55
},
    "meanNumberOfRequestsPerSecond": {
        "total": "58.824",
        "ok": "26.235",
        "ko": "32.588"
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
        "total": "446",
        "ok": "446",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "23",
        "ok": "23",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4404",
        "ok": "4404",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "322",
        "ok": "322",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "374",
        "ok": "374",
        "ko": "-"
    },
    "percentiles1": {
        "total": "252",
        "ok": "252",
        "ko": "-"
    },
    "percentiles2": {
        "total": "415",
        "ok": "415",
        "ko": "-"
    },
    "percentiles3": {
        "total": "678",
        "ok": "678",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1669",
        "ok": "1669",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 438,
    "percentage": 98
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
    "count": 6,
    "percentage": 1
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "26.235",
        "ok": "26.235",
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
