// Here is the actual Algorithm
function bubbleSort(arr) {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        // Loop through items of arr[]
        for (let j = 0; j < length; j++) {
            // Compare adjacent items and swap them:
            // if first is greater than second
            if (arr[j] > arr[j + 1]) {
                // swap them
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                console.log(arr)
            }
        }
    }
    return arr;
}

$('#arraysetb').click(function() {
    var aS = $('#arrsize').val();
    // alert(aS);
    for (let i = 0; i < aS; i++) {
        $('#bubblelist').append(`<input type="number" class="inputbs, inputbs2" name="array[]" value="${Math.ceil(Math.random() * aS)}"/><br>`);
    }
    $('#arraysetb').hide();
})

function buttonbubblesort() {
    // Get the array numbers
    let array1 = []
    $('.inputbs2').each(function() {
        array1.push(parseInt($(this).val(), 10));
    })
    alert('Unsorted Array: ' + array1)
    // Time and execute the bubble sort algorithm
    let start = window.performance.now();
    let sorted = bubbleSort(array1);
    let end = window.performance.now();
    alert('Sorted Array:' + sorted);
    let time = end - start;
    alert('Bubble sort time: ' + time + ' ms');
}