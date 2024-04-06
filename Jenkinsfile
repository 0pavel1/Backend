pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                checkout scm
                sh '''
                docker-compose build
                docker-compose up -d
                sleep 10
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Test"
                sh '''
                    python3 test/pytest.py
                    docker-compose down
                    '''
            }
        }
        stage("Deploy"){
            steps{
                echo "Deploy"
                sh """cd /var/backend-serv
                    docker-compose stop
                    cp -r /var/jenkins/workspace/back/* /var/backend-serv
                    docker-compose build
                    docker-compose up -d
                """
            }    
        }
    }
}
