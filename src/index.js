export function formatDate(date) {
    const d = new Date(date);

    if (Number.isNaN(d.getTime())) {
        throw new Error("Invalid date");
    }

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    return `${day}/${month}/${year}`;
}

export function addDays(date, days) {
    const d = new Date(date);

    if (Number.isNaN(d.getTime())) {
        throw new Error("Invalid date");
    }

    if (!Number.isFinite(days)) {
        throw new Error("Days must be a valid number");
    }

    d.setDate(d.getDate() + days);

    return d;
}

export function isWeekend(date) {
    const d = new Date(date);

    if (Number.isNaN(d.getTime())) {
        throw new Error("Invalid date");
    }

    const day = d.getDay();

    return day === 0 || day === 6;
}