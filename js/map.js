/**
 * Converti un chiffre sur un ordre de grandeur différent
 * 
 * @example Convertir un chiffre de 0 à 1 pour un chiffre de -10 à 10:
 * let chiffre = 10
 * let nouveau_chiffre = map(chiffre, 0, 1, -10, 10)
 * 
 * @param {number} value Chiffre à transformer
 * @param {number} min Valeur la plus petite possible de value
 * @param {number} max Valeur la plus grande de value
 * @param {number} newMin Nouvelle valeur la plus petite possible du return
 * @param {number} newMax Nouvelle valeur la plus grande du return
 */
export default function map(value, min, max, newMin, newMax) {
    return ((value-min) / (max-min)) * (newMax-newMin) + newMin
}