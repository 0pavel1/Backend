pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                checkout scm
                sh '''
                docker-compose build
                docker-compose up -d
                '''
            }
        }
        stage('Test') {
            steps {
                echo "Test"
                sh '''
                    pip install requests
                    python3 test/pytest.py
                    docker-compose stop
                    '''
            }
            post { 
                always { 
                    echo 'I will always say Hello again!'
                }
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
