#/bin/bash
starttime=$(date +%s)


serverlessDeploy () {
    presentBranch=$(git branch | grep \* | cut -d ' ' -f2)
    env=$1
    region=$2
    if [ -z $env ]; 
        echo "Environment not defined, defaulting to $presentBranch "
        then 
         env=$presentBranch 
        fi  #if no env is defined, use branch name
    if [ -z $region ]; 
        then 
            region="us-east-1" 
            echo "Region not defined, defaulting to $region "
        fi #if no region is passed, default to us-east-1
    sls deploy -v --stage "$env" --region "$region" --nos3sync
    sls exportEndpoints -v --stage "$env" --region "$region"
}

reactDeploy () {
    if [ ! -f "build.sh" ]; then #Checks to that build.sh exists in same directory indicating user.
        echo "Not executing from root of directory, exiting."
        exit 0
    fi
    cd web/
    npm install
    npm run build
    cd ../
    sls s3sync -v --stage "$env" --region "$region"
}

installDeps () {
    npm install
}

checkDependencies () {
    #check for npm
    npmstatus=$(which npm)
    if [ -z "$npmstatus" ];
        then 
            echo "npm not found, quiting!"
            exit 0
    fi
    #check for git
    gitstatus=$(which git)
    if [ -z "$gitstatus" ];
        then 
            echo "git not found, quiting!"
            exit 0
    fi
    #check for aws
    awsstatus=$(which aws)
    if [ -z "$awsstatus" ];
        then 
            echo "aws not found, quiting!"
            exit 0
    fi
    #check for serverless
    serverlesstatus=$(which serverless)
    if [ -z "$serverlesstatus" ];
        then 
            echo "serverless not found, quiting!"
            exit 0
    fi 
}


checkDependencies
installDeps
serverlessDeploy
reactDeploy
