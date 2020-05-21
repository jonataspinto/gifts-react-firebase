import images from './img';
import { Lang } from './constants/pt';

const getImageOrIcon = fileName => `${images}.${fileName}`;

export { Lang, images, getImageOrIcon };
