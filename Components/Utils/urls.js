export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337'

export const MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_KEY || 'pk_live_B9D6A3544D3D79BB'

/**
 * Given an image return the URL
 * Works for local and deployed strapies 
 * @param {any} image
 */
export const fromImageTOUrl = (image) => {
    if(!image){
        return "/error.gif"
    }

    if (image.url.indexOf("/") === 0){
        return `${API_URL}${image.url}`
    }

    return image.url
}