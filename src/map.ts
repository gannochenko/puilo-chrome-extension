const HUILO = 'Хуйло';
const HUILA = 'Хуйла';
const HUILU = 'Хуйлу';
const HUILOM = 'Хуйлом';

export const map = new Map<RegExp, string>([
    [/владимира\s+путина/gim, HUILA],
    [/Владимира\s+Путина/gim, HUILA],
    [/владимиру\s+путину/gim, HUILU],
    [/Владимиру\s+Путину/gim, HUILU],
    [/владимиром\s+путиным/gim, HUILOM],
    [/Владимиром\s+Путиным/gim, HUILOM],
    [/владимир\s+путин/gim, HUILO],
    [/Владимир\s+Путин/gim, HUILO],

    [/путина/gim, HUILA],
    [/Путина/gim, HUILA],
    [/путину/gim, HUILU],
    [/Путину/gim, HUILU],
    [/путиным/gim, HUILOM],
    [/Путиным/gim, HUILOM],
    [/путин/gim, HUILO],
    [/Путин/gim, HUILO],
]);
