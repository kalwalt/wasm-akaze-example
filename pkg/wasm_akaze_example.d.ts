/* tslint:disable */
/* eslint-disable */
/**
* @param {Uint8Array} buf
* @param {number} width
* @param {number} height
* @returns {Uint8Array}
*/
export function open_from_buffer(buf: Uint8Array, width: number, height: number): Uint8Array;
/**
*/
export function print_console(): void;
/**
* @param {string} url
*/
export function open_image(url: string): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly open_from_buffer: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly print_console: () => void;
  readonly open_image: (a: number, b: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
