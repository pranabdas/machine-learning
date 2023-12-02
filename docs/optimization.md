---
title: Optimization
---
Optimization involves minimizing or maximizing a function:

$$
\min\limits_x f(x)
$$

:::note

If we need to maximize $f(x)$, we can minimize $-f(x)$ instead.

:::

Most problems of interest, involve some constrains on what $x$ values are
possible: $x \in \Omega$. While optimization of arbitrary functions over
arbitrary domains remains a difficult task, such problems can become somewhat
simpler when $f(x)$ and $\Omega$ are convex.

### Convexity
For simplicity, we will assume $\Omega$ is a subset of $\R^n$.

:::info Definition 1

A set $\Omega \subseteq \R^n$ is convex if for all $x_1, x_2 \in \Omega$ and $t
\in [0, 1]$,

$$
(1 - t)x_1 + tx_2 \in \Omega
$$

:::

:::info Definition 2

Let $\Omega \subseteq \R^n$ be convex. A function $f : \Omega \to \R$ is convex
if for all $x_1, x_2 \in \Omega$ and $t \in [0, 1]$,

$$
f((1 - t)x_1 + tx_2) \le (1 - t)f(x_1) + tf(x_2)
$$

:::

Some important examples of convex functions include affine functions, and
$\ell_p$ norms for $p \ge 2$. More generally, any norm in vector space is convex
by the triangle inequality and homogeneity. We say that $f$ is strictly convex
if the inequality above is replaced by a strict inequality. We can further
restrict to a smaller, better behaved class of functions called strongly convex
functions.

:::info Definition 3

Let $\Omega \subseteq \R^n$ be convex. A function $f : \Omega \to \R$ is
strongly convex with parameter $\lambda > 0$ if $g(x) := f(x) - \frac{\lambda}
{2}||x||_2^2$ is convex.

:::

If $f$ is twice-differentiable, then $\lambda$-strong convexity is equivalent to
the condition that for all $x, y \in \Omega$,

$$
f(y) \ge f(x) + \langle f(x), y-x \rangle + \frac{\lambda}{2}||x||_2^2
$$

:::info Lemma 4

Suppose $f : \R^n \to \R$ is a differentiable, convex function. If $x^*$ is a
global minimizer of $f$ then $\nabla f(x^*) = 0$.

Suppose further that $f$ is twice-differentiable. If $x^*$ is a global minimizer
of $f$, then $\nabla f(x) = 0$ and $\nabla^2 f(x^*)$ is positive semi-definite.
Conversely, if $\nabla f(y) = 0$ and $\nabla^2 f(y)$ is positive-definite, then
$y$ is a global minimizer of $f$.

:::

Points where $\nabla f(x) = 0$ are referred to as *critical points*.

:::info Definition 5

A function $f : \Omega \to \R$ is L-Lipschitz if for all $x_1, x_2 \in \Omega$,

$$
|f(x_1) - f(x_2)| \le L||x_1 - x_2||
$$

:::

If $f$ is assumed to be differentiable, then for all $x$, $||\nabla f(x)||_2 \le
L$. If the gradient of $f$ is Lipschitz, then we say that the function is
smooth.

:::info Definition 6

A function $f: \Omega \to \R$ is $\beta$-smooth if for all $u, v \in \Omega$, we
have

$$
||\nabla f(u) - \nabla f(v)||_2 \le \beta||u - v||
$$

:::

Note that the $\beta$-smooth condition implies that for all $x, y$:

$$
f(y) \le f(x) + \langle \nabla f(x), y - x\rangle + \frac{\beta}{2}||y - x||_2^2
$$

### Resources
- https://zachcharles.com/files/thesis.pdf
