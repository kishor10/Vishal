/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export declare const batch: <T>(target: T[], batchSize: number, offset?: number) => T[][];
/**
 * returns array with numbers from first argument to bound.
 * */
export declare const rangeFromTo: <T>(from: number, to?: number, producer?: (number: any) => T) => any[];
/**
 * returns array with numbers from zero to bound.
 * */
export declare const range: <T>(bound: number, producer?: (number: any) => T) => any[];
