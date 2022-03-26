export const validEmail = new RegExp(
    // '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
    // "/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/."
    // '^[a-z0-9]+@[a-z]+\.[a-z]{2,3}'
    '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'
 );
 export const validName = new RegExp(`/^[a-z ,.'-]+$/i`);
//  /^ *$/
export const validField = new RegExp('/^ *$/');