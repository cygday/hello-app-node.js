pipeline {
    agent any
    
    stages {
        stage('checkout') {
            steps {
                git url: "https://github.com/cygday/hello-app-node.js.git", branch: "main" 
            }
        }
        stage('build') {
            steps {
                sh 'docker build -t hello-app:v2 .'
            }
        }
        stage('test') {
            steps {
                sh 'docker run -d --name hello-app -p 3000:3000 hello-app:v2'
            } //if you dont need logs use -d
        }
        stage('deploy') {
            steps {
                sh 'curl http://localhost:3000'
            }
        }
    }
    
    post {
        always {
            echo "docker build success/failure"
        }
        success {
            echo "docker build success"
        }
        failure {
            echo "docker build failed.....check logs"
        }
    }
}
