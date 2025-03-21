pipeline {
    agent { label "docker-pipe" }

    stages {
        stage('Checkout') {
            steps {
                echo "Pulling code from scm"
                checkout scm
            }
        }

        stage("Build Backend") {
            steps {
                dir('backend') {
                    sh 'mvn clean package -DskipTests'
                }
            }
        }

        stage("Build Frontend") {
            steps {
                dir('frontend') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Compose Build')  {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Compose Up') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}