# TERMINAL CONFIG:
alias bpe="open ./.bash_profile -a 'Visual Studio Code'"
alias bpr=". ~/.bash_profile"
alias bashprofile="cd ~ && vim ./.bash_profile && . ~/.bash_profile"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# Branch Prompt: Adds git branch to prompt...
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
export PS1="\u@\h \W\[\033[32m\]\$(parse_git_branch)\[\033[00m\] $ "
# /Branch Prompt

export workhome="$HOME/work"
export codehome="$workhome/code"
export todohome="$workhome/todo"
export toolshome="$workhome/tools"

# GIT:
alias gl="git log --graph --pretty=oneline --abbrev-commit"
# Count lines historically: git ls-files | while read f; do git blame -w -M -C -C --line-porcelain '$f' | grep '^author '; done | sort -f | uniq -ic | sort -n
# Count lines current: git ls-files | while read f; do git blame -w --line-porcelain -- '$f' | grep -I '^author '; done | sort -f | uniq -ic | sort -n
# Commit Count by user: git shortlog -s
# Count insertion and deletion by author: git log --author=Shing --pretty=tformat: --numstat | grep -v '^-' | awk '{ add+=$1; remove+=$2 } END { print add, remove }'
# Generate gitstats: ./gitstats /Users/johnrogers/work/code/web-application ./output

# TOOLS:
alias wb="node $toolshome/workbench/_runner.js"
alias tools="wb tools"
alias snippetize="node $toolshome/snippetize/index.js"
alias pad="wb pad"
alias scratch="wb open scratch"
alias todo="wb open todo"
alias npm-exec='PATH=$(npm bin):$PATH'
alias sql="wb open sql"
alias tardis="node $toolshome/sherlock/tardis"
alias checkout="node $toolshome/checkout/index"

# APPS:
alias bitbucket="open \"https://bitbucket.org/dashboard/overview\""
alias gmail="open \"http://gmail.com\""
alias gcalendar="open \"https://calendar.google.com\""
alias hermes-server="open -a \"IntelliJ IDEA\""
alias jira="open \"https://fetchpackage.atlassian.net/jira/your-work\""
alias hello="gmail && gcalendar && jira && bitbucket && open -a Slack && open -a Spotify && wb open webapp && wb open todo && hermes-server"

# FETCH:
export REACT_APP_API_URL="http://0.0.0.0:8080"
alias update-code="git branch | grep \* | cut -d ' ' -f2 | xargs -I{} git stash push -m \"Stashing {} to update master\" && git checkout master && git pull"
alias iris="wb open iris"
alias iris-update="iris-dir && update-code"
alias iris-dir="cd $codehome/iris"
alias iris-run="iris-dir && yarn run serve"
alias wa="webapp-dir && npm run"
alias walint="npm run tslint:fix-precommit"
alias webapp-update="webapp-dir && update-code"
alias webapp-dir="cd $codehome/web-application"
alias hermes="wb open hermes"
alias hermes-dir="cd $codehome/hermes"
alias hermes-update="hermes-dir && update-code"
alias update-all="hermes-update && iris-update && webapp-update"

# RANDOM:
alias wtf="find ./src/views/common -path ./node_modules -prune -o -name '*.stories.*' -print"
