const longestCommonSubsequence = require('./index.js')

describe('longest common subsequence', () => {
  it('returns a number', () => {
    const result = longestCommonSubsequence("","");
    expect(typeof result).toEqual("number");
  });

  it('returns 0 if no common items', () => {
    const result = longestCommonSubsequence("abc", "def");
    expect(result).toEqual(0);
  })

  it('returns 3 if 3 common items', () => {
    const result = longestCommonSubsequence("abcde", "ace");
    expect(result).toEqual(3);
  })

  it('returns length if same', () => {
    const result = longestCommonSubsequence("abc", "abc");
    expect(result).toEqual(3);
  })

  it('returns 2 if not in same order', () => {
    const result = longestCommonSubsequence("abfd", "dgbcf");
    expect(result).toEqual(2);
  })

  it('returns 2 if not in same order', () => {
    const result = longestCommonSubsequence("ezupkr", "ubmrapg");
    expect(result).toEqual(2);
  })

  it('returns 2 if not in same order', () => {
    const result = longestCommonSubsequence("pmjghexybyrgzczy", "hafcdqbgncrcbihkd");
    expect(result).toEqual(4);
  })

})
 