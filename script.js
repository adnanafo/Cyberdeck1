const output = document.getElementById('terminal-output');
const messages = [
    "> Accessing encrypted satellite uplink...",
    "> Warning: Unauthorized access detected.",
    "> Bypassing firewall...",
    "> Connection established.",
    "> Welcome, Operative."
];

let i = 0;
function typeLog() {
    if (i < messages.length) {
        const line = document.createElement('div');
        line.innerHTML = messages[i];
        output.insertBefore(line, output.lastElementChild);
        i++;
        setTimeout(typeLog, 1500);
    }
}

window.onload = typeLog;
