# TERMINAL CONFIG:
alias bashprofile="cd ~ && vim ./.bash_profile && . ~/.bash_profile"
# - nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
# - git
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
export PS1="\u@\h \W\[\033[32m\]\$(parse_git_branch)\[\033[00m\] $ "

# TOOLS:
alias wb="node /Users/johnrogers/tools/workbench/_runner.js"
alias snippetize="node /Users/johnrogers/tools/snippetize/index.js && wb snippetize"
alias runner="wb runner"
alias todo="wb todo"

# SHORTCUTS:
alias branch="git branch"
alias npm-exec='PATH=$(npm bin):$PATH'

# RANDOM:
alias wtf="find ./src/views/common -path ./node_modules -prune -o -name '*.stories.*' -print"