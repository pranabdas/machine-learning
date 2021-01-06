#   My Machine Learning Journey 

I am trying to learn machine learning by help of numerous resources around the 
web. In this repository, I am keeping a record for myself and sharing here in 
case any of you find it helpful. The concepts are discussed in this 
[documentation page](https://pranabdas.github.io/docs/machine-learning/), 
while the steps are performed in jupyter notebooks in this repository. Clone the
repository in your computer: 

```
git clone --depth 1 https://github.com/pranabdas/machine-learning.git
```

### Setting up Python environment 
    
We will be working on [Jupyter notebooks](https://jupyter.org) and use Python 
programming to perform our tasks. The required Python packages for this tutorial
are: 

1. Python 3, jupyterlab
2. numpy, scipy
3. matplotlib, seaborn
4. pandas, xlrd, openpyxl
5. scikit-learn
6. missingno

If you have Python 3 and above packages installed in your computer, or know how 
to setup, go ahead with the tutorials. 

If you prefer running python and jupyter notebook inside a [Docker](
https://www.docker.com) container, I have a [Dockerfile](./Dockerfile) to build 
the container image. You can go through the Dockerfile and adjust according to 
your needs. Build the image:

```
docker build -t jupyter .
```

We can run the container in interactive mode with shared folder and port 
forwarding with the host:

```
docker run -ti -p 8888:8888 -v ${pwd}:/home jupyter bash
```

Once you are inside the container, you can launch jupyter notebook by entering 
`jupyter-notebook` and leave the container by typing `exit`.

###  Notebooks:

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
8.  [Principal Component Analysis on MNIS dataset](
    ./notebooks/08-pca-mnist-dataset.ipynb) 
