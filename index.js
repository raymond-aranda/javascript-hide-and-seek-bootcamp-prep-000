function getFirstSelector(selector) {
  const firstSelector = document.querySelector(selector);

  return firstSelector;
}

function nestedTarget() {
  const target = document.getElementById('nested').querySelector('div.target');

  return target;
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

function increaseRankBy(n) {
  const rankedLis = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < rankedLis.length; i++) {
    rankedLis[i].innerHTML = parseInt(rankedLis[i].innerHTML) + n
  }
}
