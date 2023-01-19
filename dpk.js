const crypto = require("crypto");

function createSha(data) {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

function deterministicPartitionKey(event) {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate = TRIVIAL_PARTITION_KEY;

  if(event && event.partitionKey) {
    candidate = event.partitionKey;
  } else if(event) {
    const data = JSON.stringify(event);
    candidate = createSha(data);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = createSha(candidate);
  }
  return candidate;
}

module.exports = {
  deterministicPartitionKey
}