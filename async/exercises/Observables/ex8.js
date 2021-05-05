$(document).ready(function () {
    var $btn = $("#btn"),
        $list = $("#list");

    let clicks = ASQ.react.of();
    let msgs = ASQ.react.of();
    let latest;

    $btn.click(function (evt) {
        clicks.push(evt);
    });

    setInterval(function (evt) {
        if (latest) {
            msgs.push("Clicked");
            let latest = null;
        }
    }, 1000);

    clicks.val(function (evt) {
        latest = evt;
    });

    msgs.val(function () {
        $list.append($("<div>Clicked!</div>"));
    });
});
