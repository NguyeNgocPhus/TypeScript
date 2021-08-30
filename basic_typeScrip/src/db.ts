function printAll(strs: string | string[] | null) {
  if (typeof strs === "object" && strs) {
    for (const s of strs) {
// Object is possibly 'null'.
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
    // do nothing
  }
}
