pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                checkout scm
                sh '''
                docker-compose build
                docker-compose up -d
                sleep 30
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Test"
                sh '''
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
