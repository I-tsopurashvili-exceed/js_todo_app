
let count = 0;
let countComplete = 0;

// Create a new list item when clicking on the "Add" button
function newElement() {
    let li = document.createElement('li');
    li.className = "listitem";
    let buttons = document.getElementById('footer');
    if(buttons.style.display = "none") {
        buttons.style.display = "block";
    }
    li.ondblclick = function() {
        li.setAttribute("contenteditable", "true");
    }
    let inputValue = document.getElementById('myInput').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '') {
        alert("Write something");
    } else {
        document.getElementById('myUL').appendChild(li);
    }
    count = getCount();
    document.getElementById('myCount').innerHTML = count + ' items left';
    document.getElementById('myInput').value = '';

    document.getElementById("myUL").addEventListener('mouseover', mouseOver);
        function mouseOver() {
    let closeIcon = document.createElement('i');
    closeIcon.className = "fas fa-times";
    li.appendChild(closeIcon);
    for(i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function(e) {
            e.target.parentElement.remove();
            count = getCount();
            document.getElementById('myCount').innerHTML = count + ' items left';
            let div = this.parentElement;
            div.style.display = "none";
        });
    }

    document.getElementById("myUL").addEventListener('mouseout', mouseOut);
        function mouseOut() {
        closeIcon.style.visibility = "hidden";
    }
    }
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName('fas');
let i;
for(i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function() {
        let div = this.parentElement;
        div.style.display = "none";
    });
}

// Add a "checked" symbol when clicking on a list item
let check = document.querySelector('ul');
check.addEventListener('click', function(ev) {
    if(ev.target.tagName = 'li');
    ev.target.classList.toggle('checked');
    countComplete = completedCount();
    document.getElementById('deleteCompleted').innerHTML = 'Clear Completed ' + countComplete;
}, false);

function getCount() {
    let countNew = document.querySelectorAll('ul > li:not(.checked)').length;
    return countNew;
}

function deleteCompleted() {
    let cleanList = document.querySelectorAll('#myUL .checked');
    let c;
    for (c = 0; li = cleanList[c]; c++) {
        li.parentNode.removeChild(li);
    }
    countComplete = completedCount();
    document.getElementById('deleteCompleted').innerHTML = 'Clear Completed ' + countComplete;
    count = getCount();
    document.getElementById('myCount').innerHTML = count + ' items left';
}

function completedCount() {
    let countAllCompleted = document.querySelectorAll('.checked').length;
    return countAllCompleted;
}

// Execute a function with Enter key
let keyEnter = document.getElementById('myInput');
keyEnter.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('addButton').click();
    }
});

// Filter todoes by status
function filterAll() {
    let allBtn = document.querySelectorAll("#myUL .listitem");
    let f;
    for(f = 0; f < allBtn.length; f++) {
        allBtn[f].style.display = "block";
    }
}
function filterActive() {
    let activeBtn = document.querySelectorAll("#myUL .checked");
    let g;
    for(g = 0; g < activeBtn.length; g++) {
        activeBtn[g].style.display = "none";
    }
}
function filterCompleted() {
    let completedBtn = document.querySelectorAll("#myUL li:not(.checked)");
    let h;
    for(h = 0; h < completedBtn.length; h++) {
        completedBtn[h].style.display = "none";
    }
}

// Add active class to the current button
let filterButtons = document.getElementById('buttons');
let eachFilterButtons = filterButtons.getElementsByClassName('filter');
for(let b = 0; b < eachFilterButtons.length; b++) {
    eachFilterButtons[b].addEventListener("click", function() {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
