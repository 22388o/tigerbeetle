const Result = {};

var result = 0;

Result.OK = result++;
Result.TransferExists = result++;
Result.TransferExpired = result++;
Result.TransferAmountZero = result++;
Result.TransferCreateTimestampReserved = result++;
Result.TransferCommitTimestampReserved = result++;
Result.PayerDoesNotExist = result++;
Result.PayeeDoesNotExist = result++;
Result.ParticipantsAreTheSame = result++;
Result.NetDebitCap = result++;

Result.TransferDoesNotExist = result++;

module.exports = Result;
