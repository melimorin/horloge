/**
 * Retourne un chiffre à virgule au hasard entre min (inclus) et max (exclus)
 * 
 * @param {number} min 
 * @param {number} max 
 */
export function random(min, max) {
    return Math.random() * (max - min) + min
}

/**
 * Retourne un chiffre entier au hasard entre min (inclus) et max (inclus)
 * 
 * @param {number} min 
 * @param {number} max 
 */
export function randomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}