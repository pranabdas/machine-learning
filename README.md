# My Machine Learning Journey
I am exploring machine learning by help of numerous resources around the web. In
this repository, I am keeping a record for myself and sharing here in case any
of you find it helpful. The concepts are discussed in this [documentation page](
https://pranabdas.github.io/machine-learning/), while the steps are performed in
jupyter notebooks in this repository. Clone the repository in your computer:

```console
git clone --depth 1 https://github.com/pranabdas/machine-learning.git
```

### Setting up Python/Jupyter environment
We will be working on [Jupyter notebooks](https://jupyter.org) and use Python
programming to perform our tasks. The required Python packages for this tutorial
are listed in the `requirements.txt`. If you have Python 3 and specified
packages installed in your computer, or know how to setup, go ahead with the
tutorials. If you have [Python3](https://www.python.org) and pip installed, you
can install the required python packages using `requirements.txt`:
```console
pip install --upgrade -r requirements.txt
```

If you prefer running python and jupyter notebook inside a [Docker](
https://www.docker.com) container, I have a [Dockerfile](./Dockerfile) to build
the container image. You can go through the Dockerfile and adjust according to
your needs. Build the image:

```console
docker build -t jupyter .
```

We can run the container in interactive mode with shared folder and port
forwarding with the host:

```console
docker run -ti -p 8888:8888 -v ${PWD}:/home jupyter bash
```

Once you are inside the container, you can launch jupyter notebook by entering
`jupyter-lab` and leave the container by typing `exit`.

You can follow the examples from the [notes](
https://pranabdas.github.io/machine-learning/docs/) or go through them from the
links below.

### Notebooks:
1.  [Nearest neighbor](./notebooks/01-nn-handwriting-recognition.ipynb) (Nearest
    neighbor classification, various distance functions, K-nearest neighbors)
2.  [K-nearest neighbors](./notebooks/02-knn-iris-dataset.ipynb)
    (K-nearest neighbors to classify Iris flower species)
3.  [Linear regression](./notebooks/03-linear-regression.ipynb)
    (Linear regression using car price dataset, handling of missing data,
    training and test set splitting, linear regression with multiple predictor
    variable)
4.  [Ridge regression](./notebooks/04-ridge-regression.ipynb) (we
    will use regularizer on the above car price dataset)
5.  [Logistic regression](./notebooks/05-logistic-regression-titanic.ipynb)
    (predict survival of passengers in Titanic using logistic regression, binary
    encoding)
6.  [Naive Bayes](./notebooks/06-naive-bayes-uci-winery-dataset.ipynb) (Naive
    Bayes or generative model to classify UCI winery dataset)
7.  [Principal Component Analysis on Iris dataset](
    ./notebooks/07-pca-iris-dataset.ipynb)
8.  [Principal Component Analysis on MNIST dataset](
    ./notebooks/08-pca-mnist-dataset.ipynb)
9.  [Handwritten digit recognition using TensorFlow deep learning](
    ./notebooks/09-deep-learning-tf-hw-digit.ipynb)
10. [Image recognition using TensorFlow deep learning](
    ./notebooks/10-deep-learning-tf-obj-recognition.ipynb)

### Development of documentation
```console
git clone --depth 1 https://github.com/pranabdas/machine-learning.git
```

Pull upstream changes when you have no local changes:
```console
git pull
```

If you have local changes that you want to preserve:
```console
git stash
git pull
git stash apply
```

Pull the upstream changes and override local changes (be careful if you have
important changes, in that case please make a new branch/commit and merge):
```console
git fetch
git reset --hard origin/master
```

Start docusaurus server:
```console
npm start
```

Build docusaurus:
```console
npm run build
```

Deploy documentation to GitHub pages:
```console
npm run gh-deploy
```

Upgrade npm packages:
```console
npm upgrade
```
**Note:** Currently (08/Apr/2021) upgrading might break katex. Latest version of
`remark-math` (which requires `remark v13`) does not work with latest version of
`docusaurus` (which depends on `remark v12`). As of now the supported version is
`remark-math@3`.
