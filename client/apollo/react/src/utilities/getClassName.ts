type getClassNameParams = {
  baseClassName: string;
  modifiers?: Array<string | boolean | undefined>;
  className?: string;
};


/**
 * Génère une chaîne de classes CSS à partir d'un nom de base, de modificateurs optionnels et d'une classe additionnelle.
 *
 * @param {Object} params - Les paramètres de la fonction.
 * @param {string} params.baseClassName - Le nom de classe de base (obligatoire).
 * @param {Array<string|boolean|undefined>} [params.modifiers] - Liste de modificateurs à ajouter sous la forme `${baseClassName}--{modificateur}`. Les valeurs falsy sont ignorées.
 * @param {string} [params.className] - Classe(s) additionnelle(s) à ajouter à la chaîne finale.
 * @returns {string} La chaîne de classes CSS concaténées, séparées par un espace.
 *
 * @example
 * getClassName({ baseClassName: 'btn', modifiers: ['large', false, 'primary'], className: 'custom' })
 * // Retourne : 'btn btn--large btn--primary custom'
 */
export const getClassName = ({
  baseClassName,
  modifiers = [],
  className,
}: getClassNameParams) => {
  const parsedModifiers = modifiers
    .filter(Boolean)
    .map((modifier) => `${baseClassName}--${modifier}`);

  return [baseClassName, ...parsedModifiers, className]
    .filter(Boolean)
    .join(" ");
};
