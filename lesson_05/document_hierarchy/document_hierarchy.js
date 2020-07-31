/**
 * Returns the hierarchical structure of the document to the console.
 * Defaults to the root document.
 * Each nesting level increases the indentation.
 *
 * @example
 * // console.log:
 * //   10 html null
 * //   1 HTML null
 * //     1 HEAD null
 * //       3 #text
 * //
 * //       1 META null
 * //       3 #text
 * //
 * //       1 TITLE null
 * //         3 #text DOM Tree
 * //       3 #text
 * //
 * //     3 #text
 * //
 * //     1 BODY null
 * //       3 #text
 * //
 * //       1 H1 null
 * //         3 #text Tree
 * //       3 #text
 * //
 * //       1 UL null
 * //         3 #text
 * //
 * //         1 LI null
 * //           1 STRONG null
 * //             3 #text foo
 * //           3 #text  bar
 * //         3 #text
 * //
 * //         1 LI null
 * //           3 #text baz
 * //         3 #text
 * //
 * //       3 #text
 * //
 * //       1 SCRIPT null
 * showTree();
 *
 * @param {Document} tree HTML node on which to build a recursive tree
 * @param {string} indent Indent in the form of several spaces before child nodes
 * @return {undefined}
 */
function showTree(tree = document, indent = '') {
    for (let node of tree.childNodes) {
        console.log(indent, node.nodeType, node.nodeName, node.nodeValue);

        showTree(node, indent + '  ');
    }
}

// Variant using nextSibling
//
// function showTree(tree = document, indent = '') {
//     let node = tree.firstChild;
//
//     while (node) {
//         console.log(indent, node.nodeType, node.nodeName, node.nodeValue);
//
//         showTree(node, indent + '  ');
//
//         node = node.nextSibling;
//     }
// }

showTree();
