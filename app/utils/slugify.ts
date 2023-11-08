const replacements: { [key: string]: string } = {
  ä: 'ae',
  Ä: 'Ae',
  ö: 'oe',
  Ö: 'Oe',
  ü: 'ue',
  Ü: 'Ue',
  ß: 'ss',
};

export default function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[äöüßÄÖÜ]/g, (match) => replacements[match] || match)
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
