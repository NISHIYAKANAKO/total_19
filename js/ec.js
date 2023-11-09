//localStorageのデータから訪問回数を加算
if (localStorage.counter == null) {
    localStorage.counter = 1;
    } else {
    localStorage.counter++;
    }

    //訪問回数を表示
    var counter_div = document.getElementById("counter_div");
    counter_div.innerHTML = "あなたは" + "<em>" + localStorage.counter + "人目" + "</em>" + "に遊びに来てくれたよ！";
