console.log("test")
//git branch -M main // change branch name to main
//git remote add origin URL- This will add remote repo so that we can push code to remote repository
// to add files to remote repository git push -u orgin main
//we are working on a new feature or updating anything so we create a new branch which creates a copy
//of our project and we do it by first deciding the source to create branch like generally main or any
//other branch like git checkout main and then git branch -b branch_name and then git checkout branch_name
//Now we nake changes and git add ./ then git commit -m 'msg' which saves changes to only local repository.
//so to add the branch in remote repository we use git push --set-upstream origin branch_name or
//git push origin branch_name which adds branch and changes to remote repository. From the next time if we
//make any changes then we just add, comming and push them like git add ./, git commit command and git push command.
// suppose someone makes changes in your remote branch and you can update your local branch in correspondance to
// remote branch by using git pull command. To merge change in to main branch,  we initiate pull req in main branch. If it is 
//accepted by all then it is merged to main branch. To merge these changes in local req we use git pull command.
//Merge conflict- when mul developers tries to change same line of code. It happens. Then git confuses and manually asks developers to decide which change to keep and
//merge


