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

function insertionSort(arr) {
    let length = arr.length;
    for (let i = 1; i < length; i++) {
        let x = arr[i];
        let j = i - 1;
        while ((j > -1) && (x < arr[j])) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = x;
    }
    return arr;
}


function merge(left, right) {
    let array = [];
    while (right.length != 0 && left.length != 0) {
        if (left[0] < right[0]) {
            array.push(left.shift());
        } else {
            array.push(right.shift());
        }
    }
    return array.concat(left.slice().concat(right.slice()));
}

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

$('#arraysetb').click(function() {
    var aS = $('#arrsize').val();
    $('#bubblelist').empty();
    // alert(aS);
    for (let i = 0; i < aS; i++) {
        $('#bubblelist').append(`<input type="number" class="inputbs, inputbs2" name="array[]" value="${Math.ceil(Math.random() * aS)}"/>`);
    }
})
$('#arrsize').blur(function() {
    var aS = $('#arrsize').val();
    $('#bubblelist').empty();
    // alert(aS);
    for (let i = 0; i < aS; i++) {
        $('#bubblelist').append(`<input type="number" class="inputbs, inputbs2" name="array[]" value="${Math.ceil(Math.random() * aS)}"/>`);
    }
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

function buttonmergesort() {
    // Get the array numbers
    let array1 = []
    $('.inputbs2').each(function() {
        array1.push(parseInt($(this).val(), 10));
    })
    alert('Unsorted Array: ' + array1)
    // Time and execute the bubble sort algorithm
    let start = window.performance.now();
    let sorted = mergeSort(array1);
    let end = window.performance.now();
    alert('Sorted Array:' + sorted);
    let time = end - start;
    alert('Merge sort time: ' + time + ' ms');
}

function buttoninsertionsort() {
    // Get the array numbers
    let array1 = []
    $('.inputbs2').each(function() {
        array1.push(parseInt($(this).val(), 10));
    })
    alert('Unsorted Array: ' + array1)
    // Time and execute the bubble sort algorithm
    let start = window.performance.now();
    let sorted = insertionSort(array1);
    let end = window.performance.now();
    alert('Sorted Array:' + sorted);
    let time = end - start;
    alert('Insertion sort time: ' + time + ' ms');
}

function submitsort() {
    if ($('#bubblelist').is(':parent') == false) {
        let error = "Please set the array length"
        $('#errortext').html(error);
    } else {
        let algorithm = $('#algorithm option:selected').text();
        if (algorithm == "") {
            let error = "Please select an algorithm"
            $('#errortext').html(error);
        } else if (algorithm == "Bubble Sort") {
            buttonbubblesort();
        } else if (algorithm == "Insertion Sort") {
            buttoninsertionsort();
        } else if (algorithm == "Merge Sort") {
            buttonmergesort();
        }
        window.location.reload();
    }
}