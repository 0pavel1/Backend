pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                checkout scm
                sh '''
                docker-compose build
                
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
