var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "400",
        "ok": "400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2995",
        "ok": "2995",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "262",
        "ok": "262",
        "ko": "-"
    },
    "percentiles1": {
        "total": "737",
        "ok": "737",
        "ko": "-"
    },
    "percentiles2": {
        "total": "797",
        "ok": "797",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1013",
        "ok": "1013",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1272",
        "ok": "1272",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 303,
    "percentage": 76
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 91,
    "percentage": 23
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.001",
        "ok": "0.001",
        "ko": "-"
    }
},
contents: {
"req_get-owner-396f0": {
        type: "REQUEST",
        name: "Get Owner",
path: "Get Owner",
pathFormatted: "req_get-owner-396f0",
stats: {
    "name": "Get Owner",
    "numberOfRequests": {
        "total": "400",
        "ok": "400",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2995",
        "ok": "2995",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "708",
        "ok": "708",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "262",
        "ok": "262",
        "ko": "-"
    },
    "percentiles1": {
        "total": "737",
        "ok": "737",
        "ko": "-"
    },
    "percentiles2": {
        "total": "797",
        "ok": "797",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1013",
        "ok": "1013",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1272",
        "ok": "1272",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 303,
    "percentage": 76
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 91,
    "percentage": 23
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 6,
    "percentage": 2
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.001",
        "ok": "0.001",
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
