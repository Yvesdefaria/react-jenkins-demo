pipeline{
        agent {
            docker{
            image'node:18'
            }
        }
        stages{

            stage('Install dependencies'){
                steps{
                    sh 'npm install'
                }
            }

            stage('Build'){
                steps{
                    sh 'npm run build'
                }
            }
        }
    
}