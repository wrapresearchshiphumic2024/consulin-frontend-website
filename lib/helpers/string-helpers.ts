export function getInitials(firstname: string, lastname: string): string {
    const firstInitial = firstname.charAt(0).toUpperCase();
    const lastInitial = lastname.charAt(0).toUpperCase();
    return `${firstInitial}${lastInitial}`;
}

export function formatFullName(firstname: string, lastname: string): string {
    const formattedFirstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
    const formattedLastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);
    return `${formattedFirstname} ${formattedLastname}`;
}
export function formatCommaSeparated(items: string[]): string {
    if (!items || items.length === 0) return "No items available";

    if (items.length === 1) return items[0];

    if (items.length === 2) return items.join(" and ");

    return `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`;
}
export function formatHumanReadableDate(isoDate: string): string {
    const date = new Date(isoDate);

    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    };

    return date.toLocaleDateString('id-ID', options).replace('.', '');
}
