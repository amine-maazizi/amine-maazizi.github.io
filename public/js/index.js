const emails = document.getElementsByClassName("email");

for (const email of emails) {
    email.addEventListener('click', (event) => copyToClipboard(email));
} 

async function copyToClipboard(link) {
    // Get the text field
    var text = link.innerHTML;
    var sanitizedText = text.replace(" [at] ", "@").replace(" (dot) ", ".");

    navigator.clipboard.writeText(sanitizedText);

    for (const email of emails) {
        email.style.pointerEvents = 'none';
    }

    await customAlert("Copied to clipboard");

    for (const email of emails) {
        email.style.pointerEvents = 'auto';
    }
}


const lerp = (start, end, amt) => start + (end - start) * amt;

function lerpAnimation(element, start, end, duration) {
    let startTime;

    function animate(time) {
        if (startTime === undefined)
            startTime = time;

        const elapsed = time - startTime;
        const t = Math.min(elapsed / duration, 1);

        element.style.left = lerp(start[0], end[0], t) + "px";
        element.style.top  = lerp(start[1], end[1], t) + "px";

        if (t < 1)
            requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}


function fadeawayAnimation(element, duration) {
    return new Promise((resolve) => {
        let startTime;

        function animate(time) {
            if (startTime === undefined)
                startTime = time;

            const elapsed = time - startTime;
            const t = Math.min(elapsed / duration, 1);

            element.style.opacity = String(1 - t);

            if (t < 1)
                requestAnimationFrame(animate);
            else
                resolve();
        }

        requestAnimationFrame(animate);
    })
}

const pixelToNumber = (px) => Number(px.slice(0, -2));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function customAlert(text) {
    var divHeight = pixelToNumber(getComputedStyle(document.documentElement).getPropertyValue('--alert-height'));

    var alertDiv = document.getElementById("alert");
    alertDiv.innerHTML = text;

    var position = [pixelToNumber(getComputedStyle(alertDiv).left), pixelToNumber(getComputedStyle(alertDiv).top)];
    
    var start = position
    var end = [position[0], position[1] + 5 * divHeight /  4];

    lerpAnimation(alertDiv, start, end, 100);

    await sleep(1000);

    await fadeawayAnimation(alertDiv, 500);

    alertDiv.style.left = start[0] + 'px';
    alertDiv.style.top = start[1] + 'px';
    alertDiv.style.opacity = '1.0';
}