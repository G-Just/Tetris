/**
 * Returns a darker shade of the given hex color.
 *
 * @param hex - The original color in hex format (e.g. "#00f0f0").
 * @param percent - The percentage to darken the color (0.2 for 20% darker).
 * @returns The darkened color as a hex string.
 */
export function darkenHexColor(hex: string, percent: number): string {
    let num = parseInt(hex.replace("#", ""), 16);
    let r = (num >> 16) & 0xff;
    let g = (num >> 8) & 0xff;
    let b = num & 0xff;

    r = Math.max(0, Math.floor(r * (1 - percent)));
    g = Math.max(0, Math.floor(g * (1 - percent)));
    b = Math.max(0, Math.floor(b * (1 - percent)));

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
