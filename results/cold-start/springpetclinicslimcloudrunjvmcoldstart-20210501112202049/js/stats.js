var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "400",
        "ok": "399",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "103",
        "ko": "43"
    },
    "maxResponseTime": {
        "total": "30308",
        "ok": "30308",
        "ko": "43"
    },
    "meanResponseTime": {
        "total": "21632",
        "ok": "21686",
        "ko": "43"
    },
    "standardDeviation": {
        "total": "7971",
        "ok": "7907",
        "ko": "0"
    },
    "percentiles1": {
        "total": "24476",
        "ok": "24477",
        "ko": "43"
    },
    "percentiles2": {
        "total": "25474",
        "ok": "25476",
        "ko": "43"
    },
    "percentiles3": {
        "total": "26598",
        "ok": "26600",
        "ko": "43"
    },
    "percentiles4": {
        "total": "28415",
        "ok": "28416",
        "ko": "43"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 46,
    "percentage": 12
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 353,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.001",
        "ok": "0.001",
        "ko": "0"
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
        "ok": "399",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "43",
        "ok": "103",
        "ko": "43"
    },
    "maxResponseTime": {
        "total": "30308",
        "ok": "30308",
        "ko": "43"
    },
    "meanResponseTime": {
        "total": "21632",
        "ok": "21686",
        "ko": "43"
    },
    "standardDeviation": {
        "total": "7971",
        "ok": "7907",
        "ko": "0"
    },
    "percentiles1": {
        "total": "24476",
        "ok": "24477",
        "ko": "43"
    },
    "percentiles2": {
        "total": "25474",
        "ok": "25476",
        "ko": "43"
    },
    "percentiles3": {
        "total": "26598",
        "ok": "26600",
        "ko": "43"
    },
    "percentiles4": {
        "total": "28415",
        "ok": "28416",
        "ko": "43"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 46,
    "percentage": 12
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 353,
    "percentage": 88
},
    "group4": {
    "name": "failed",
    "count": 1,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.001",
        "ok": "0.001",
        "ko": "0"
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
