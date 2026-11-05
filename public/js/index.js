const emails = document.querySelectorAll(".email");

for (const email of emails) {
    email.addEventListener("click", (event) => {
        event.preventDefault();
        copyToClipboard(email);
    });
}

async function copyToClipboard(link) {
    const text = link.textContent.trim();
    const sanitizedText = text
        .replace(/\s*\(dot\)\s*/g, ".")
        .replace(/\s*\[at\]\s*/g, "@");

    try {
        await navigator.clipboard.writeText(sanitizedText);
    } catch (error) {
        await customAlert("Copy failed; please select the address");
        return;
    }

    await customAlert("Copied to clipboard");
}

const lerp = (start, end, amount) => start + (end - start) * amount;

function lerpAnimation(element, start, end, duration) {
    let startTime;

    function animate(time) {
        if (startTime === undefined) {
            startTime = time;
        }

        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        element.style.left = `${lerp(start[0], end[0], progress)}px`;
        element.style.top = `${lerp(start[1], end[1], progress)}px`;

        if (progress < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function fadeawayAnimation(element, duration) {
    return new Promise((resolve) => {
        let startTime;

        function animate(time) {
            if (startTime === undefined) {
                startTime = time;
            }

            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);

            element.style.opacity = String(1 - progress);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                resolve();
            }
        }

        requestAnimationFrame(animate);
    });
}

const pixelToNumber = (px) => Number(px.replace("px", ""));
const sleep = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function customAlert(text) {
    const alertDiv = document.getElementById("alert");

    if (!alertDiv) {
        return;
    }

    const divHeight = pixelToNumber(
        getComputedStyle(document.documentElement)
            .getPropertyValue("--alert-height")
    );

    alertDiv.textContent = text;

    const position = [
        pixelToNumber(getComputedStyle(alertDiv).left),
        pixelToNumber(getComputedStyle(alertDiv).top)
    ];

    const start = position;
    const end = [position[0], position[1] + 5 * divHeight / 4];

    lerpAnimation(alertDiv, start, end, 100);

    await sleep(1000);
    await fadeawayAnimation(alertDiv, 500);

    alertDiv.style.left = `${start[0]}px`;
    alertDiv.style.top = `${start[1]}px`;
    alertDiv.style.opacity = "1";
}
