// Challenge 1 solution

export default function tobiesFriends(n, scores) {
  if (typeof n !== 'number') {
    throw new Error('Parameter n should be a number');
  }
  
  if (!Array.isArray(scores)) {
    throw new Error('Parameter scores should be an array');
  }

  return n;
}
