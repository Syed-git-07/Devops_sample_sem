pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install') {
            steps {
                bat 'call npm install'
            }
        }
        stage('Build'){
            steps {
                bat 'call npm run build'
            }
        }
        stage('Deploy') {
            steps {
                bat 'call npm run dev'
            }
        }
    }
}