# How to Contribute

**1.** First of all, Fork [this](https://github.com/incognion/beginner-projects.git) repository.

**2.**  Clone your forked copy of the repository on your system.

```
git clone https://github.com/<your_user_name>/beginner-projects.git
```

**3.** Navigate to the cloned file directory.

```
cd beginner-projects
```

**4.** Add a reference (remote) to the original repository.

```
git remote add upstream https://github.com/incognion/beginner-projects.git
```
**5.** Check the remotes for this repository.
```
git remote -v
```
**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main repository (updated repository).

```
git pull upstream main
```
**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perfom your desired changes to the code base.

**9.** Track your changes.

```
git add . 
```

**10.** Commit your changes .

```
git commit -m "changes_you_made"
```

**11.** Push the committed changes in your feature branch to your remote repo.
```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`. Please ensure you compare your feature branch to the desired branch of the repo you are suppose to make a PR to.

**13.** Add appropriate title and description to your pull request explaining your changes and efforts done.


**14.** Click on `Create Pull Request`.

**15** Voila! You have made a PR to this Repository. Sit back patiently and relax while the your PR is reviewed. 

## ❤️
