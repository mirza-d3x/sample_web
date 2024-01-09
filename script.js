document.getElementById('startButton').addEventListener('click', function () {
    window.postMessage("StartButton")
    document.getElementById('welcomeText').innerText = 'Start Button Clicked!';
});

document.getElementById('doneButton').addEventListener('click', function () {
    window.postMessage("DoneButton");
    document.getElementById('welcomeText').innerText = 'Done Button Clicked!';
});