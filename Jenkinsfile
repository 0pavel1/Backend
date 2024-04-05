pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                checkout scm
                bat '''
                docker-compose build
                
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Test"
                bat '''
                    docker-compose down
                    '''
            }
        }
        stage("Deploy"){
            steps{
                echo "Deploy"
            }    
        }
    }
}
