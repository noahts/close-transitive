var transitiveCloseAux = function(evaluated, pending, inFun) {
  if (pending.length < 1) {
    return evaluated;
  }
  else {
    var item = pending.pop();
    var candidates = inFun(item);
    var newCandidates = _.difference(candidates, evaluated);
    for (var newCandidate in newCandidates) {
      pending.push(newCandidates[newCandidate]);
    }
    evaluated.push(item);
    evaluated = _.uniq(evaluated);
    pending = _.uniq(pending);
    return transitiveCloseAux(evaluated, pending, inFun);
  }
};

var transitiveClose = function (inFun, startInt) {
  return transitiveCloseAux([], [startInt], inFun);
};

