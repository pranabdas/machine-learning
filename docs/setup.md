---
title: Setup
---

We will run our code in Jupyter notebook. We will use Python 3 programming
language.

### Installing Python
If you use macOS (Big Sur, 11), you should have already Python 3 installed. If
you use Ubuntu/ Debian, you can install by:
```bash
sudo apt install python3 python3-pip
```

You can check whether Python 3 is installed in your system or not by typing
following in a terminal:
```bash
python3 --version
```
If python 3 is installed, it will print the version number, otherwise you will
see some sort of error.

If you use Windows, you can go to <https://www.python.org>, download and
install latest version of Python 3.

### Installing git
Git is preinstalled in macOS. On Ubuntu/Debian:
```bash
sudo apt install git
```

On Windows go to <https://git-scm.com>, download and install git (optionally,
you can choose to install Git Bash, a UNIX like terminal for Windows).

Once you have git, you can open a terminal (on Windows Command prompt, Git bash,
or Powershell) and clone my repository:
```bash
git clone https://github.com/pranabdas/machine-learning
```

### Setting up Jupyter
You can install Jupyter and other required python packages by going to my
machine-learning directory (that you have locally cloned) and issuing following
command:
```bash
pip install --upgrade -r requirements.txt
```

Now we are ready to launch Jupyter notebook by typing `jupyter-lab` in the
terminal. Navigate to `notebooks` folder and you can open my notebooks.

### Running python and jupyter in Docker container
If you prefer running python and jupyter notebook inside a [Docker](
https://www.docker.com) container, I have a [Dockerfile](
https://github.com/pranabdas/machine-learning/blob/master/Dockerfile) in the
project repository to build the container image. You can go through the
Dockerfile and adjust according to your needs. Build the image:

```bash
docker build -t jupyter .
```

We can run the container in interactive mode with shared folder and port
forwarding with the host:

```bash
docker run -ti -p 8888:8888 -v ${PWD}:/home jupyter bash
```

Once you are inside the container, you can launch jupyter notebook by entering
`jupyter-lab` and leave the container by typing `exit`.

In future, pull upstream changes when you have no local changes:
```bash
git pull
```

If you have local changes that you want to preserve:
```bash
git stash
git pull
git stash apply
```

Pull the upstream changes and override local changes (be careful if you have
important changes, in that case please make a new branch/commit/merge):
```bash
git fetch
git reset --hard origin/master
```

