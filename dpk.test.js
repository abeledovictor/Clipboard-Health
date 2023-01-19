const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the correspondant hash when a string is passed as a partition key", () => {
    const trivialKey = deterministicPartitionKey('string input');
    expect(trivialKey).toBe("a4ab33b41ce3bbe7d2642de0340f11c423f154e631608a4aa26fbd4a28e0415dbf591ba0f0de5eb370c33ba1406741076cc73b5ca934652c63f87c8257145447");
  });

  // TODO throw error when empty object is passed
  it("Returns the correspondant hash when an empty object is passed", () => {
    const trivialKey = deterministicPartitionKey({});
    expect(trivialKey).toBe("c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862");
  });

  it("Returns the correspondant hash when an object is passed as a partition key", () => {
    const trivialKey = deterministicPartitionKey({partitionKey: 'aasd'});
    expect(trivialKey).toBe("aasd");
  });
});
