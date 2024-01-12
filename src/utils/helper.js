export class Helper {
    static validateFile = (file) => {
        const validImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
        return file && validImageTypes.indexOf(file.type) > -1
    }

    static checkFileSize = (file) => {
        let fileError = ''
        const isValid = this.validateFile(file)
        if (!isValid) {
            fileError = `File ${file.name} not accepted`
        }
        if (file.size > 50000000) {
            // 50 MB
            fileError = 'File is too large.'
        }
        return fileError
    }

    static checkFile = (file) => {
        if (!this.validateFile(file)) {
            window.alert(`File ${file.name} is not accepted`)
            return false
        }
        if (this.checkFileSize(file)) {
            window.alert(this.checkFileSize(file))
            return false
        }
        return true
    }

    static readAsBase64 = async (file) => {
        const reader = new FileReader()

        const fileValue = new Promise((resolve, reject) => {
            reader.addEventListener('load', () => {
                resolve(reader.result)
            })

            reader.addEventListener('error', (event) => {
                reject(event)
            })

            reader.readAsDataURL(file)
        })

        return fileValue
    }
}