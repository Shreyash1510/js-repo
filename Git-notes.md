# Useful Commands :

1. ## git --version
   * This command will display the version of git installed on your system
2. ## git status
3. ## git config commands
   1. ### git config --global user.email "your-email@example.com"
   2. ### git config --global user.name "Your Name" 
    * Setup your email and username in this config file. 
4. ## git config --list
    * This will show you all the settings that you have changed. 
5. ## git status
    * will show you the current state of your repository 
6. ## git init 
    * command will create a new folder on your system and initialize it as a git repository
***

![Complete git flow](image.png)


7. ## git add <file> <file2>
    * command to add the folder to the repository ( whatever file or folder we will work on will be added to repo file so that we can commit changes)  
      - **git status** will check changes in our git 
8.  ## git commit -m "commit message"
       * Here we are committing the changes to the repository

9. ## git log[]
    + This command will show you the history of your repository
       + **git log --oneline** only the commit message

10. ## git config --global core.editor "code --wait"
    + change the default code editor in your system to vscode.
11. ## git branch
    + show all branches 
12. ## git branch bug-fix 
    + create new branch with name "**bug-fix**"
13. ## git switch bug-fix  ()
    + switch branch to "**bug-fix**"
14. ## git switch -c new_branch  ()
    + create and switch to "**new_branch**"
15. ## git merge branch_to_merge
    + This command merges the current_branch  into the branch_to_merge branch.
16. ## git branch -m <old-branch-name> <new-branch-name>
    + rename a branch
17. ## git branch -d <branch-name>
    + delete a branch
18. ## git reset --hard <commit-hash>
    +  reset your branch
22. ```git remote -v```
    + This will show you the remote url of your repository
19. ```git remote add origin https://github.com/Shreyash1510/repo-one.git```
    + add a remote repository in github
20. ```git push remote-name branch-name {git push origin main}```
    + push code frm main branch to origin named repo.
21. ```git push --set-upstream origin test```  OR ```git push -u origin main```
    + to keep your local repository up to date with the remote repository 
# Most useful commands till now
  ```+ git status
  + git branch
  + git switch branchname
  + git status
  + git add filename
  + git commit -m "comment for commit"
  + git log
  + git log --oneline
```
