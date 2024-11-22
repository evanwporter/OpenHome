export function PluginItemToString(index: number, items: string[]): string {
    if (index < 0 || index >= items.length) {
        return `Index ${index} out of range`
    }
    return items[index]
}
  
export function PluginItemFromString(itemName: string, items: string[]): number {
    return items.findIndex((item) => item === itemName)
}