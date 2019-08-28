export function afgerond(prijs) {
    return Number.parseFloat(prijs).toFixed(2);
}

export function slugify(text) {
    return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\.+/g, '')
    .replace(/\’+/g, '-')
    .replace(/\'+/g, '-');
}

export function uppercase(text) {
    return text.toUpperCase();
}

export function lowercase(text) {
    return text.toLowerCase();
}

export function capitalize(s) {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export function truncate (str, length, ending) {
    if (length == null) {
      length = 100;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > length) {
      return str.substring(0, length - ending.length) + ending;
    } else {
      return str;
    }
  };