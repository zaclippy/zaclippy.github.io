$('#small0').hide()

function decimalPlaces(num) {
    return (num.toString().split('.')[1] || []).length;
}

$('#btn1').click(function() {
    var m = [
        [$('#A').val(), $('#B').val()],
        [$('#D').val(), $('#E').val()]
    ];
    var n = [$('#C').val(), $('#F').val()];
    let det = (m[0][0] * m[1][1]) - (m[0][1] * m[1][0]);
    let inv = [
        [m[1][1] * (1 / det), -m[0][1] * (1 / det)],
        [-m[1][0] * (1 / det), m[0][0] * (1 / det)]
    ];
    let ans = [inv[0][0] * n[0] + inv[0][1] * n[1], inv[1][0] * n[0] + inv[1][1] * n[1]];

    console.log(`x = ${ans[0]} y = ${ans[1]}`);

    let x = Math.round((ans[0] + Number.EPSILON) * 10000) / 10000;
    let y = Math.round((ans[1] + Number.EPSILON) * 10000) / 10000;

    $('#answer').html(`x = ${x}, y = ${y}`);

    // Sets dp to the largest number of decimal places out of the two
    let dp = decimalPlaces(x) >= decimalPlaces(y) ? decimalPlaces(x) : decimalPlaces(y);

    console.log(dp);

    if (dp == 4) {
        $('#small0').show();
    } else {
        $('#small0').hide();
    }
});

$('#btn2').click(function() {
    const g = $("#G").val();
    const h = $("#H").val();
    const i = $("#I").val();
    const j = $("#J").val();
    const k = $("#K").val();
    const l = $("#L").val();
    const m = $("#M").val();
    const n = $("#N").val();
    const o = $("#O").val();
    const u = $("#U").val();
    const v = $("#V").val();
    const w = $("#W").val();
    let fM = [u, v, w];
    console.log('fM : ' +
        fM);

    let det1 = (g * ((k * o) - (l * n))) - (h * ((j * o) - (l * m))) + (i * ((j * n) - (k * m)));
    console.log('determinant = ' + det1);
    let cf = [
        [((k * o) - (l * n)), ((i * n) - (h * o)), ((h * l) - (i * k))],
        [((l * m) - (j * o)), ((g * o) - (i * m)), ((i * j) - (g * l))],
        [((j * n) - (k * m)), ((h * m) - (g * n)), ((g * k) - (h * j))],
    ];
    let iv1 = [
        [],
        [],
        []
    ];
    for (let r = 0; r < 3; r++) {
        for (let s = 0; s < 3; s++) {
            iv1[r][s] = cf[r][s] * 1 / det1;
        }
    }
    console.log('inverse = ' + iv1);
    let ans1 = [0, 0, 0];
    for (let r = 0; r < 3; r++) {
        for (let s = 0; s < 3; s++) {
            ans1[r] = ans1[r] + (iv1[r][s] * fM[s]);
        }
    }
    console.log('ans = ' + ans1);

    let x3 = Math.round((ans1[0] + Number.EPSILON) * 10000) / 10000;
    let y3 = Math.round((ans1[1] + Number.EPSILON) * 10000) / 10000;
    let z3 = Math.round((ans1[2] + Number.EPSILON) * 10000) / 10000;

    $('#answer2').html(`x = ${x3}, y = ${y3}, z = ${z3}`);

    // Sets dp to the largest number of decimal places out of the two
    let dp1 = decimalPlaces(x3) >= decimalPlaces(y3) ? decimalPlaces(x3) : decimalPlaces(y3);

    console.log(dp1);

    if (dp1 == 4) {
        $('#small1').show();
    } else {
        $('#small1').hide();
    }
});