const slugify = text => {
    // Return a "slugified" version of the text. This means:
    // - Everything in lowercase
    // - Replace all letters with accents, umlauts, etc. to a normalized letter
    //   (e.g. Déjà Vu -> Deja Vu, Jürgen -> Jurgen, etc.)
    //   (hint: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript)
    // - Replace all other non-alphanumeric characters (incl. spaces) with a hyphen (-)
    // - Leading and trailing hyphens stripped
    // - Multiple consecutive hyphens replaced with a single hyphen

    return ''
}

module.exports = { slugify }
