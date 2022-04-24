---
sidebar_position: 4
title: Trees
---

:::tip

Binary trees will be examined at the level of _diagrams_ and _descriptions_. You're **not** expected to _construct_ or _trace_ any tree algorithms.

:::

## Logical operation of trees

Trees are very well-knowed for being a **non-linear** data structure. They don't store data in a linear way, like the arrays, stacks, queues or linked lists. But rather organize the data **hierarchically**. Let's dive into some real-life example for a greater understanding:

<img src="/img/study-guides/abstract-data-structures/tree-structure-company-example.webp" alt="Example of a tree struture as a company." width="600"/>

If you happen to have _Business Management_ as a subject, you surely know that companies also use a tree-like structure to organize themselves hierarchically. Futhermore, the file system used by our computers also utilizes a hierarchically tree structure.

<img src="/img/study-guides/abstract-data-structures/tree-structure-file-system.jpg" alt="Example of a tree struture as a file system." width="500"/>

:::info

Trees, in general, may have more than 2 children per node. Hovewer, the **binary tree** (the only one we need to know) can only have **0**, **1** or **2** children. (Terminology will be covered in the next topic.)

:::

## Binary-tree related terminology

In order to fully understand binary trees, we will need to quickly go through its terminology:

<img src="/img/study-guides/abstract-data-structures/tree-structure-terminology.png" alt="Binary-trees and terminology" width="600"/>

| Term    | Explanation                                                                                                                                                                                          |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Root    | The node at top of the tree.                                                                                                                                                                         |
| Child   | The nodes below a given node are its children nodes.                                                                                                                                                 |
| Parent  | The node directly connected to nodes below them (children nodes).                                                                                                                                    |
| Leaf    | A node that has **no** children.                                                                                                                                                                     |
| Level   | A level refers to the amount of generations from the root node. Assuming that the root is at _Level 1_, its children would be at _Level 2_ and grandchildren at _Level 3_.                           |
| Height  | Height is the number of levels a node is from the **farthest leaf node**. The height of a tree is the height of the root. An example: _M_ → Height of _1_, _R_ → Height of _3_, _P_ → Height of _4_. |
| Path    | The path is a list of nodes, we must traverse in order to go **from** one node **to** another. E.g.: Suppose we want to go from _P_ to _A_: P → Q → A → L                                            |
| Subtree | Every node in a tree is the **root** of a subtree. That subtree will consist of that node's descendants.                                                                                             |

## Tree traversal

Traversing a tree means visiting **every** node of the tree. We might, for example want to find the largest value in the tree, for which we will need to visit each node of the tree. In a hierarchical data structure, like the tree, there are several different ways traverse it.

<details><summary>Inorder traversal</summary>
<p>

1. First, visit all the nodes in the **left** subtree.
2. Then the **root** node.
3. Visit all the nodes in the **right** subtree.

<img src="/img/study-guides/abstract-data-structures/Inorder-traversal.gif" alt="Inorder traversal animation" width="400"/>

</p>
</details>

<details><summary>Preorder traversal</summary>
<p>

1. Visit **root** node.
2. Visit all the nodes in the **left** subtree.
3. Visit all the nodes in the **right** subtree.

<img src="/img/study-guides/abstract-data-structures/Preorder-traversal.gif" alt="Preorder traversal animation" width="400"/>

</p>
</details>

<details><summary>Postorder traversal</summary>
<p>

1. Visit all the nodes in the **left** subtree.
2. Visit all the nodes in the **right** subtree.
3. Visit **root** node.

<img src="/img/study-guides/abstract-data-structures/Postorder-traversal.gif" alt="Postorder traversal animation" width="400"/>

</p>
</details>

## Explanation video and PowerPoint presentation

<div className="iframe-container margin-bottom--md">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/iwa5WiFRJ6o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<a href="https://github.com/anonymouscoolguy/HappyGrind/raw/master/static/files/abstract-data-structures/Trees.pptx"><button className="button button--secondary button--md">PowerPoint Presentation 👨🏻‍🏫</button></a>

## Resources

> Dimitriou, Kostas, and Markos Hatzitaskos. _Core Computer Science for the IB Diploma Program (International Baccaalaureate)_. Express Publishing, 2015.

> Fawcett, Amanda. “Data Structures 101: A Deep Dive into Trees with Java.” Educative: Interactive Courses for Software Developers, www.educative.io/blog/data-structures-trees-java. Accessed 23 Apr. 2022.

> Nicopaulino. “The Tree Data Structure of Life.” DEV Community, 14 Mar. 2020, dev.to/nicopaulino/the-tree-data-structure-of-life-24ai.

> Wikipedia contributors. “Tree Traversal.” Wikipedia, 19 Apr. 2022, en.wikipedia.org/wiki/Tree_traversal.

> Ozer, Cahit Barkin. “Tree Data Structures by C.Barkin Ozer.” Medium, 6 Jan. 2022, cbarkinozer.medium.com/tree-data-structures-7075dffb5ab9.
