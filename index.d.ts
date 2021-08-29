export interface QsConnectProps {
    qsName?: string;
}

export function qsConnect<T = any>(target?: T): Function;

export function qsSelector<T = any>(qsName?: string): T;
