[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/3aNDMX3O)
# Dynamic Programming Euler's Number

The mathematical constant $e$ (Euler's number) is defined as follows:

$$ e = \sum^{\infty}_{i=0} \frac{1}{i!} = \frac{1}{1} + \frac{1}{1} +
\frac{1}{1\cdot 2} + \frac{1}{1\cdot 2\cdot 3} + \frac{1}{1\cdot 2\cdot 3\cdot
4} + \ldots$$

I've provided an implementation of a function to approximate $e$ up to a number
of $n$ terms in `code.js` for you. However, it does repeated work -- identify
where the repeated work occurs and avoid it through bottom-up dynamic
programming (not memoization). Change the implementation accordingly.

Test your new functions; I've provided some basic testing code in `code.test.js`
but you need to go beyond that.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?
The worst case $\Theta$ time is $\Theta(n)$. In this algorithm, the while loop will iterate n times. Adding, multiplying and dividing all take constant time, and these are all done n times,
meaning the worst case is $\Theta(n)$. This is because initialzing the varibales only takes constant time. In the while loop, we multiply fact by i to get the new factorial value, add 1/ fact to the sum, and then 
increment i. This is done n times. The additional work is in the factorial function. We cut it out by starting at 1 and building it up with every iteration, this way we don't have to find the factorial for each
i, it's being mulitplied by i each iteration to be built up and used in the next iteration.
