pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                checkout scm
                sh '''
                cd C:/jenkins/Backend
                docker-compose build
                docker-compose up
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Test"
                sh '''
                    cd C:/jenkins/Backend
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
