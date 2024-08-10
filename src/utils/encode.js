export function encodeIntToBase64(int) {
    let buffer = new ArrayBuffer(4);
    let view = new DataView(buffer);
    view.setUint32(0, int, false); // Store the integer in the buffer
    let uint8Array = new Uint8Array(buffer);
    let binaryString = String.fromCharCode(...uint8Array);
    return btoa(binaryString); // Encode to base64
}

export function decodeBase64ToInt(base64) {
    let binaryString = atob(base64); // Decode the base64 string
    let buffer = new ArrayBuffer(4);
    let uint8Array = new Uint8Array(buffer);
    for (let i = 0; i < binaryString.length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
    }
    let view = new DataView(buffer);
    return view.getUint32(0, false); // Read the integer from the buffer
}