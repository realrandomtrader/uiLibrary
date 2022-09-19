import icons from './icongroup.json'
const iconNames = Object.keys(icons)

export type IconName = keyof typeof icons;

export {
  icons,
  iconNames,
};
