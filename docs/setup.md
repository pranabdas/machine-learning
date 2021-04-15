---
title: Setup
---

We will run our code in Jupyter notebook. We will use Python 3 programming
language.

### Installing Python
If you use macOS (Big Sur, 11), you should have already Python 3 installed. If
you use Ubuntu/Debian, you can install by:
```console
sudo apt install python3 python3-pip
```

You can check whether Python 3 is installed in your system or not by typing
following in a terminal:
```console
python3 --version
```
If python 3 is installed, it will print the version number, otherwise you will
see some sort of error.

If you use Windows, you can go to <https://www.python.org>, download and
install latest version of Python 3.

### Installing git
Git is preinstalled in macOS. On Ubuntu/Debian:
```console
sudo apt install git
```

On Windows go to <https://git-scm.com>, download and install git (optionally,
you can choose to install Git Bash, a UNIX like terminal for Windows).

Once you have git, you can open a terminal (on Windows Command prompt, Git bash,
or Powershell) and clone my repository:
```console
git clone --depth 1 https://github.com/pranabdas/machine-learning
```

### Setting up Jupyter
You can install Jupyter and other required python packages by going to my
machine-learning directory (that you have locally cloned) and issuing following
command:
```console
pip install --upgrade -r requirements.txt
```

Now we are ready to launch Jupyter notebook by typing `jupyter-notebook` in the
terminal. Navigate to `notebooks` and you can open my notebooks.

### Running python and jupyter in Docker container
If you prefer running python and jupyter notebook inside a [Docker](
https://www.docker.com) container, I have a [Dockerfile](
https://github.com/pranabdas/machine-learning/blob/master/Dockerfile) to build
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
`jupyter-notebook` and leave the container by typing `exit`.

In future, pull upstream changes when you have no local changes:
```console
git pull
```

Pull the upstream changes and override local changes (be careful if you have
important changes, in that case please make a new branch/commit/merge):
```console
git fetch
git reset --hard origin/master
```

### Documentation
This documentation is created using [docusaurus](https://docusaurus.io/).

Install required `npm` packages:
```console
npm install
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
