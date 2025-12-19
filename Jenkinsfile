pipeline{
        agent any 

        stages{

            stage('Checkout'){
                steps{
                    checkout scm
                }
            }

            stage('Install dependencies'){
                steps{
                    sh 'npm install'
                }
            }

            stage('Test'){
                steps{
                    sh 'npm test -- --watchAll=false'
                }
            }

            stage('Build'){
                steps{
                    sh 'npm run build'
                    archiveArtifacts artifacts: 'build/**', fingerprint: true
                }
            }

            stage('Deploy'){
                steps{
                    sh 'npm run deploy'
                }
            }
        }
    
}