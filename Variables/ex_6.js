// Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

/* 
No, no error will occur and bar will be logged to the console. Since both FOO variables have
different scopes, a TypeError will not occur.
*/