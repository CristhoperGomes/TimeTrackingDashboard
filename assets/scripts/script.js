function daily() {
    fetch("../../media/data.json")
        .then(function (dados) {
            return dados.json();
        })
        .then(function (json) {
            //Work
            document.getElementById("work-time").innerHTML = json[0].timeframes.daily.current + "hrs";
            document.getElementById("work-time-historic").innerHTML = "Last Day - " + json[0].timeframes.daily.previous + "hrs";
            //Play
            document.getElementById("play-time").innerHTML = json[1].timeframes.daily.current + "hrs";
            document.getElementById("play-time-historic").innerHTML = "Last Day - " + json[1].timeframes.daily.previous + "hrs";
            //Study
            document.getElementById("study-time").innerHTML = json[2].timeframes.daily.current + "hrs";
            document.getElementById("study-time-historic").innerHTML = "Last Day - " + json[2].timeframes.daily.previous + "hrs";
            //Exercise
            document.getElementById("exercise-time").innerHTML = json[3].timeframes.daily.current + "hrs";
            document.getElementById("exercise-time-historic").innerHTML = "Last Day - " + json[3].timeframes.daily.previous + "hrs";
            //Social
            document.getElementById("social-time").innerHTML = json[4].timeframes.daily.current + "hrs";
            document.getElementById("social-time-historic").innerHTML = "Last Day - " + json[4].timeframes.daily.previous + "hrs";
            //Self Care
            document.getElementById("self-care-time").innerHTML = json[5].timeframes.daily.current + "hrs";
            document.getElementById("self-care-time-historic").innerHTML = "Last Day - " + json[5].timeframes.daily.previous + "hrs";

        })
        .catch(function (error) {
            console.log("Erro:")
        })
        ;
        document.getElementById("weekly").classList.remove('active');
        document.getElementById("monthly").classList.remove('active');
        document.getElementById("daily").classList.add('active');
}

function weekly() {
    fetch("../../media/data.json")
        .then(function (dados) {
            return dados.json();
        })
        .then(function (json) {
            //Work
            document.getElementById("work-time").innerHTML = json[0].timeframes.weekly.current + "hrs";
            document.getElementById("work-time-historic").innerHTML = "Last Week - " + json[0].timeframes.weekly.previous + "hrs";
            //Play
            document.getElementById("play-time").innerHTML = json[1].timeframes.weekly.current + "hrs";
            document.getElementById("play-time-historic").innerHTML = "Last Week - " + json[1].timeframes.weekly.previous + "hrs";
            //Study
            document.getElementById("study-time").innerHTML = json[2].timeframes.weekly.current + "hrs";
            document.getElementById("study-time-historic").innerHTML = "Last Week - " + json[2].timeframes.weekly.previous + "hrs";
            //Exercise
            document.getElementById("exercise-time").innerHTML = json[3].timeframes.weekly.current + "hrs";
            document.getElementById("exercise-time-historic").innerHTML = "Last Week - " + json[3].timeframes.weekly.previous + "hrs";
            //Social
            document.getElementById("social-time").innerHTML = json[4].timeframes.weekly.current + "hrs";
            document.getElementById("social-time-historic").innerHTML = "Last Week - " + json[4].timeframes.weekly.previous + "hrs";
            //Self Care
            document.getElementById("self-care-time").innerHTML = json[5].timeframes.weekly.current + "hrs";
            document.getElementById("self-care-time-historic").innerHTML = "Last Week - " + json[5].timeframes.weekly.previous + "hrs";

        })
        .catch(function (error) {
            console.log("Erro:")
        })
        ;
        document.getElementById("daily").classList.remove('active');
        document.getElementById("monthly").classList.remove('active');
        document.getElementById("weekly").classList.add('active');
}

function monthly() {
    fetch("../../media/data.json")
        .then(function (dados) {
            return dados.json();
        })
        .then(function (json) {
            //Work
            document.getElementById("work-time").innerHTML = json[0].timeframes.monthly.current + "hrs";
            document.getElementById("work-time-historic").innerHTML = "Last Month - " + json[0].timeframes.monthly.previous + "hrs";
            //Play
            document.getElementById("play-time").innerHTML = json[1].timeframes.monthly.current + "hrs";
            document.getElementById("play-time-historic").innerHTML = "Last Month - " + json[1].timeframes.monthly.previous + "hrs";
            //Study
            document.getElementById("study-time").innerHTML = json[2].timeframes.monthly.current + "hrs";
            document.getElementById("study-time-historic").innerHTML = "Last Month - " + json[2].timeframes.monthly.previous + "hrs";
            //Exercise
            document.getElementById("exercise-time").innerHTML = json[3].timeframes.monthly.current + "hrs";
            document.getElementById("exercise-time-historic").innerHTML = "Last Month - " + json[3].timeframes.monthly.previous + "hrs";
            //Social
            document.getElementById("social-time").innerHTML = json[4].timeframes.monthly.current + "hrs";
            document.getElementById("social-time-historic").innerHTML = "Last Month - " + json[4].timeframes.monthly.previous + "hrs";
            //Self Care
            document.getElementById("self-care-time").innerHTML = json[5].timeframes.monthly.current + "hrs";
            document.getElementById("self-care-time-historic").innerHTML = "Last Month - " + json[5].timeframes.monthly.previous + "hrs";

        })
        .catch(function (error) {
            console.log("Erro:")
        })
        ;
        document.getElementById("weekly").classList.remove('active');
        document.getElementById("daily").classList.remove('active');
        document.getElementById("monthly").classList.add('active');
}

