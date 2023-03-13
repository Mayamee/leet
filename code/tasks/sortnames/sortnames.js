const separateNames = (fnln) => fnln.split(" "); 
const solution = ([...names]) => {
  const sortedNames = names.sort((a,b) => {
		const [, ln1] = separateNames(a);
    const [, ln2] = separateNames(b);
    const ln1Letter = ln1.charAt(0);
    const ln2Letter = ln2.charAt(0);
    if (ln1Letter === ln2Letter) return 0;
    if (ln1Letter > ln2Letter) return 1;
    if (ln1Letter < ln1Letter) return -1;
  });
  return sortedNames;
};


console.log(solution(["Barbara Liskov","Bill Gates","Linus Torvalds"]));
